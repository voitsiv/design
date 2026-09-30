// Shared drawing helpers: hand-drawn sketch style, white background.
const C = { ink: '#1b1b1b', red: '#e0392b', orange: '#f08a1c', blue: '#2b6fd6', grey: '#9a9a9a' };

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function text(x, y, s, o = {}) {
  const { size = 40, color = C.ink, anchor = 'middle', weight = 600, rot = 0 } = o;
  return `<text x="${x}" y="${y}" font-family="Caveat" font-size="${size}" font-weight="${weight}" fill="${color}" text-anchor="${anchor}" transform="rotate(${rot} ${x} ${y})">${esc(s)}</text>`;
}

function path(d, o = {}) {
  const { color = C.ink, w = 3, fill = 'none', dash = '', marker = '' } = o;
  return `<path d="${d}" stroke="${color}" stroke-width="${w}" fill="${fill}" stroke-linecap="round" stroke-linejoin="round"${dash ? ` stroke-dasharray="${dash}"` : ''}${marker ? ` marker-end="url(#ah-${marker})"` : ''}/>`;
}

const arrow = (d, color = C.orange, o = {}) => path(d, { color, w: 3.5, marker: color === C.orange ? 'o' : color === C.blue ? 'b' : color === C.red ? 'r' : 'k', ...o });

// Xiaohei: solid black bean, white dot eyes, thin legs. (x,y) = ground point between feet.
function xh(x, y, s = 1, o = {}) {
  const { arms = [], cap = false, look = 0, ghost = false } = o;
  const fill = ghost ? 'none' : C.ink;
  const dash = ghost ? '8 8' : '';
  let g = `<g transform="translate(${x} ${y}) scale(${s})">`;
  g += path('M-16,-4 L-18,26 M-18,26 L-27,27 M16,-4 L18,26 M18,26 L27,27', { w: 3 / s * s, dash });
  g += path('M-38,-12 C-46,-62 -42,-112 -12,-124 C0,-129 8,-122 14,-132 C18,-124 22,-122 26,-118 C42,-100 46,-62 40,-14 C37,0 -35,4 -38,-12 Z', { fill, dash, w: 3 });
  if (!ghost) {
    g += `<circle cx="${-13 + look}" cy="-86" r="9" fill="#fff"/><circle cx="${11 + look}" cy="-86" r="9" fill="#fff"/>`;
    g += `<circle cx="${-13 + look * 1.6}" cy="-85" r="4" fill="${C.ink}"/><circle cx="${11 + look * 1.6}" cy="-85" r="4" fill="${C.ink}"/>`;
  }
  if (cap) g += path('M-30,-128 L4,-146 L38,-130 L4,-114 Z', { fill: ghost ? 'none' : C.ink, dash }) + path('M32,-128 L34,-106', { w: 2.5, dash });
  g += '</g>';
  // arms in absolute coords: [fromX, fromY, toX, toY, bend]
  for (const [ax, ay, bx, by, bend = 0] of arms) {
    const mx = (ax + bx) / 2 + bend, my = (ay + by) / 2 - Math.abs(bend) * 0.4;
    g += path(`M${ax},${ay} Q${mx},${my} ${bx},${by}`, { w: 3, dash });
  }
  return g;
}

// Mock patient: hollow paper-doll figure with an ID band. copy=true adds an orange copy tick.
function doll(x, y, s = 1, o = {}) {
  const { copy = false, color = C.ink, dash = '' } = o;
  let g = `<g transform="translate(${x} ${y}) scale(${s})">`;
  g += `<circle cx="0" cy="-62" r="13" fill="#fff" stroke="${color}" stroke-width="3"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
  g += path('M-20,0 C-22,-24 -18,-44 0,-46 C18,-44 22,-24 20,0 Z', { fill: '#fff', color, dash });
  g += path('M-9,-22 L9,-22', { color, w: 2.5 });
  if (copy) g += `<circle cx="18" cy="-60" r="9" fill="#fff" stroke="${C.orange}" stroke-width="2.5"/>` + path('M14,-60 L17,-56 L23,-64', { color: C.orange, w: 2.5 });
  return g + '</g>';
}

// Staff: outline human with a lanyard badge.
function staff(x, y, s = 1, o = {}) {
  const { arm = null } = o;
  let g = `<g transform="translate(${x} ${y}) scale(${s})">`;
  g += path('M-12,-4 L-14,30 M12,-4 L14,30');
  g += `<circle cx="0" cy="-98" r="20" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`;
  g += path('M-30,0 C-34,-40 -28,-72 0,-74 C28,-72 34,-40 30,0 Z', { fill: '#fff' });
  g += path('M-10,-72 L0,-48 L10,-72', { w: 2.5 }) + `<rect x="-8" y="-50" width="16" height="12" rx="2" fill="${C.blue}" />`;
  g += '</g>';
  if (arm) g += path(arm, { w: 3 });
  return g;
}

function page(svgBody) {
  return `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face{font-family:Caveat;font-weight:500;src:url(caveat-500.ttf)}
@font-face{font-family:Caveat;font-weight:700;src:url(caveat-700.ttf)}
html,body{margin:0;background:#fff}
</style></head><body>
<svg xmlns="http://www.w3.org/2000/svg" width="1920" height="1080" viewBox="0 0 1920 1080">
<defs>
<filter id="rough" x="-5%" y="-5%" width="110%" height="110%">
<feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="2" seed="7" result="n"/>
<feDisplacementMap in="SourceGraphic" in2="n" scale="4" xChannelSelector="R" yChannelSelector="G"/>
</filter>
${[['o', C.orange], ['b', C.blue], ['r', C.red], ['k', C.ink]].map(([k, c]) =>
    `<marker id="ah-${k}" viewBox="0 0 12 12" refX="9" refY="6" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M1,1 L10,6 L1,11" fill="none" stroke="${c}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></marker>`).join('')}
</defs>
<rect width="1920" height="1080" fill="#fff"/>
<g filter="url(#rough)">${svgBody}</g>
</svg></body></html>`;
}

module.exports = { C, text, path, arrow, xh, doll, staff, page };
