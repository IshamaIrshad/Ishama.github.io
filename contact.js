document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission
  // You can perform form validation here if needed
  // Assuming validation is successful, display a success message
  alert("Feedback submitted successfully! Thank you for your valuable feedback.");
  // Optionally, you can reset the form fields
  this.reset();
});
