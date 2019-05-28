/*
 * @title App
 * @description Application entry point
 */

// Polyfills
import 'Utils/_closest.polyfill.js';
import 'Utils/_matches.polyfill.js';

// Modules
import carousel from 'Modules/carousel/carousel';
import navbar from 'Modules/navbar/navbar';
import searchOverlay from 'Modules/search-overlay/search-overlay';

// Components
import collapse from 'Components/collapse.js';
import smoothScroll from 'Components/smooth-scroll';
import toggleElement from 'Components/toggle-element';

document.addEventListener('DOMContentLoaded', function() {

  // Modules
  carousel();
  navbar();
  searchOverlay();

  // Components
  collapse();
  smoothScroll();
  toggleElement();

})
