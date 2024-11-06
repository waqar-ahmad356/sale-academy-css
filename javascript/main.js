const swiperWrapper = document.querySelector('.swiper-wrapper');

// Optional: Pause on hover
swiperWrapper.addEventListener('mouseover', () => {
  swiperWrapper.style.animationPlayState = 'paused';
});
swiperWrapper.addEventListener('mouseleave', () => {
  swiperWrapper.style.animationPlayState = 'running';
});

