let score = 0;
let time = 30;
let timer = null;
let playing = false;

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const recordEl = document.getElementById("record");
const coin = document.getElementById("coin");
const startBtn = document.getElementById("startBtn");
const messageEl = document.getElementById("message");

let record = Number(localStorage.getItem("coinRecord")) || 0;
recordEl.textContent = record;

function startGame() {
  score = 0;
  time = 30;
  playing = true;

  scoreEl.textContent = score;
  timeEl.textContent = time;
  messageEl.textContent = "شروع شد! سریع روی سکه بزن.";
  startBtn.textContent = "شروع دوباره";

  clearInterval(timer);

  timer = setInterval(() => {
    time--;
    timeEl.textContent = time;

    if (time <= 0) {
      clearInterval(timer);
      playing = false;

      if (score > record) {
        record = score;
        localStorage.setItem("coinRecord", record);
        recordEl.textContent = record;
        messageEl.textContent = "آفرین! رکورد جدید زدی: " + score;
      } else {
        messageEl.textContent = "بازی تمام شد! امتیاز شما: " + score;
      }
    }
  }, 1000);
}

function addScore() {
  if (!playing) {
    messageEl.textContent = "اول دکمه شروع بازی را بزن.";
    return;
  }

  score++;
  scoreEl.textContent = score;
}

startBtn.addEventListener("click", startGame);
coin.addEventListener("click", addScore);
