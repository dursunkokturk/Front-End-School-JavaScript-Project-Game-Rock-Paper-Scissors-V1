// Skorlari localStorage'dan Aliyoruz
let userScore = parseInt(localStorage.getItem('userScore')) || 0;
let computerScore = parseInt(localStorage.getItem('computerScore')) || 0;
let drawScore = parseInt(localStorage.getItem('drawScore')) || 0;

const userScoreEl = document.getElementById('userScoreEl');
const computerScoreEl = document.getElementById('computerScoreEl');
const drawScoreEl = document.getElementById('drawScoreEl');
const resultArea = document.getElementById('resultArea');

// Sayfa yüklenince skorları göster
updateScoreDisplay();

function updateScoreDisplay() {
  userScoreEl.textContent = userScore;
  computerScoreEl.textContent = computerScore;
  drawScoreEl.textContent = drawScore;
}

function saveScores() {
  localStorage.setItem('userScore', userScore);
  localStorage.setItem('computerScore', computerScore);
  localStorage.setItem('drawScore', drawScore);
}

function getComputerChoice() {
  const choices = ['taş', 'kağıt', 'makas'];
  return choices[Math.floor(Math.random() * 3)];
}

const choiceEmoji = { 'taş': '🪨', 'kağıt': '📄', 'makas': '✂️' };
const choiceName = { 'taş': 'Taş', 'kağıt': 'Kağıt', 'makas': 'Makas' };

// Kazananı belirle: 'win', 'lose', 'draw'
function getResult(user, computer) {
  if (user === computer) return 'draw';
  if (
    (user === 'taş' && computer === 'makas') ||
    (user === 'kağıt' && computer === 'taş') ||
    (user === 'makas' && computer === 'kağıt')
  ) return 'win';
  return 'lose';
}

const winMessages = {
  taş: 'Taş, makası kırdı! 💥',
  kağıt: 'Kağıt, taşı sardı! 🎁',
  makas: 'Makas, kağıdı kesti! ✂️'
};

const loseMessages = {
  taş: 'Bilgisayarın kağıdı taşını sardı.',
  kağıt: 'Bilgisayarın makası kağıdını kesti.',
  makas: 'Bilgisayarın taşı makasını kırdı.'
};

function play(userChoice) {
  const computerChoice = getComputerChoice();
  const result = getResult(userChoice, computerChoice);

  let statusClass, statusText, detailText;

  if (result === 'draw') {
    drawScore++;
    statusClass = 'draw';
    statusText = 'Berabere';
    detailText = `İkiniz de ${choiceName[userChoice]} seçtiniz.`;
  } else if (result === 'win') {
    userScore++;
    statusClass = 'win';
    statusText = 'Kazandın!';
    detailText = winMessages[userChoice];
  } else {
    computerScore++;
    statusClass = 'lose';
    statusText = 'Kaybettin!';
    detailText = loseMessages[userChoice] || `Bilgisayar: ${choiceName[computerChoice]}`;
  }

  detailText += `  |  Sen: ${choiceEmoji[userChoice]}  Bilgisayar: ${choiceEmoji[computerChoice]}`;

  resultArea.innerHTML = `
        <div class="result-status ${statusClass}">${statusText}</div>
        <div class="result-detail">${detailText}</div>
      `;

  // Pop animasyonu
  resultArea.classList.remove('pop');
  void resultArea.offsetWidth;
  resultArea.classList.add('pop');

  updateScoreDisplay();
  saveScores();
}

document.getElementById('rockButton').addEventListener('click', () => play('taş'));
document.getElementById('paperButton').addEventListener('click', () => play('kağıt'));
document.getElementById('scissorButton').addEventListener('click', () => play('makas'));

document.getElementById('gameEndButton').addEventListener('click', () => {
  userScore = 0;
  computerScore = 0;
  drawScore = 0;
  saveScores();
  updateScoreDisplay();
  resultArea.innerHTML = `<div class="result-status draw">— Skorlar sıfırlandı —</div>`;
});