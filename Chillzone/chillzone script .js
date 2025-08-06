
// 1. Gérer les fonds d'écran
const buttons = document.querySelectorAll('button[data-bg]');
const backgrounds = document.querySelectorAll('.bg');
const startPlayBtn = document.getElementById('start-play');
const music = document.getElementById('bg-music');
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');

const popup = document.getElementById("popup-fin");
const fermerBtn = document.getElementById("fermer-popup");



// 🎨 Gérer les fonds d'écran

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const targetId = 'bg-' + button.dataset.bg;
    backgrounds.forEach(bg => bg.classList.remove('active'));
    const target = document.getElementById(targetId);
    if (target) target.classList.add('active');
  });
});

// 🎵 Musique + Timer

let timerRunning = false;
let countdown;
let totalSeconds = 60;

startPlayBtn.addEventListener('click', () => {
  if (!timerRunning) {
    // ▶️ Lancer musique + timer
    music.play();
    timerRunning = true;
    startPlayBtn.classList.add('glow');
    startPlayBtn.textContent = '⏸ Pause';

    countdown = setInterval(() => {
      totalSeconds--;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      minutesDisplay.textContent = String(minutes).padStart(2, '0');
      secondsDisplay.textContent = String(seconds).padStart(2, '0');

      if (totalSeconds <= 0) {
        clearInterval(countdown);
        timerRunning = false;
        music.pause();
        music.currentTime = 0;
        startPlayBtn.classList.remove('glow');
        startPlayBtn.textContent = '▶️ PLAY';
        totalSeconds = 60;
        afficherPopup();
        playNotificationSound();
      }
    }, 1000);
  } else {
    // ⏸ Pause timer + musique
    clearInterval(countdown);
    music.pause();
    timerRunning = false;
    startPlayBtn.classList.remove('glow');
    startPlayBtn.textContent = '▶️ PLAY';
  }
});

// fenetre pop up de fin 

function afficherPopup() {
  popup.classList.remove("hidden");
  const popupSound = document.getElementById("popup-sound");
  popupSound.play();
}


fermerBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
});
