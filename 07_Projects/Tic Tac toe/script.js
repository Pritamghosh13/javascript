

const particlesEl = document.getElementById('particles');
for (let i = 0; i < 30; i++) {
  const p = document.createElement('div');
  p.className = 'particle';
  const isX = Math.random() > 0.5;
  p.style.cssText = `
    left: ${Math.random() * 100}%;
    background: ${isX ? '#ff3c6e' : '#00d9c0'};
    width: ${Math.random() * 3 + 1}px;
    height: ${Math.random() * 3 + 1}px;
    --drift: ${(Math.random() - 0.5) * 100}px;
    animation-duration: ${Math.random() * 10 + 8}s;
    animation-delay: ${Math.random() * 10}s;
    opacity: 0;
  `;
  particlesEl.appendChild(p);
}

// ===================== CONFETTI =====================
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

let confettiPieces = [];
let confettiRunning = false;

function launchConfetti(color) {
  confettiPieces = [];
  for (let i = 0; i < 120; i++) {
    confettiPieces.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height - canvas.height,
      w: Math.random() * 10 + 5,
      h: Math.random() * 5 + 3,
      color: Math.random() > 0.5 ? color : '#ffffff',
      speed: Math.random() * 3 + 2,
      angle: Math.random() * 360,
      spin: (Math.random() - 0.5) * 5,
      drift: (Math.random() - 0.5) * 2,
      opacity: 1
    });
  }
  confettiRunning = true;
  requestAnimationFrame(drawConfetti);
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confettiPieces.forEach((p, i) => {
    p.y += p.speed;
    p.x += p.drift;
    p.angle += p.spin;
    if (p.y > canvas.height + 20) p.opacity -= 0.02;
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.opacity);
    ctx.translate(p.x, p.y);
    ctx.rotate(p.angle * Math.PI / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
    ctx.restore();
  });
  confettiPieces = confettiPieces.filter(p => p.opacity > 0);
  if (confettiPieces.length > 0) requestAnimationFrame(drawConfetti);
  else { confettiRunning = false; ctx.clearRect(0, 0, canvas.width, canvas.height); }
}

// ===================== GAME LOGIC =====================
let board = Array(9).fill(null);
let currentPlayer = 'X';
let gameOver = false;
let mode = 'pvp'; // pvp | ai
let scores = { X: 0, O: 0, D: 0 };

const WINNING_COMBOS = [
  [0,1,2],[3,4,5],[6,7,8],
  [0,3,6],[1,4,7],[2,5,8],
  [0,4,8],[2,4,6]
];

function setMode(m) {
  mode = m;
  document.querySelectorAll('.mode-btn').forEach((btn, i) => {
    btn.classList.toggle('active', (i === 0 && m === 'pvp') || (i === 1 && m === 'ai'));
  });
  const oLabel = document.getElementById('o-label');
  oLabel.textContent = m === 'ai' ? 'AI' : 'Player O';
  resetGame();
}

function buildBoard() {
  const boardEl = document.getElementById('board');
  boardEl.innerHTML = '';
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.className = 'cell';
    cell.dataset.index = i;
    cell.addEventListener('click', () => handleClick(i, cell));
    // Hover preview
    const preview = document.createElement('div');
    preview.className = 'hover-preview';
    if (currentPlayer === 'X') {
      const px = document.createElement('div');
      px.className = 'symbol-x';
      preview.appendChild(px);
    } else {
      const po = document.createElement('div');
      po.className = 'symbol-o';
      preview.appendChild(po);
    }
    cell.appendChild(preview);
    boardEl.appendChild(cell);
  }
}

function handleClick(index, cellEl) {
  if (gameOver || board[index]) return;
  if (mode === 'ai' && currentPlayer === 'O') return;
  makeMove(index, cellEl);
  if (!gameOver && mode === 'ai' && currentPlayer === 'O') {
    setTimeout(aiMove, 400);
  }
}

function makeMove(index, cellEl) {
  if (!cellEl) cellEl = document.querySelector(`[data-index="${index}"]`);
  board[index] = currentPlayer;
  cellEl.innerHTML = '';
  cellEl.classList.add('taken', currentPlayer === 'X' ? 'x-cell' : 'o-cell');

  // Create symbol
  const symbol = document.createElement('div');
  symbol.className = currentPlayer === 'X' ? 'symbol-x' : 'symbol-o';
  cellEl.appendChild(symbol);

  // Ripple
  const ripple = document.createElement('div');
  ripple.className = `ripple ${currentPlayer.toLowerCase()}`;
  ripple.style.cssText = `width: 100px; height: 100px; left: 50%; top: 50%; margin: -50px;`;
  cellEl.appendChild(ripple);
  setTimeout(() => ripple.remove(), 600);

  // Check win / draw
  const winner = checkWinner();
  if (winner) {
    endGame(winner.player, winner.combo);
    return;
  }
  if (board.every(c => c)) {
    endGame(null);
    return;
  }

  currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
  updateTurnIndicator();
  rebuildPreviews();
}

