// 06 — Open question: where should student <-> provider communication live so it survives switching?
const { C, text, path, arrow, xh, doll, staff } = require('./lib');

function mailbox(x, y, label, color = C.ink, dash = '') {
  let g = path(`M${x},${y} L${x},${y - 70}`, { color, dash });
  g += path(`M${x - 48},${y - 70} L${x - 48},${y - 125} C${x - 48},${y - 160} ${x + 48},${y - 160} ${x + 48},${y - 125} L${x + 48},${y - 70} Z`, { fill: '#fff', color, dash });
  g += path(`M${x - 22},${y - 120} L${x + 22},${y - 120}`, { color, w: 2.5 });
  g += text(x, y - 175, label, { size: 36, color });
  return g;
}
const plane = (x, y, color = C.ink) =>
  path(`M${x},${y} L${x + 60},${y - 22} L${x + 18},${y + 10} Z M${x + 18},${y + 10} L${x + 22},${y + 28} L${x + 30},${y + 5}`, { color, fill: '#fff', w: 2.5 });

let s = '';

// Locations on the ground
s += path('M110,640 L110,880 L560,880 L560,640');
s += doll(460, 875, 1.2);
s += path('M160,700 L240,700 L240,790 L160,790 Z M175,725 L225,725 M175,750 L225,750', { w: 2.5 });
s += text(335, 935, 'Real location', { size: 40, weight: 700 });

s += path('M600,620 L600,900 M640,620 L640,900', { color: C.red, w: 3, dash: '10 9' });
s += text(620, 960, 'data stays separate', { size: 32, color: C.red });

s += path('M680,760 L1180,760 L1155,880 L705,880 Z', { fill: '#fff' });
s += path('M710,795 C760,780 800,805 850,790 C910,775 960,805 1020,790 C1080,776 1120,800 1150,790', { w: 2, color: C.grey });
s += doll(1080, 875, 1.1, { copy: true });
s += text(930, 935, 'Training sandbox', { size: 40, weight: 700 });

s += path('M1230,790 L1560,790 L1540,880 L1250,880 Z', { color: C.grey, dash: '9 9' });
s += text(1395, 935, 'future sandboxes', { size: 34, color: C.blue });

// The bridge above every location
s += path('M110,420 L1600,420 L1600,445 L110,445 Z', { fill: '#fff' });
s += path('M335,445 L335,640 M930,445 L930,760', { w: 2.5 });
s += path('M1395,445 L1395,790', { w: 2.5, color: C.grey, dash: '8 8' });
s += text(130, 395, 'reachable from every location', { size: 34, color: C.blue, anchor: 'start' });

// Candidate homes for the conversation
s += mailbox(560, 420, 'Tasks?');
s += mailbox(855, 420, 'Messages?');
s += mailbox(1150, 420, 'something else?', C.grey, '8 8');

// Xiaohei (the student) holds up a question, deciding where it goes
s += xh(880, 870, 1, { cap: true, look: -3, arms: [[850, 790, 820, 700, -10], [912, 800, 940, 830, 6]] });
s += plane(770, 690);
s += path('M800,665 C760,600 700,520 640,410', { color: C.orange, w: 3, dash: '6 10' });
s += path('M820,660 C840,600 850,520 855,410', { color: C.orange, w: 3, dash: '6 10' });
s += path('M840,665 C930,590 1060,520 1130,410', { color: C.orange, w: 3, dash: '6 10' });
s += text(1210, 640, 'which one fits?', { size: 40, color: C.red, weight: 700 });

// Provider on the far side — two-way
s += staff(1780, 880, 1.1);
s += arrow('M1735,720 C1700,560 1660,470 1610,440', C.orange);
s += arrow('M1615,470 C1650,560 1690,640 1720,700', C.orange);
s += text(1780, 580, 'Academy', { size: 36, weight: 700 });
s += text(1780, 616, 'Provider', { size: 36, weight: 700 });
s += plane(1640, 360, C.blue);

// What any option must do
s += text(1330, 70, '✓ two-way: ask for help / reach out', { size: 34, color: C.blue, anchor: 'start' });
s += text(1330, 115, '✓ stays visible after switching', { size: 34, color: C.blue, anchor: 'start' });
s += text(1330, 160, '✓ keeps training ≠ production', { size: 34, color: C.blue, anchor: 'start' });
s += text(1330, 205, '✓ reuses what BioInsights has', { size: 34, color: C.blue, anchor: 'start' });

module.exports = s;
