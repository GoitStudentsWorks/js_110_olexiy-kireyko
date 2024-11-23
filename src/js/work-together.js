import axios from 'axios';

// form verification
const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const form = document.querySelector('.work-together__form');
const emailField = form.querySelector('.form__email');
const emailCheckRight = document.querySelector('.form__svg-check-right');
const emailCheckWrong = document.querySelector('.form__email-check-wrong');

emailField.addEventListener('blur', () => {
  if (!emailPattern.test(emailField.value)) {
    emailField.style.color = 'var(--error)';
    emailCheckWrong.style.display = 'block';
    emailCheckRight.style.display = 'none';
    return;
  } else {
    emailCheckRight.style.display = 'block';
    emailField.style.color = 'var(--text)';
    emailCheckWrong.style.display = 'none';
  }
});

// form

form.addEventListener('submit', sendForm);

function sendForm(event) {
  event.preventDefault();

  const formData = new FormData(form);
  const emailFieldValue = formData.get('form-email');
  const textareaFieldValue = formData.get('form-textarea');

  if (!emailPattern.test(emailField.value)) {
    return;
  }

  const request = formRequest(
    `${BASE_URL}/requests`,
    emailFieldValue,
    textareaFieldValue
  )
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });

  emailCheckRight.style.display = 'none';
  emailCheckWrong.style.display = 'none';
  form.reset();
}

// function request

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

async function formRequest(URL, inputValue, textareaValue) {
  try {
    const response = await axios.post(URL, {
      email: inputValue,
      comment: textareaValue,
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
}

// create markup

// function createMarkup(arr) {
//   return arr
//     .map(({ title, message }) => {
//       `
//       <div class="work-together__modal-window">
//       <h2 class="modal-window__header">${title}</h2>
//       <p class="modal-window__text">${message}</p>
//       </div>
//     `;
//     })
//     .join('');
// }
