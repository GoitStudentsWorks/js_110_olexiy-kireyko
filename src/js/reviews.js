import axios from 'axios';
import Swiper from 'swiper';

const BASE_URL = 'https://portfolio-js.b.goit.study';
const END_POINT = '/api/reviews';
const slideList = document.querySelector('.swiper-wrapper');
const btnPrev = document.querySelector('.swiper__button-prev');
const btnNext = document.querySelector('.swiper__button-next');
const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
});

async function getReviews() {
  const { data } = await axios(BASE_URL + END_POINT);
  return data;
}

function markupReviews(arr) {
  return arr
    .map(
      ({ author, avatar_url, review }) =>
        `<div class="swiper-slide">
          <blockquote class="reviews__quote">
            <p class="reviews__text">${review}</p>
          </blockquote>

          <div class="reviews__info">
            <div class="reviews__wrapper__img">
              <img src="${avatar_url}" alt="client" class="reviews__img">
            </div>
            <h3 class="reviews__name">${author}</h3>
          </div>
        </div>`
    )
    .join('');
}

getReviews().then(data => {
  slideList.innerHTML = markupReviews(data);
});

btnNext.addEventListener('click', event => swiper.slideNext());

btnPrev.addEventListener('click', event => swiper.slidePrev());
