const videoBtn = document.querySelector('.js-play-video');
if (videoBtn) {
  const videoWrapper = videoBtn.closest('.video');
  const video = videoBtn.closest('.video').querySelector('.video__src');
  videoWrapper.addEventListener('click', () => {
    videoWrapper.classList.toggle('active');
    if (video.paused) {
      video.play();
      setTimeout(() => {
        video.controls = true;
      }, 500);
    } else {
      video.controls = false;
      video.pause();
    }
  });
}