function rebuildPreviews() {
  document.querySelectorAll('.cell:not(.taken)').forEach(cell => {
    cell.innerHTML = '';
    const preview = document.createElement('div');
    preview.className = 'hover-preview';
    const sym = document.createElement('div');
    sym.className = currentPlayer === 'X' ? 'symbol-x' : 'symbol-o';
    preview.appendChild(sym);
    cell.appendChild(preview);
  });
}

function checkWinner() {
  for (const combo of WINNING_COMBOS) {
    const [a,b,c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], combo };
    }
  }
  return null;
}

function endGame(winner, combo) {
  gameOver = true;
  const statusEl = document.getElementById('status');
  statusEl.className = 'status announce';

  if (winner) {
    const isAI = mode === 'ai' && winner === 'O';
    statusEl.classList.add(`win-${winner.toLowerCase()}`);
    statusEl.textContent = isAI ? '🤖 AI wins!' : `Player ${winner} wins!`;
    scores[winner]++;
    updateScores(winner);
    highlightWin(combo, winner);
    launchConfetti(winner === 'X' ? '#ff3c6e' : '#00d9c0');
  } else {
    statusEl.classList.add('draw');
    statusEl.textContent = "It's a draw!";
    scores.D++;
    updateScores(null);
    document.getElementById('board').classList.add('shake');
    setTimeout(() => document.getElementById('board').classList.remove('shake'), 500);
  }

  document.getElementById('turn-indicator').style.opacity = '0.3';
}

function highlightWin(combo, player) {
  combo.forEach(i => {
    const cell = document.querySelector(`[data-index="${i}"]`);
    cell.classList.add('winning-cell');
  });
}

function updateTurnIndicator() {
  const ti = document.getElementById('turn-indicator');
  const isAI = mode === 'ai' && currentPlayer === 'O';
  ti.innerHTML = `
    <span class="turn-symbol ${currentPlayer.toLowerCase()}">${currentPlayer}</span>
    <span>${isAI ? 'AI thinking...' : 'Your turn'}</span>
  `;
  // Update score card active state
  document.getElementById('score-x').classList.toggle('active', currentPlayer === 'X');
  document.getElementById('score-o').classList.toggle('active', currentPlayer === 'O');
}

function updateScores(winner) {
  const xVal = document.getElementById('score-x-val');
  const oVal = document.getElementById('score-o-val');
  const dVal = document.getElementById('score-draw-val');
  xVal.textContent = scores.X;
  oVal.textContent = scores.O;
  dVal.textContent = scores.D;
  if (winner === 'X') xVal.classList.add('bump');
  else if (winner === 'O') oVal.classList.add('bump');
  else dVal.classList.add('bump');
  setTimeout(() => { xVal.classList.remove('bump'); oVal.classList.remove('bump'); dVal.classList.remove('bump'); }, 400);
}

function resetGame() {
  board = Array(9).fill(null);
  currentPlayer = 'X';
  gameOver = false;
  document.getElementById('status').textContent = '';
  document.getElementById('status').className = 'status';
  document.getElementById('turn-indicator').style.opacity = '1';
  document.getElementById('score-x').classList.add('active');
  document.getElementById('score-o').classList.remove('active');
  updateTurnIndicator();
  buildBoard();
}

function resetScores() {
  scores = { X: 0, O: 0, D: 0 };
  updateScores(null);
  resetGame();
}

// ===================== AI (Minimax) =====================
function aiMove() {
  if (gameOver) return;
  const best = minimax(board, 'O', 0);
  makeMove(best.index, null);
}

function minimax(b, player, depth) {
  const win = checkWinnerOn(b);
  if (win === 'X') return { score: -10 + depth };
  if (win === 'O') return { score: 10 - depth };
  if (b.every(c => c)) return { score: 0 };

  const moves = [];
  b.forEach((cell, i) => {
    if (!cell) {
      const newB = [...b];
      newB[i] = player;
      const result = minimax(newB, player === 'O' ? 'X' : 'O', depth + 1);
      moves.push({ index: i, score: result.score });
    }
  });

  if (player === 'O') {
    const best = moves.reduce((a, b) => b.score > a.score ? b : a);
    return best;
  } else {
    const best = moves.reduce((a, b) => b.score < a.score ? b : a);
    return best;
  }
}

function checkWinnerOn(b) {
  for (const [a,bb,c] of WINNING_COMBOS) {
    if (b[a] && b[a] === b[bb] && b[a] === b[c]) return b[a];
  }
  return null;
}

// Init
buildBoard();
