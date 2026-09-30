// 03 — Proposed: the conversation follows the student–provider relationship, not the location.
const { C, text, path, arrow, xh, doll, staff } = require('./lib');

function bubble(cx, cy, rx, ry, color, label, tail) {
  let g = `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#fff" stroke="${color}" stroke-width="3"/>`;
  g += path(tail, { color, fill: '#fff' });
  g += text(cx, cy + 11, label, { size: 32, color });
  return g;
}

let s = '';

// The thread — floating above every location
s += bubble(1260, 110, 92, 44, C.ink, 'thanks!', 'M1300,150 L1310,176 L1280,153');
s += bubble(1150, 215, 118, 50, C.ink, 'where is J. Doe?', 'M1042,236 L1004,262 L1050,252');
s += bubble(1400, 250, 110, 48, C.blue, 'check Course 2', 'M1360,296 L1350,320 L1385,297');
s += path('M960,62 L1085,62 L1098,82 L1085,102 L960,102 Z', { fill: '#fff', w: 2.5 });
s += text(1022, 92, 'Course 2 · L3', { size: 28 });
s += path('M1098,82 C1110,120 1060,180 1040,195', { w: 2 });

// Room 1 — the isolated practice location (student has left)
s += path('M790,520 L1230,520 L1230,890 L790,890 Z', { color: C.red, w: 3, dash: '12 10' });
s += path('M820,560 L820,860 L1200,860 L1200,560');
s += xh(960, 850, 0.9, { ghost: true, cap: true });
s += doll(1110, 855, 1.1);
s += text(1010, 945, 'Student Practice Location', { size: 38, weight: 700 });
s += path('M990,740 C990,560 995,400 1004,264', { w: 2, color: C.grey, dash: '6 8' });

// Switch between authorized contexts
s += arrow('M1130,548 C1230,450 1380,450 1470,540');
s += text(1300, 430, 'switch', { size: 38, color: C.orange });

// Room 2 — another authorized location, same thread still in hand
s += path('M1420,560 L1420,860 L1820,860 L1820,560');
s += path('M1700,640 L1790,640 L1790,720 L1700,720 Z M1700,662 L1790,662', { w: 2.5 });
s += xh(1570, 850, 0.9, { cap: true, look: 4, arms: [[1602, 755, 1628, 680, -8]] });
s += path('M1628,680 C1600,560 1480,420 1420,300', { w: 2.5 });
s += text(1620, 945, 'Other authorized location', { size: 38, weight: 700 });
s += text(1650, 380, 'same thread,', { size: 34, color: C.blue });
s += text(1650, 418, 'wherever they switch', { size: 34, color: C.blue });

// Provider staff reply from outside — never step in
s += staff(330, 860, 1.1);
s += arrow('M370,720 C470,440 900,330 1285,262', C.orange);
s += text(420, 470, 'staff reply from outside', { size: 36, color: C.blue, anchor: 'start', rot: -14 });
s += path('M395,800 C520,790 640,795 775,800', { color: C.red, w: 3, dash: '10 9' });
s += path('M570,778 L596,808 M596,778 L570,808', { color: C.red, w: 3.5 });
s += text(585, 855, 'no access to practice records', { size: 32, color: C.red });

// Proposed stamp + real-world guardrail
s += `<g transform="rotate(8 1755 90)">` + path('M1665,60 L1845,60 L1845,122 L1665,122 Z', { color: C.red, w: 3 }) + text(1755, 104, 'PROPOSED', { size: 40, color: C.red, weight: 700 }) + '</g>';
s += text(120, 1010, 'real support ≠ simulated clinical activity — no automatic outside notifications', { size: 34, color: C.red, anchor: 'start' });

module.exports = s;
