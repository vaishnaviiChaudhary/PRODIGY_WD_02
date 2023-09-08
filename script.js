const display = document.getElementById('display');
const startButton = document.getElementById('start');
const pauseButton = document.getElementById('pause');
const resetButton = document.getElementById('reset');
const lapButton = document.getElementById('lap');
const lapList = document.getElementById('lapList');

let startTime;
let interval;
let laps = [];

function updateTime() {
  const currentTime = Date.now() - startTime;
  const formattedTime = new Date(currentTime).toISOString().substr(14, 9);
  display.textContent = formattedTime;
}

startButton.addEventListener('click', () => {
  if (!startTime) {
    startTime = Date.now();
    interval = setInterval(updateTime, 10);
  }
});

pauseButton.addEventListener('click', () => {
  clearInterval(interval);
  startTime = null;
});

resetButton.addEventListener('click', () => {
  clearInterval(interval);
  startTime = null;
  display.textContent = '00:00.00';
  lapList.innerHTML = '';
  laps = [];
});

lapButton.addEventListener('click', () => {
  if (startTime) {
    const currentTime = Date.now() - startTime;
    const formattedTime = new Date(currentTime).toISOString().substr(14, 9);
    laps.push(formattedTime);

    const lapItem = document.createElement('li');
    lapItem.className = 'lap-item';
    lapItem.textContent = `Lap ${laps.length}: ${formattedTime}`;
    lapList.appendChild(lapItem);
  }
});
