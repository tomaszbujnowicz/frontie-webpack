/**
 * Search Overlay
 */

import { show, hide, toggle } from 'Utils/visibility.js'

export default function searchOverlay() {

  const target = document.querySelector('[data-js="search-target"]');

  // When Search Overlay exists
  if (target) {

    const input = target.querySelector('[data-js="search-input"]')

    var showOverlay = function() {
      show(target);
      input.focus();
      document.body.classList.add('overflow-hidden');
    };

    var closeOverlay = function() {
      hide(target);
      document.body.classList.remove('overflow-hidden');
    };

    document.addEventListener('click', function(e) {

      // Open an overlay
      if (e.target.matches('[data-js="search-trigger"]')) {
        e.preventDefault();
        showOverlay();
      }

      // Close an overlay
      if (e.target.matches('[data-js="search-close"]')) {
        e.preventDefault();
        closeOverlay();
      }

    }, false);

    document.addEventListener('keydown', function(e) {

      // Check if the search overlay is opened
      if (document.body.classList.contains('overflow-hidden')) {

        // Close an overlay on Escape key click
        if (e.key === 'Escape' || e.keyCode === 27) {
          closeOverlay();
        }

      }

    });

  }

}
