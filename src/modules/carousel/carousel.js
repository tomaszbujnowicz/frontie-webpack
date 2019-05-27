/**
 * Carousel
 * https://flickity.metafizzy.co/
 */

import Flickity from 'flickity';
import 'flickity/css/flickity.css';

export default function carousel() {

  const carousel = document.querySelector('[data-js="carousel"]');

  // When Carousel exists
  if (carousel) {

    // Flickity - fade in for no FOUC, vanilla JS
    // https://codepen.io/desandro/pen/JGoGpm
    var carouselInit = function () {
      carousel.classList.remove('is-hidden');
      carousel.offsetHeight;
      new Flickity( carousel, {
        // options
        cellAlign: 'left',
        wrapAround: true
      } );
    };

    carouselInit();
  }

}
