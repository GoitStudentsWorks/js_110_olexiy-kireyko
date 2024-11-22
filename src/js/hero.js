import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

const swiper = new Swiper('.hero__slider', {
  modules: [Autoplay],
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  loop: true,
});
