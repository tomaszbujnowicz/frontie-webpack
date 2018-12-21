/**
 * Carousel
 */

import Flickity from 'flickity';
import 'flickity/css/flickity.css';

export function carousel() {

  const carousel = document.querySelector('.js-carousel');

  if (carousel) {
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
