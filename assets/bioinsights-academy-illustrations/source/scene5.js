// 05 — Provider sandbox -> course -> stamped copies in the student's sandbox.
const { C, text, path, arrow, xh, doll, staff } = require('./lib');

const tray = (l, r, top, bot, o = {}) =>
  path(`M${l},${top} L${r},${top} L${r - 25},${bot} L${l + 25},${bot} Z`, { fill: '#fff', ...o });

let s = '';

// Provider's training sandbox with source mock patients
s += tray(110, 620, 760, 880);
s += doll(210, 752, 1.3) + doll(340, 752, 1.3) + doll(470, 752, 1.3);
s += staff(560, 740, 0.85);
s += text(365, 940, 'Provider training sandbox', { size: 42, weight: 700 });
s += text(365, 985, 'source records stay unchanged', { size: 34, color: C.red });

// Course, linked to two of the patients
s += path('M170,230 L400,230 L410,370 L180,380 Z', { fill: '#fff' });
s += path('M290,232 L292,376', { w: 2 });
s += path('M200,270 L270,268 M200,300 L265,298 M318,270 L385,268 M318,300 L380,298', { w: 2, color: C.grey });
s += text(290, 210, 'Course', { size: 42, weight: 700 });
s += path('M230,378 C220,520 200,600 210,660', { w: 2.5, color: C.blue, dash: '5 7' });
s += path('M360,378 C370,500 345,600 340,660', { w: 2.5, color: C.blue, dash: '5 7' });
s += text(378, 520, 'linked', { size: 34, color: C.blue, anchor: 'start' });

// Assignment -> Xiaohei rides the stamp
s += arrow('M630,360 C720,300 800,300 880,340');
s += text(760, 280, 'course assigned', { size: 36, color: C.orange });
s += path('M900,560 L1120,560 L1120,630 L900,630 Z', { fill: '#fff' });
s += path('M915,630 L1105,630 L1105,655 L915,655 Z', { fill: '#fff', w: 2.5 });
s += doll(1010, 625, 0.8, { color: C.orange });
s += path('M990,560 L995,520 L1025,520 L1030,560', { fill: '#fff' });
s += xh(1010, 492, 0.95, { look: 4, arms: [[980, 450, 995, 505, -10], [1040, 450, 1025, 505, 10]] });
s += path('M1010,700 L1010,740 M985,715 L1010,745 L1035,715', { color: C.orange, w: 3.5 });

// Student's sandbox with stamped copies
s += tray(760, 1600, 780, 900);
s += doll(900, 875, 1.25, { copy: true }) + doll(1030, 875, 1.25, { copy: true });
s += path('M1080,820 L1130,760 L1142,770 L1092,830 Z M1080,820 L1076,836 L1092,830', { w: 2.5 });
s += path('M1060,850 C1070,845 1076,856 1086,850', { color: C.ink, w: 2 });
s += xh(1300, 875, 0.7, { cap: true, look: -4 });
s += text(1180, 955, 'Student training sandbox', { size: 42, weight: 700 });
s += text(1180, 1000, 'copies of patients + training data', { size: 34, color: C.blue });
s += text(1480, 690, 'practise freely', { size: 36, color: C.orange });
s += arrow('M1420,700 C1330,720 1200,760 1140,775', C.orange);

module.exports = s;
