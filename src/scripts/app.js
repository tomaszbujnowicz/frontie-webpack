/*
 * @title App
 * @description Application entry point
 */

// Libs
import 'Utils/polyfill-closest.js';

// Modules
import navbar from 'Modules/navbar/navbar';
import carousel from 'Modules/carousel/carousel';
import searchOverlay from 'Modules/search-overlay/search-overlay';

// Components
import collapse from 'Components/collapse.js';
import smoothScroll from 'Components/smooth-scroll';
import toggleElement from 'Components/toggle-element';

document.addEventListener('DOMContentLoaded', function() {

  // Modules
  navbar();
  carousel();
  searchOverlay();

  // Components
  collapse();
  smoothScroll();
  toggleElement();

})
