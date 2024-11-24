import axios from 'axios';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import iziToast from 'izitoast';

const BASE_URL = 'https://portfolio-js.b.goit.study';
const END_POINT = '/api/reviews';

const swiperList = document.querySelector('.reviews__swiper-list');

const swiper = new Swiper('.reviews__swiper', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper__btn-next',
    prevEl: '.swiper__btn-prev',
  },
  speed: 400,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 300,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 300,
    },
    1280: {
      slidesPerView: 2,
      spaceBetween: 32,
      centerInsufficientSlides: true,
    },
  },
});

async function getReviews() {
  const { data } = await axios(BASE_URL + END_POINT);
  return data;
}

function markupReviews(arr) {
  return arr
    .map(
      ({ author, avatar_url, review }) =>
        `<li class="swiper-slide">
            <blockquote class="reviews__quote">
              <p class="p-l">${review}</p>
            </blockquote>
          <div class="reviews__info">
            <div class="reviews__wrapper__img">
              <img src="${avatar_url}" alt="client" class="reviews__img">
            </div>
            <h3 class="reviews__name">${author}</h3>
          </div>
        </li>`
    )
    .join('');
}

getReviews()
  .then(data => {
    swiperList.innerHTML = markupReviews(data);
    swiper.update();
  })
  .catch(Error => {
    iziToast.show({
      message: 'Reviews not found',
    });
    swiperList.innerHTML = `<li>
                              <p class="p-l">Not found</p>
                            </li>`;
  });
