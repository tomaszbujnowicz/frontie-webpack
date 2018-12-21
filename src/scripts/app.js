/*
 * @title App
 * @description Application entry point
 */

import navbar from '../modules/navbar/navbar';
import carousel from '../modules/carousel/carousel';

document.addEventListener('DOMContentLoaded', function() {
  navbar();
  carousel();
})
