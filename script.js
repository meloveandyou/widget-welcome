const currentTimeEl = document.getElementById('current-time');
const alarmTimeInput = document.getElementById('alarm-time');
const setAlarmBtn = document.getElementById('set-alarm-btn');
const clearAlarmBtn = document.getElementById('clear-alarm-btn');
const alarmAudio = document.getElementById('alarm-audio');
const themeToggle = document.getElementById('theme-toggle');

let alarmTime = null;

function updateTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2,'0');
  const m = String(now.getMinutes()).padStart(2,'0');
  const s = String(now.getSeconds()).padStart(2,'0');
  currentTimeEl.textContent = `${h}:${m}:${s}`;

  // Check alarm
  if (alarmTime === `${h}:${m}` && s === '00') {
    ringAlarm();
  }

  requestAnimationFrame(updateTime);
}

function ringAlarm() {
  alarmAudio.play();
}

function setAlarm() {
  alarmTime = alarmTimeInput.value;
  if (alarmTime) {
    alert(`Alarm set for ${alarmTime}`);
  }
}

function clearAlarm() {
  alarmTime = null;
  alarmAudio.pause();
  alarmAudio.currentTime = 0;
  alert('Alarm cleared');
}

setAlarmBtn.addEventListener('click', setAlarm);
clearAlarmBtn.addEventListener('click', clearAlarm);

themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('dark', themeToggle.checked);
});

updateTime();
