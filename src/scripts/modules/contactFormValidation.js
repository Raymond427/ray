const firstNameInput = document.getElementById('ContactForm__first-name');
const lastNameInput = document.getElementById('ContactForm__last-name');
const phoneNumberInput = document.getElementById('ContactForm__phone');
const emailAddressInput = document.getElementById('ContactForm__email');
const messageInput = document.getElementById('ContactForm__message');
const submitButton = document.getElementById('ContactForm__submit-button');
const EMAIL_REGEX = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

function formIsValid() {
  let validity = true;
  if(!firstNameInput.value) {
    validity = false;
    document.getElementById('error__first-name').style.display = 'block';
  } else {
    document.getElementById('error__first-name').style.display = 'none';
  }
  if(!lastNameInput.value) {
    validity = false;
    document.getElementById('error__last-name').style.display = 'block';
  } else {
    document.getElementById('error__last-name').style.display = 'none';
  }
  if(!emailAddressInput.value || !EMAIL_REGEX.test(emailAddressInput)) {
    validity = false;
    document.getElementById('error__email').style.display = 'block';
  } else {
    document.getElementById('error__email').style.display = 'none';
  }
  if(!phoneNumberInput.value ||
     phoneNumberInput.value[0] === '0' ||
     phoneNumberInput.value.length < 10 ||
     phoneNumberInput.value.length > 11) {
    validity = false;
    document.getElementById('error__phone').style.display = 'block';
  } else {
    document.getElementById('error__phone').style.display = 'none';
  }
  if(!messageInput.value) {
    validity = false;
    document.getElementById('error__message').style.display = 'block';
  } else {
    document.getElementById('error__message').style.display = 'none';
  }
  return validity;
}
