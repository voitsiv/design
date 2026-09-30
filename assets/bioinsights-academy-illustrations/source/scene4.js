// 04 — One student, a real location and a training sandbox; what happens in the sandbox stays there.
const { C, text, path, arrow, xh, doll } = require('./lib');

const tray = (l, r, top, bot, o = {}) =>
  path(`M${l},${top} L${r},${top} L${r - 25},${bot} L${l + 25},${bot} Z`, { fill: '#fff', ...o });

let s = '';

// Real location
s += path('M130,430 L355,305 L580,430', { w: 3.5 });
s += path('M150,420 L150,860 L560,860 L560,420');
s += path('M320,860 L320,760 L390,760 L390,860');
s += `<circle cx="355" cy="375" r="26" fill="#fff" stroke="${C.ink}" stroke-width="3"/>`;
s += path('M355,360 L355,390 M340,375 L370,375', { w: 4 });
s += path('M200,500 L290,500 L290,610 L200,610 Z M215,530 L275,530 M215,555 L275,555 M215,580 L255,580', { w: 2.5 });
s += doll(470, 855, 1.3);
s += text(355, 920, 'Real location', { size: 44, weight: 700 });
s += text(355, 962, 'production data', { size: 34, color: C.blue });

// The wall between them
s += path('M640,390 L640,880 M690,390 L690,880 M640,390 L690,390');
for (let y = 430; y < 880; y += 45) s += path(`M640,${y} L690,${y} M665,${y} L665,${y + 45}`, { w: 2, color: C.grey });
s += text(665, 360, 'kept separate', { size: 36, color: C.red });

// Switching is the student, not the data
s += arrow('M420,290 C520,170 800,170 900,610');
s += text(640, 180, 'the student switches', { size: 36, color: C.orange });

// Training sandbox — Xiaohei sculpts a sand patient
s += tray(760, 1340, 740, 890);
s += path('M790,780 C840,765 880,790 930,775 C990,760 1050,790 1110,772 C1170,758 1240,788 1310,770', { w: 2, color: C.grey });
s += xh(900, 860, 1, { cap: true, look: 5, arms: [[935, 790, 1000, 800, -6], [938, 810, 1010, 830, 4]] });
s += doll(1040, 862, 1.25, { dash: '3 6' });
s += path('M1175,860 L1190,800 L1250,800 L1265,860 Z M1195,800 C1200,770 1240,770 1245,800', { w: 2.5, fill: '#fff' });
s += path('M1285,860 L1300,760 M1290,760 L1310,760', { w: 2.5 });
s += text(1050, 945, 'Training sandbox', { size: 44, weight: 700 });
s += text(1050, 990, 'what happens here stays here', { size: 34, color: C.red });

// Real-world actions unplugged
s += path('M1300,700 L1300,640 L1350,640 L1350,700 Z M1310,652 L1340,652 M1310,690 L1340,690', { w: 2.5, fill: '#fff' });
s += path('M1350,670 C1400,690 1410,610 1455,600', { w: 2.5 });
s += path('M1455,590 L1480,590 L1480,610 L1455,610 Z M1480,594 L1492,594 M1480,606 L1492,606', { w: 2.5, fill: '#fff' });
s += path('M1530,560 L1580,560 L1580,640 L1530,640 Z', { w: 3, fill: '#fff' });
s += path('M1545,590 L1545,600 M1565,590 L1565,600', { w: 3 });
s += path('M1500,575 L1518,580 M1500,620 L1518,615', { color: C.red, w: 3 });
s += text(1555, 480, 'real email, SMS,', { size: 34, color: C.red });
s += text(1555, 518, 'external systems: off', { size: 34, color: C.red });

// Future: more sandboxes
s += tray(1570, 1830, 700, 760, { color: C.grey, dash: '9 9' });
s += tray(1540, 1860, 800, 880, { color: C.grey, dash: '9 9' });
s += text(1700, 945, 'future: more sandboxes', { size: 34, color: C.blue });

module.exports = s;
