/**
 * Navbar
 */

export function navbar() {

  // Debounce function which waits 10ms before firing. We use it so we don't fire events like crazy during long scroll sessions

  function debounce(func, wait = 10, immediate = true) {
    let timeout;
    return function() {
      let context = this, args = arguments;
      let later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      let callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  // Show menu overlay on the mobile devices when click the navbar toggler

  const navbarToggler = document.querySelector('.js-navbar-toggler');

  if (navbarToggler) {

    navbarToggler.addEventListener('click', function (event) {
    	event.preventDefault();
      document.body.classList.toggle('navbar--opened');
    });

  }

  // Add class to navbar after certain amount of pixels are scrolled

  const navbarElement = document.querySelector('.js-navbar');
  const navbarTransparentPixels = 150;

  if (navbarElement) {

    if (navbarElement.classList.contains('navbar--fixed-transparent')) {

      function navbarTransparent() {
        let scrolled = document.scrollingElement.scrollTop;
        let position = navbarElement.offsetTop;
        if (scrolled > position + navbarTransparentPixels) {
          navbarElement.classList.add('navbar--scrolled');
        } else {
          navbarElement.classList.remove('navbar--scrolled');
        }
      }

      window.addEventListener('scroll', debounce(navbarTransparent));

    }

  }

  // Navbar slides out of view when scrolling down and slides back in when scrolling up
  // Based on https://dev.to/changoman/showhide-element-on-scroll-w-vanilla-js-3odm

  if (navbarElement) {

    if (navbarElement.classList.contains('navbar--fixed-showhide')) {

      const navbarShowHidetPixels = 150;
      let scrollPos = 0;

      function navbarShowHide() {

        var scrolled = document.scrollingElement.scrollTop;
        var position = navbarElement.offsetTop;
        if (scrolled > position + navbarShowHidetPixels) {

          let windowY = window.scrollY;
          if (windowY < scrollPos) {
            // Scrolling UP
            navbarElement.classList.add('is-visible');
            navbarElement.classList.remove('is-hidden');
          } else {
            // Scrolling DOWN
            navbarElement.classList.add('is-hidden');
            navbarElement.classList.remove('is-visible');
          }
          scrollPos = windowY;
        }
      }

      window.addEventListener('scroll', debounce(navbarShowHide));

    }

  }

}

export default navbar;
