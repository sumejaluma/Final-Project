const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');
const selectInput = document.getElementById('select');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Validate the name field
  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return false;
  }

  // Validate the email field
  if (emailInput.value.trim() === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return false;
  } else if (!isValidEmail(emailInput.value.trim())) {
    alert('Please enter a valid email.');
    emailInput.focus();
    return false;
  }

  if (phoneInput.value.trim() === '') {
    alert('Please enter your Phone Number.');
    phoneInput.focus();
    return false;
  }

  if (selectInput.value.trim() === 'Please Select') {
    alert('Please select the message subject.');
    selectInput.focus();
    return false;
  }

  // Validate the message field
  if (messageInput.value.trim() === '') {
    alert('Please enter your message.');
    messageInput.focus();
    return false;
  }

  // If all fields are valid, submit the form
  form.submit();
});

function isValidEmail(email) {
  // A basic email validation regular expression
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}


