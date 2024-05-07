document.addEventListener('DOMContentLoaded', function() {
  var slides = document.querySelectorAll('.slide');
  var currentSlideIndex = 0;

  function showSlide(index) {
      slides.forEach(function(slide) {
          slide.classList.remove('active');
      });
      slides[index].classList.add('active');
  }

  function nextSlide() {
      currentSlideIndex++;
      if (currentSlideIndex >= slides.length) {
          currentSlideIndex = 0;
      }
      showSlide(currentSlideIndex);
  }

  setInterval(nextSlide, 5000); // Change slide every 5 seconds
});