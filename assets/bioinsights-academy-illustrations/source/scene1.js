// 01 — Copies, not links: source sandbox -> isolated student practice locations.
const { C, text, path, arrow, xh, doll, staff } = require('./lib');

function jar(cx, base, label, kids) {
  const l = cx - 140, r = cx + 140, top = base - 190;
  let g = path(`M${l},${base} L${l},${top + 20} C${l},${top - 70} ${r},${top - 70} ${r},${top + 20} L${r},${base}`);
  g += `<circle cx="${cx}" cy="${top - 48}" r="10" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`;
  g += path(`M${l - 20},${base} L${r + 20},${base} L${r + 14},${base + 20} L${l - 14},${base + 20} Z`, { fill: '#fff' });
  g += path(`M${r - 30},${top + 10} C${r - 20},${top + 30} ${r - 18},${top + 60} ${r - 20},${top + 90}`, { w: 2, color: C.grey });
  g += kids;
  g += text(cx, base + 62, label, { size: 40 });
  return g;
}

let s = '';

// Provider Training Sandbox — a source tank
s += path('M110,380 L110,700 L540,700 L540,380');
s += path('M95,380 L555,380 L548,360 L102,360 Z', { fill: '#fff' });
s += path('M150,420 L180,450 M160,470 L185,495', { w: 2, color: C.grey });
s += doll(230, 690, 1.25) + doll(325, 690, 1.25) + doll(420, 690, 1.25);
s += text(325, 330, 'Provider Training Sandbox', { size: 46, weight: 700 });
s += text(325, 750, 'source mock patients', { size: 36, color: C.blue });

// Provider staff — sees progress only
s += staff(640, 300, 0.85);
s += path('M652,215 L668,210 L672,224 L656,229 Z', { fill: C.ink });
s += path('M670,215 C850,150 1050,110 1235,112', { color: C.blue, w: 2.5, dash: '6 10' });
s += text(960, 205, 'staff see progress — not records', { size: 34, color: C.blue, rot: -5 });

// Copy machine with Xiaohei pulling the lever
s += path('M700,450 C700,432 712,425 730,425 L970,425 C988,425 1000,432 1000,450 L1000,690 C1000,705 990,710 975,710 L725,710 C710,710 700,705 700,690 Z', { fill: '#fff' });
s += path('M735,470 L965,470 L965,650 L735,650 Z');
s += path('M725,710 L722,730 M975,710 L978,730');
s += path('M745,425 L745,405 L805,405 L805,425', { fill: '#fff' });
s += path('M1000,500 L1024,500 L1024,560 L1000,560', { fill: '#fff' });
s += xh(810, 622, 0.95, { look: 3, arms: [[843, 540, 900, 548, -6]] });
s += path('M880,648 C880,622 925,622 925,648', { fill: '#fff' });
s += path('M902,630 L906,552');
s += `<circle cx="906" cy="548" r="9" fill="#fff" stroke="${C.red}" stroke-width="3"/>`;
s += text(850, 395, 'copy', { size: 44, color: C.red, weight: 700 });

// Flow: source in, copies out
s += arrow('M555,540 C600,520 640,520 690,540');
s += arrow('M1030,510 C1080,440 1100,390 1125,360');
s += arrow('M1030,550 C1080,640 1100,720 1125,760');
s += text(850, 770, 'independent copies, not a live view', { size: 36, color: C.blue });

// Student practice locations — sealed jars
s += jar(1280, 470, 'Student A – Training',
  xh(1205, 440, 0.62, { cap: true, look: 3 }) + doll(1305, 468, 0.95, { copy: true }) + doll(1375, 468, 0.95, { copy: true }));
s += path('M1280,272 L1280,98', { w: 2.5 });
s += path('M1280,98 L1420,98 L1420,132 L1280,132', { fill: '#fff' });
s += `<rect x="1292" y="108" width="80" height="14" fill="${C.orange}"/>`;
s += jar(1280, 895, 'Student B – Training',
  xh(1205, 865, 0.62, { cap: true, look: -2 }) + doll(1305, 893, 0.95, { copy: true }) + doll(1375, 893, 0.95, { copy: true }));

// Between students: no crossing
s += path('M1150,580 C1200,570 1240,592 1280,580 C1320,568 1360,590 1410,578', { color: C.red, w: 3, dash: '10 9' });
s += text(1280, 620, '✕ no crossing', { size: 34, color: C.red });

// Production clinical data — locked away
s += path('M1545,360 L1885,360 L1885,720 L1545,720 Z', { color: C.red, dash: '12 10' });
s += path('M1610,450 L1820,450 L1820,660 L1610,660 Z', { fill: '#fff' });
s += `<circle cx="1715" cy="555" r="55" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`;
s += path('M1715,510 L1715,600 M1670,555 L1760,555 M1683,523 L1747,587 M1747,523 L1683,587', { w: 2.5 });
s += path('M1625,665 L1622,685 M1805,665 L1808,685');
s += text(1715, 420, 'Production clinical data', { size: 36, weight: 700 });
s += text(1715, 770, 'never touched by training', { size: 34, color: C.red });

// No real-world side effects
s += path('M200,1010 L200,930');
s += path('M150,870 C150,850 165,842 185,842 L250,842 L250,930 L150,930 Z', { fill: '#fff' });
s += path('M250,860 L275,860 L275,880 L250,880', { color: C.red });
s += path('M165,875 L235,875 L235,910 L165,910 Z M165,875 L200,895 L235,875', { w: 2.5 });
s += path('M140,840 L260,940 M260,840 L140,940', { color: C.red, w: 4 });
s += text(300, 900, 'no real email, SMS or reminders', { size: 36, color: C.red, anchor: 'start' });

module.exports = s;
