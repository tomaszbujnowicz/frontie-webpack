/**
 * Carousel
 * https://flickity.metafizzy.co/
 */

import Flickity from 'flickity';
import 'flickity/css/flickity.css';

export default function carousel() {

  var carouselInit = function () {
    const carousel = document.querySelector('[data-carousel]');

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
  };

  carouselInit();

}
