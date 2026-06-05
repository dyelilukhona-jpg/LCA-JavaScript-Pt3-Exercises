//Prevent Default Submission
const registrationForm = document.querySelector("#registrationForm");
registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var username = document.getElementById("username").value.trim();
  var email = document.getElementById("email").value.trim();
  var password = document.getElementById("password").value;
  var confirmPassword = document.getElementById("confirmPassword").value;
  console.log("Form submission prevented");

  //Basic Field Validation
  document.getElementById("usernameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("confirmPasswordError").textContent = "";
  document.getElementById("formMessage").textContent = "";

  var isValid = true;

  if (username === "") {
    document.getElementById("usernameError").textContent =
      "Username cannot be empty";
    isValid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "Email cannot be empty";
    isValid = false;
  } else if (!email.includes("@")) {
    // Simple check: email must contain an @ symbol
    document.getElementById("emailError").textContent =
      "Email must contain an @ symbol";
    isValid = false;
  }


  if (password === "") {
    document.getElementById("passwordError").textContent =
      "Password cannot be empty";
    isValid = false;
  } else if (password.length < 6) {
    // Password must be at least 6 characters long
    document.getElementById("passwordError").textContent =
      "Password must be at least 6 characters";
    isValid = false;
  }


  if (confirmPassword === "") {
    document.getElementById("confirmPasswordError").textContent =
      "Please confirm your password";
    isValid = false;
  } else if (confirmPassword !== password) {
    // Confirm password must exactly match the password
    document.getElementById("confirmPasswordError").textContent =
      "Passwords do not match";
    isValid = false;
  }

  // If everything passed, show success
  if (isValid) {
    document.getElementById("formMessage").textContent =
      "Registration successful!";

    // Log the collected form data to the console (bonus)
    console.log("Registration successful!");
    console.log({ username: username, email: email });
  }
});
