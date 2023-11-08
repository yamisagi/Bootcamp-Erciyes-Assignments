// Selectors

const horse1 = document.querySelector('#horse1');
const horse2 = document.querySelector('#horse2');
const horse3 = document.querySelector('#horse3');
// Finish Line Class
const finishLine = document.querySelector('.finish-line');

// Buttons

const startBtn = document.querySelector('#start-btn');

// Event Listeners

startBtn.addEventListener('click', startRace);

function startRace() {
    let winner = false;
    const horse1Interval = setInterval(() => {
        const randomPositionIncrement = Math.floor(Math.random() * 10) + 50;
        const horse1Position = parseInt(getComputedStyle(horse1).left);
        console.log(horse1Position);
        horse1.style.left = `${horse1Position + randomPositionIncrement}px`;
        if (horse1Position >= 800) {
            clearInterval(horse1Interval);
            if (!winner) {
                winner = true;
                displayWinner('Horse 1');
            }
        }
    }, 100);

    const horse2Interval = setInterval(() => {
        const randomPositionIncrement = Math.floor(Math.random() * 10) + 50;
        const horse2Position = parseInt(getComputedStyle(horse2).left);
        horse2.style.left = `${horse2Position + randomPositionIncrement}px`;
        if (horse2Position >= 800) {
            clearInterval(horse2Interval);
            if (!winner) {
                winner = true;
                displayWinner('Horse 2');
            }
        }
    }, 100);

    const horse3Interval = setInterval(() => {
        const randomPositionIncrement = Math.floor(Math.random() * 10) + 50;
        const horse3Position = parseInt(getComputedStyle(horse3).left);
        horse3.style.left = `${horse3Position + randomPositionIncrement}px`;
        if (horse3Position >= 800) {
            clearInterval(horse3Interval);
            if (!winner) {
                winner = true;
                displayWinner('Horse 3');
            }
        }
    }, 100);
}

function displayWinner(horse) {
    startBtn.innerHTML = `${horse} Won!`;
    startBtn.style.backgroundColor = 'red';
    startBtn.style.color = 'white';
    startBtn.disabled = true;

    window.setTimeout(() => {
        location.reload();
    }, 3000);

}
