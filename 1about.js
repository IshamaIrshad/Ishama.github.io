document.addEventListener("DOMContentLoaded", function() {
    const reviews = document.querySelectorAll(".review");
    let currentReviewIndex = 0;

    function showReview(index) {
        reviews.forEach((review, i) => {
            if (i === index) {
                review.style.display = "block";
            } else {
                review.style.display = "none";
            }
        });
    }

    showReview(currentReviewIndex);

    document.getElementById("prevBtn").addEventListener("click", function() {
        currentReviewIndex = (currentReviewIndex - 1 + reviews.length) % reviews.length;
        showReview(currentReviewIndex);
    });

    document.getElementById("nextBtn").addEventListener("click", function() {
        currentReviewIndex = (currentReviewIndex + 1) % reviews.length;
        showReview(currentReviewIndex);
    });
});
