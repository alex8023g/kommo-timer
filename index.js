const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
let isTimerRun = false;
let timer;
const createTimerAnimator = () => {
  return (seconds) => {
    // isTimerRun = true;
    if (timer) clearInterval(timer);
    timer = setInterval(() => {
      seconds--;
      if (!seconds) clearInterval(timer);
      let hh = Math.floor(seconds / 3600);
      let mm = Math.floor((seconds - hh * 3600) / 60);
      let ss = seconds - hh * 3600 - mm * 60;
      timerEl.textContent = `${hh < 10 ? '0' + String(hh) : hh}:${
        mm < 10 ? '0' + String(mm) : mm
      }:${ss < 10 ? '0' + String(ss) : ss}`;
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();
console.log('max timer     99:59:59 seconds=', 3600 * 99 + 60 * 59 + 59);
inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  if (!inputEl.value.at(-1).match(/\d+/g) || Number(inputEl.value) > 359999) {
    inputEl.value = inputEl.value.substring(0, inputEl.value.length - 1);
  }
});

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  animateTimer(seconds);

  inputEl.value = '';
});
