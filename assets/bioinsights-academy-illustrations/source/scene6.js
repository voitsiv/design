// 06 — Open question: where should student <-> provider communication live so it shows in every location?
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

// The same conversation, hung from the bridge into a location
function convo(cx, top, o = {}) {
  const { faded = false } = o;
  const ink = faded ? C.grey : C.ink, blue = faded ? C.grey : C.blue, dash = faded ? '8 8' : '';
  let g = path(`M${cx},445 L${cx},${top}`, { w: 2.5, color: ink, dash });
  g += path(`M${cx - 85},${top} L${cx + 85},${top} L${cx + 85},${top + 100} L${cx - 85},${top + 100} Z`, { fill: '#fff', color: ink, dash });
  g += `<ellipse cx="${cx - 25}" cy="${top + 28}" rx="48" ry="17" fill="#fff" stroke="${ink}" stroke-width="2.5"/>`;
  g += text(cx - 25, top + 37, 'help?', { size: 26, color: ink });
  g += `<ellipse cx="${cx + 20}" cy="${top + 70}" rx="56" ry="17" fill="#fff" stroke="${blue}" stroke-width="2.5"/>`;
  g += text(cx + 20, top + 79, 'here’s how', { size: 26, color: blue });
  return g;
}

function wall(x) {
  return path(`M${x - 15},600 L${x - 15},900 M${x + 15},600 L${x + 15},900`, { color: C.red, w: 3, dash: '10 9' }) +
    text(x, 1000, 'data stays separate', { size: 30, color: C.red });
}

let s = '';

// The bridge above every location
s += path('M90,420 L1600,420 L1600,445 L90,445 Z', { fill: '#fff' });
s += text(100, 350, 'One conversation, accessible', { size: 34, color: C.blue, anchor: 'start' });
s += text(100, 392, 'regardless of the selected location', { size: 34, color: C.blue, anchor: 'start' });

// Candidate homes for the conversation
s += text(935, 150, 'which one fits?', { size: 42, color: C.red, weight: 700 });
s += mailbox(660, 420, 'Tasks?');
s += mailbox(935, 420, 'Messages?');
s += mailbox(1180, 420, 'something else?', C.grey, '8 8');

// Real location — the student is here right now
s += path('M90,600 L90,880 L520,880 L520,600');
s += convo(215, 620);
s += doll(465, 875, 1.1);
s += text(305, 945, 'Real location', { size: 40, weight: 700 });

s += wall(570);

// Training sandbox — same conversation waiting
s += path('M620,770 L1080,770 L1058,880 L642,880 Z', { fill: '#fff' });
s += path('M650,805 C700,790 740,815 790,800 C850,785 900,815 960,800 C1010,788 1040,805 1050,800', { w: 2, color: C.grey });
s += convo(850, 640);
s += doll(990, 872, 1, { copy: true });
s += text(850, 945, 'Training sandbox', { size: 40, weight: 700 });

s += wall(1130);

// Future sandboxes — same conversation there too
s += path('M1180,790 L1540,790 L1520,880 L1200,880 Z', { color: C.grey, dash: '9 9' });
s += convo(1360, 660, { faded: true });
s += text(1360, 945, 'future training sandboxes', { size: 36, color: C.blue });

// The student moves; the conversation doesn't
s += arrow('M430,760 C480,700 640,700 690,770');
s += arrow('M1045,830 C1085,730 1185,730 1225,825');
s += text(570, 580, 'switch', { size: 34, color: C.orange });
s += text(1130, 580, 'switch', { size: 34, color: C.orange });

// Provider on the far side — two-way, never enters a location
s += staff(1780, 880, 1.1);
s += arrow('M1735,720 C1700,560 1660,470 1610,440', C.orange);
s += arrow('M1615,470 C1650,560 1690,640 1720,700', C.orange);
s += text(1780, 580, 'Academy', { size: 36, weight: 700 });
s += text(1780, 616, 'Provider', { size: 36, weight: 700 });
s += plane(1640, 360, C.blue);


// The requirement to investigate
s += path('M1370,40 L1880,40 L1880,250 L1370,250 Z', { fill: '#fff', w: 3 });
s += text(1625, 92, 'Production actions are disabled', { size: 38 });
s += text(1625, 132, 'in training sandboxes;', { size: 38 });
s += text(1625, 185, 'Academy communication', { size: 40, color: C.red, weight: 700 });
s += text(1625, 225, 'must remain available.', { size: 40, color: C.red, weight: 700 });

module.exports = s;
