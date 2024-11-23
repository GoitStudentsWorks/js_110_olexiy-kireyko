import axios from 'axios';

// form verification
const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

const form = document.querySelector('.work-together__form');
const emailField = form.querySelector('.form__email');
const emailCheckRight = document.querySelector('.form__svg-check-right');
const emailCheckWrong = document.querySelector('.form__email-check-wrong');

const wtContent = document.querySelector('.work-together__modal-part');

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

  formRequest(`${BASE_URL}/requests`, emailFieldValue, textareaFieldValue)
    .then(data => {
      const markup = `
      <div class="work-together__modal-window is-open">
        <div class="modal-window__container container">
          <button class="modal-window__close-btn" type="button">
            <svg class="modal-window__svg" width="12" height="12">
              <use href="/images/icons.svg#icon-close"></use>
            </svg>
          </button>
          <p class="modal-window__title">
            ${data.title}
          </p>
          <p class="modal-window__text p-l">
            ${data.message}
          </p>
        </div>
      </div>`;

      wtContent.innerHTML = markup;
      form.reset();

      const modalWindow = document.querySelector(
        '.work-together__modal-window'
      );
      const modalWindowCloseBtn = document.querySelector(
        '.modal-window__close-btn'
      );

      const closeModal = () => {
        if (modalWindow.classList.contains('is-open')) {
          modalWindow.classList.remove('is-open');
          document.removeEventListener('keydown', handleEscapeKey);
        }
      };

      const handleEscapeKey = event => {
        if (event.key === 'Escape') {
          closeModal();
        }
      };

      modalWindowCloseBtn.addEventListener('click', () => {
        closeModal();
      });

      document.addEventListener('keydown', handleEscapeKey);
    })
    .catch(error => {
      console.log(error);
    });

  emailCheckRight.style.display = 'none';
  emailCheckWrong.style.display = 'none';
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
