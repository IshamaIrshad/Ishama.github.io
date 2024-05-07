document.addEventListener("DOMContentLoaded", function() {
  const reviews = document.querySelectorAll(".review");
  
  reviews.forEach(function(review) {
    review.addEventListener("mouseenter", function() {
      review.classList.add("flip");
    });
    
    review.addEventListener("mouseleave", function() {
      review.classList.remove("flip");
    });
  });
});
