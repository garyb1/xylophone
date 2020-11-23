function removeStyles(e) {
  if (e.propertyName !== 'box-shadow') return;
  e.target.classList.remove('playing');
}

function playSound(e) {
  let dataKey = e.key;
  if (!dataKey) {
    dataKey = e.target.textContent === 'c2' ? 2 : e.target.textContent;
  }
  
  const audio = document.querySelector(`audio[data-key="${dataKey}"]`);
  const key = document.querySelector(`.note[data-key="${dataKey}"]`);
  if (!audio) return;

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
}

const keys = Array.from(document.querySelectorAll('.note'));
keys.forEach(key => key.addEventListener('transitionend', removeStyles));
window.addEventListener('keydown', playSound);
window.addEventListener('click', playSound);


// Xylophone Sounds Attribution - Sounds I used in this demo are not mine.
// Author: DANMITCH3LL
// Author URL: https://freesound.org/people/DANMITCH3LL/sounds
// License: Creative Commons Attribution 3.0 Unported
// License URL: http://creativecommons.org/licenses/by/3.0/
