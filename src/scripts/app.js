/*
 * @title App
 * @description Application entry point
 */

// Modules
import navbar from '../modules/navbar/navbar';
import carousel from '../modules/carousel/carousel';

// Components
import collapse from './components/collapse.js';
import smoothscroll from './components/smoothscroll';
import toggle from './components/toggle';

document.addEventListener('DOMContentLoaded', function() {

  // Modules
  navbar();
  carousel();

  // Components
  collapse();
  smoothscroll();
  toggle();

})
