/**
 * Navbar
 */

export function navbar() {

  // Show menu overlay on the mobile devices when click the navbar toggler

  const navbarToggler = document.querySelector('.js-navbar-toggler');

  if (navbarToggler) {

    navbarToggler.addEventListener('click', function (event) {
    	event.preventDefault();
      document.body.classList.toggle('navbar--opened');
    });

  }

  // Add class to navbar after certain amount of pixels are scrolled

  const navbar = document.querySelector('.js-navbar');

  if (navbar) {

    if (navbar.classList.contains('navbar--fixed')) {

      window.addEventListener('scroll', function(event) {
        var scrolled = document.scrollingElement.scrollTop;
        var position = navbar.offsetTop;
        if (scrolled > position + 100) {
          navbar.classList.add('navbar--scrolled');
        } else {
          navbar.classList.remove('navbar--scrolled');
        }
      });
    }

  }

}

export default navbar;
