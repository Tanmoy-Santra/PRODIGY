let seconds = 0;
let interval = null;
let running = false;

const watchContainer = document.getElementById('watch-container');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');

startButton.addEventListener('click', start);
pauseButton.addEventListener('click', pause);
resetButton.addEventListener('click', reset);

function start() {
    if (!running) {
        interval = setInterval(incrementTime, 1000);
        running = true;
    }
}

function pause() {
    if (running) {
        clearInterval(interval);
        running = false;
    }
}

function reset() {
    clearInterval(interval);
    running = false;
    seconds = 0;
    watchContainer.innerHTML = '00:00:00';
}

function incrementTime() {
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    hrs = (hrs < 10) ? "0" + hrs : hrs;
    mins = (mins < 10) ? "0" + mins : mins;
    secs = (secs < 10) ? "0" + secs : secs;

    watchContainer.innerHTML = `${hrs}:${mins}:${secs}`;
}
