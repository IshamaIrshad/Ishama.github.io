document.addEventListener("DOMContentLoaded", function() {
  const reviews = document.querySelectorAll(".review");
  let index = 0;

  function showReview(index) {
      reviews.forEach(review => review.classList.remove("active"));
      reviews[index].classList.add("active");
  }

  showReview(index);

  document.querySelector(".next-btn-review").addEventListener("click", function() {
      index = (index + 1) % reviews.length;
      showReview(index);
  });

  document.querySelector(".prev-btn-review").addEventListener("click", function() {
      index = (index - 1 + reviews.length) % reviews.length;
      showReview(index);
  });
});