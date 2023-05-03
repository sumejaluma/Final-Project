const form = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const phoneInput = document.getElementById('phone');


form.addEventListener('submit', function(event) {
  event.preventDefault(); 

  if (nameInput.value.trim() === '') {
    alert('Please enter your name.');
    nameInput.focus();
    return false;
  }

 
  if (emailInput.value.trim() === '') {
    alert('Please enter your email.');
    emailInput.focus();
    return false;
  } 

  if (phoneInput.value.trim() === '') {
    alert('Please enter your Phone Number.');
    phoneInput.focus();
    return false;
  }


 
  if (messageInput.value.trim() === '') {
    alert('Please enter your message.');
    messageInput.focus();
    return false;
  }

  
  form.submit();
});




