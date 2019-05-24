/*
 * @title App
 * @description Application entry point
 */

// Libs
import './lib/polyfill-closest.js';

// Modules
import navbar from '../modules/navbar/navbar';
import carousel from '../modules/carousel/carousel';
import searchOverlay from '../modules/search-overlay/search-overlay';

// Components
import collapse from './components/collapse.js';
import smoothScroll from './components/smooth-scroll';
import toggleElement from './components/toggle-element';

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
