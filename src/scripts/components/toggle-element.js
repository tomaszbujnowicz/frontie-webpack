/**
 * Toggle element on click
 *
 * https://gomakethings.com/how-to-show-and-hide-elements-with-vanilla-javascript/
 */

import { toggle } from 'Utils/visibility.js'

export default function toggleElement() {

  document.addEventListener('click', function (e) {

    if (e.target.matches('[data-js="toggle-element"]')) {
      e.preventDefault();

      // Get the content
      var content = document.querySelector(e.target.hash);
      if (!content) return;

      // Toggle the content
      toggle(content);

    }

  }, false);

}
