/**
 * Navbar
 */

import debounce from '../../scripts/lib/debounce.js';

export default function navbar() {

  // Show an overlay on the navbar toggler click
  var navbarTrigger = function () {
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-navbar-toggler]')) {
        e.preventDefault();
        document.body.classList.toggle('navbar--opened');
      }
	  }, false);
  };
  navbarTrigger();

  // Navbar becomes transparent when scrolling down.
  var onScrollTransparent = function () {
    const navbarElement = document.querySelector('[data-navbar]')
    const navbarPixels = 150;

    if (navbarElement.classList.contains('navbar--fixed-transparent')) {
      function navbarTransparent() {
        let scrolled = document.scrollingElement.scrollTop;
        let position = navbarElement.offsetTop;
        if (scrolled > position + navbarPixels) {
          navbarElement.classList.add('navbar--scrolled');
        } else {
          navbarElement.classList.remove('navbar--scrolled');
        }
      }
      window.addEventListener('scroll', debounce(navbarTransparent));
    }
  };
  onScrollTransparent();

  // Navbar slides out of view when scrolling down and slides back in when scrolling up
  // Based on https://dev.to/changoman/showhide-element-on-scroll-w-vanilla-js-3odm
  var onScrollToggle = function () {
    const navbarElement = document.querySelector('[data-navbar]')
    const navbarPixels = 150;
    let scrollPos = 0;

    if (navbarElement.classList.contains('navbar--fixed-toggle')) {
      function navbarShowHide() {
        var scrolled = document.scrollingElement.scrollTop;
        var position = navbarElement.offsetTop;
        if (scrolled > position + navbarPixels) {
          let windowY = window.scrollY;
          if (windowY < scrollPos) {
            // Scrolling UP
            navbarElement.classList.add('navbar-visible');
            navbarElement.classList.remove('navbar-hidden');
          } else {
            // Scrolling DOWN
            navbarElement.classList.add('navbar-hidden');
            navbarElement.classList.remove('navbar-visible');
          }
          scrollPos = windowY;
        }
      }
      window.addEventListener('scroll', debounce(navbarShowHide));
    }
  };
  onScrollToggle();

}
