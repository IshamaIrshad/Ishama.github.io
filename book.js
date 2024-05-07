
  document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitButton");
    const form = document.querySelector(".book-form");

    submitBtn.addEventListener("click", function() {
      // Validate form fields
      const nameInput = form.querySelector('input[name="name"]');
      const emailInput = form.querySelector('input[name="email"]');
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();

      if (name === "" || email === "") {
        // Display error message for blank fields
        alert("Please fill in all fields.");
        return;
      }

      if (!email.includes("@")) {
        // Display error message for invalid email
        alert("Please enter a valid email address.");
        return;
      }

      // Show success message
      const successMessage = document.createElement("div");
      successMessage.classList.add("alert", "alert-success", "mt-3");
      successMessage.innerHTML = '<i class="bi bi-check-circle-fill"></i> Sent successfully';

      // Append success message after the form
      form.parentNode.insertBefore(successMessage, form.nextSibling);

      // Reset form fields after 2 seconds
      setTimeout(function() {
        successMessage.remove();
        form.reset(); // Clear form fields
      }, 2000);
    });
  });

