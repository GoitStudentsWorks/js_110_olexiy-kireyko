// form verification
const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const form = document.querySelector('.work-together__form');
const emailField = form.querySelector('.form__email');
const emailCheckRight = document.querySelector('.form__svg-check-right');
const emailCheckWrong = document.querySelector('.form__email-check-wrong');

form.addEventListener('submit', sendForm);

emailField.addEventListener('blur', () => {
  if (!emailPattern.test(emailField.value)) {
    emailField.style.color = 'var(--error)';
    emailCheckWrong.style.display = 'block';
    emailCheckRight.style.display = 'none';
    return;
  } else {
    emailCheckRight.style.display = 'block';
    emailField.style.color = 'var(--black)';
    emailCheckWrong.style.display = 'none';
  }
});

function sendForm(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const emailFieldValue = formData.get('form-email');
  const textareaFieldValue = formData.get('form-textarea');

  if (!emailPattern.test(emailField.value)) {
    return;
  }

  emailCheckRight.style.display = 'none';
  emailCheckWrong.style.display = 'none';
  form.reset();
}
