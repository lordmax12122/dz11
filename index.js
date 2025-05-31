let a = 3600
const timer = document.querySelector(".timer")
const timerId = setInterval(() => {
    12
    a -= 1
    timer.innerHTML = a
    if (a === 1800) {
        alert("Половина часу вийшла")
    }
}, 1000)

let seconds = 30
let milliseconds = 0
let countdown;

const newTimer = document.querySelector(".new-timer")
const animation = document.querySelector(".animation")
function start() {
    let seconds = 11
    let milliseconds = 0
    countdown = setInterval(() => {
        if (milliseconds === 0) {
            seconds--;
            milliseconds = 999;
        } else {
            milliseconds -= 1;
            if (milliseconds < 0) {
                milliseconds = 0;
            }
        }

        const sec = String(seconds).padStart(2, '0');
        const millisec = String(milliseconds).padStart(3, '0');
        newTimer.textContent = `${sec}:${millisec}`
if (seconds === 9) {
        animation.classList.add("animation-lol")
    }
    }, 1)
    
}

start()
