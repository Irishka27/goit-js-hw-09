function getRandomHexColor() {
   
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }
  let timerId = null;
const start = document.querySelector('[data-start]');
const stop = document.querySelector('[data-stop]');
const body = document.querySelector('body');
start.addEventListener('click', onStartClick);
function onStartClick(){
    timerId = setInterval(() => {body.style.backgroundColor = getRandomHexColor();} , 1000);
    start.disabled = true;
};
stop.addEventListener('click', onStopClick);
function onStopClick(){
        clearInterval(timerId);
        start.disabled = false;
}
