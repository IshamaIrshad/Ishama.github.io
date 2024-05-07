document.addEventListener('DOMContentLoaded', function() {
  const activityList = document.querySelector('.activity-list');
  const activityItems = document.querySelectorAll('.activity-item');
  const carouselWidth = activityItems[0].offsetWidth;
  let currentPosition = 0;

  // Clone the activity items for seamless looping
  activityList.innerHTML += activityList.innerHTML;

  // Function to move the carousel
  function moveCarousel() {
      currentPosition -= 1;
      if (currentPosition <= -carouselWidth) {
          currentPosition = 0;
      }
      activityList.style.transform = `translateX(${currentPosition}px)`;
  }

  // Start the carousel loop
  setInterval(moveCarousel, 20);
});
