// Get references to the password and confirm password fields
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');

// Get references to the error message and submit button
const submitButton = document.getElementById('submitButton');

// Add an event listener to the confirm password field
confirmPasswordField.addEventListener('input', function() {
  const password = passwordField.value;
  const confirmPassword = confirmPasswordField.value;

  if (password === confirmPassword) {
    // Passwords match, hide the error message and enable the submit button
    alert('Password does not match');
    submitButton.disabled = false;
  } else {
    // Passwords don't match, show the error message and disable the submit button
    errorText.style.display = 'block';
    submitButton.disabled = true;
  }
});