/**
 * Toggle element on click
 * https://gomakethings.com/how-to-show-and-hide-elements-with-vanilla-javascript/
 */

export function showhide() {

  var show = function (elem) {
  	elem.style.display = 'block';
  };

  var hide = function (elem) {
  	elem.style.display = 'none';
  };

  var toggle = function (elem) {

  	// If the element is visible, hide it
  	if (window.getComputedStyle(elem).display === 'block') {
  		hide(elem);
  		return;
  	}

  	// Otherwise, show it
  	show(elem);

  };

  // Listen for click events
  document.addEventListener('click', function (event) {

  	// Make sure clicked element is our toggle
  	if (!event.target.classList.contains('js-toggle')) return;

  	// Prevent default link behavior
  	event.preventDefault();

  	// Get the content
  	var content = document.querySelector(event.target.hash);
  	if (!content) return;

  	// Toggle the content
  	toggle(content);

  }, false);

}

export default showhide;
