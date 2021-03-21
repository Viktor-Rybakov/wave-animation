window.addEventListener('DOMContentLoaded', ()=>{
  const PRELOAD_SECTION = document.querySelector('.preloader');
  const PRELOAD_VALUE = document.querySelector('.preloader__title-level');

  let loadLevel = 0;
  let timerID = setInterval(preloadLevel, 200);

  function preloadLevel() {
    if (loadLevel === 100) {
      clearInterval(timerID)
    }

    PRELOAD_SECTION.setAttribute('style', `--preload-level: ${loadLevel}`);
    PRELOAD_VALUE.textContent = `${loadLevel}%`;
    loadLevel++;
  }
});
