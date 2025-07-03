// Get all necessary elements from the page
const form = document.getElementById('registrationForm');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');

// Error spans
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Load saved username from localStorage
window.addEventListener('DOMContentLoaded', () => {
  const savedUsername = localStorage.getItem('savedUsername');
  if (savedUsername) {
    usernameInput.value = savedUsername;
  }
});

// Helper function to show error messages
function showError(input, errorSpan, message) {
  errorSpan.textContent = message;
  input.classList.add('invalid');
}

// Helper function to clear error messages
function clearError(input, errorSpan) {
  errorSpan.textContent = '';
  input.classList.remove('invalid');
}

// Real-time validation on input
usernameInput.addEventListener('input', () => {
  if (usernameInput.validity.valueMissing) {
    showError(usernameInput, usernameError, 'Username is required.');
  } else if (usernameInput.validity.tooShort) {
    showError(usernameInput, usernameError, 'Username must be at least 3 characters.');
  } else {
    clearError(usernameInput, usernameError);
  }
});

emailInput.addEventListener('input', () => {
  if (emailInput.validity.valueMissing) {
    showError(emailInput, emailError, 'Email is required.');
  } else if (emailInput.validity.typeMismatch) {
    showError(emailInput, emailError, 'Please enter a valid email.');
  } else {
    clearError(emailInput, emailError);
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.validity.valueMissing) {
    showError(passwordInput, passwordError, 'Password is required.');
  } else if (!passwordInput.validity.valid) {
    showError(passwordInput, passwordError, 'Password must meet the requirements.');
  } else {
    clearError(passwordInput, passwordError);
  }
});

confirmPasswordInput.addEventListener('input', () => {
  if (confirmPasswordInput.value !== passwordInput.value) {
    showError(confirmPasswordInput, confirmPasswordError, 'Passwords do not match.');
  } else {
    clearError(confirmPasswordInput, confirmPasswordError);
  }
});

// Form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the form from submitting the normal way

  let formValid = true;

  // Validate all fields again
  if (!usernameInput.validity.valid) {
    usernameInput.dispatchEvent(new Event('input'));
    formValid = false;
  }

  if (!emailInput.validity.valid) {
    emailInput.dispatchEvent(new Event('input'));
    formValid = false;
  }

  if (!passwordInput.validity.valid) {
    passwordInput.dispatchEvent(new Event('input'));
    formValid = false;
  }

  if (confirmPasswordInput.value !== passwordInput.value) {
    confirmPasswordInput.dispatchEvent(new Event('input'));
    formValid = false;
  }

  if (formValid) {
    alert('Registration successful!');
    localStorage.setItem('savedUsername', usernameInput.value);
    form.reset();
  }
});
