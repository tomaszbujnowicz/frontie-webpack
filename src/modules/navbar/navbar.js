/**
 * Navbar
 */

import debounce from '../../scripts/lib/debounce.js';

export default function navbar() {

  const navbar = document.querySelector('[data-navbar]');

  // When Navbar exists
  if (navbar) {

    // Show an overlay on the navbar toggler click
    var trigger = function () {
      document.addEventListener('click', function (e) {
        if (e.target.closest('[data-navbar-toggler]')) {
          e.preventDefault();
          document.body.classList.toggle('navbar--opened');
        }
  	  }, false);
    };
    trigger();

    // Navbar becomes transparent when scrolling down.
    var onScrollTransparent = function () {
      const navbarPixels = 150;

      if (navbar.classList.contains('navbar--fixed-transparent')) {
        function navbarTransparent() {
          let scrolled = document.scrollingElement.scrollTop;
          let position = navbar.offsetTop;
          if (scrolled > position + navbarPixels) {
            navbar.classList.add('navbar--scrolled');
          } else {
            navbar.classList.remove('navbar--scrolled');
          }
        }
        window.addEventListener('scroll', debounce(navbarTransparent));
      }
    };
    onScrollTransparent();

    // Navbar slides out of view when scrolling down and slides back
    // in when scrolling up
    // Based on
    // https://dev.to/changoman/showhide-element-on-scroll-w-vanilla-js-3odm
    var onScrollToggle = function () {
      const navbarPixels = 150;
      let scrollPos = 0;

      if (navbar.classList.contains('navbar--fixed-toggle')) {
        function navbarShowHide() {
          var scrolled = document.scrollingElement.scrollTop;
          var position = navbar.offsetTop;
          if (scrolled > position + navbarPixels) {
            let windowY = window.scrollY;
            if (windowY < scrollPos) {
              // Scrolling UP
              navbar.classList.add('navbar-visible');
              navbar.classList.remove('navbar-hidden');
            } else {
              // Scrolling DOWN
              navbar.classList.add('navbar-hidden');
              navbar.classList.remove('navbar-visible');
            }
            scrollPos = windowY;
          }
        }
        window.addEventListener('scroll', debounce(navbarShowHide));
      }
    };
    onScrollToggle();

  }

}
