// 02 — Many courses, one Student Practice Location: reuse, add, never overwrite.
const { C, text, path, arrow, xh, doll } = require('./lib');

function card(x, y, label, rot) {
  let g = `<g transform="rotate(${rot} ${x + 105} ${y + 65})">`;
  g += path(`M${x},${y} L${x + 210},${y} L${x + 210},${y + 130} L${x},${y + 130} Z`, { fill: '#fff' });
  g += text(x + 105, y + 50, label, { size: 40, weight: 700 });
  g += `<circle cx="${x + 70}" cy="${y + 92}" r="12" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`;
  g += `<circle cx="${x + 105}" cy="${y + 92}" r="12" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`;
  g += `<circle cx="${x + 140}" cy="${y + 92}" r="12" fill="#fff" stroke="${C.ink}" stroke-width="2.5"/>`;
  return g + '</g>';
}

let s = '';

// Courses arriving
s += card(110, 250, 'Course 1', -6) + card(150, 470, 'Course 2', 3) + card(110, 690, 'Course 3', -3);
s += arrow('M335,320 C450,360 520,560 585,690');
s += arrow('M375,540 C450,560 520,650 585,730');
s += arrow('M335,760 C430,770 520,770 585,780');

// The one practice location
s += path('M570,300 L1000,140 L1430,300', { w: 3.5 });
s += path('M600,300 L600,650 M600,900 L600,905 L1400,905 L1400,300');
s += path('M600,650 L560,670 L560,885 L600,900', { w: 2.5 });
s += path('M790,212 L1210,212 L1210,272 L790,272 Z', { fill: '#fff' });
s += text(1000, 255, '[Provider Name] – Training', { size: 40, weight: 700 });

// Shelf of copied mock patients
s += path('M680,520 L1320,520 L1320,536 L680,536 Z', { fill: '#fff' });
s += path('M720,536 L740,560 M1280,536 L1260,560', { w: 2.5 });
s += doll(740, 518, 1, { copy: true }) + doll(820, 518, 1, { copy: true }) + doll(900, 518, 1, { copy: true });

// Xiaohei on a ladder, adding what's missing
s += path('M1110,905 L1150,560 M1190,905 L1225,560 M1100,820 L1180,820 M1112,740 L1190,740 M1122,660 L1200,660 M1133,590 L1212,590', { w: 2.5 });
s += xh(1160, 712, 0.9, { look: -4, arms: [[1130, 640, 1030, 505, 10], [1190, 650, 1210, 620, 0]] });
s += doll(1010, 518, 1, { copy: true });
s += text(1010, 420, 'add only what’s missing', { size: 36, color: C.orange });
s += arrow('M1010,432 L1010,448', C.orange);

// Duplicate avoided
s += doll(660, 890, 1.05, { dash: '7 7', color: C.grey });
s += path('M628,808 L692,880 M692,808 L628,880', { color: C.red, w: 3.5 });
s += arrow('M690,810 C730,720 745,640 742,575', C.blue);
s += text(760, 690, 'same patient? reuse the copy', { size: 34, color: C.blue, anchor: 'start', rot: -4 });

// Student's own work stays put
s += path('M780,820 L1000,820 M800,820 L800,900 M980,820 L980,900', { w: 3 });
s += path('M820,818 L835,788 L915,792 L902,820', { fill: '#fff', w: 2.5 });
s += path('M842,800 L895,802 M846,810 L880,811', { w: 2, color: C.grey });
s += path('M930,815 L975,780', { w: 4 });
s += text(890, 965, 'existing work is never overwritten', { size: 36, color: C.red });

// Source sandbox changes later — no sync
s += path('M1560,400 L1560,620 L1820,620 L1820,400');
s += path('M1548,400 L1832,400 L1826,384 L1554,384 Z', { fill: '#fff' });
s += doll(1690, 612, 1.2);
s += path('M1730,500 L1770,450 L1782,460 L1742,510 Z M1730,500 L1726,516 L1742,510', { w: 2.5 });
s += text(1690, 355, 'Provider Training Sandbox', { size: 36, weight: 700 });
s += path('M1545,520 C1500,515 1460,520 1418,515', { color: C.red, w: 3, dash: '10 9' });
s += path('M1470,500 L1494,528 M1494,500 L1470,528', { color: C.red, w: 3.5 });
s += text(1690, 690, 'later source edits', { size: 34, color: C.red });
s += text(1690, 728, 'don’t update student copies', { size: 34, color: C.red });

s += text(1690, 1000, 'Phase I: one provider · many courses · one practice location', { size: 34, color: C.blue, anchor: 'end', rot: 0 }).replace('x="1690"', 'x="1840"').replace('1690 1000', '1840 1000');

module.exports = s;
