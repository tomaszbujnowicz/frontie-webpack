/**
 * Toggle element on click
 * https://gomakethings.com/how-to-show-and-hide-elements-with-vanilla-javascript/
 */

export function toggle() {

  // Show an element
  var show = function (elem) {
  	elem.classList.remove('is-hidden');
  };

  // Hide an element
  var hide = function (elem) {
  	elem.classList.add('is-hidden');
  };

  // Toggle element visibility
  var toggle = function (elem) {
  	elem.classList.toggle('is-hidden');
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

export default toggle;
