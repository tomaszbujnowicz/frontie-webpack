/**
 * Carousel
 * https://flickity.metafizzy.co/
 */

import Flickity from 'flickity';
import 'flickity/css/flickity.css';

export function carousel() {

  const carousel = document.querySelector('.js-carousel');

  if (carousel) {
    // Flickity - fade in for no FOUC, vanilla JS
    // https://codepen.io/desandro/pen/JGoGpm
    carousel.classList.remove('is-hidden');
    carousel.offsetHeight;
    new Flickity( carousel, {
      // options
      cellAlign: 'left',
      wrapAround: true
    } );
  }

}

export default carousel;
