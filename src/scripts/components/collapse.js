/**
 * Collapse
 *
 * https://medium.com/dailyjs/mimicking-bootstraps-collapse-with-vanilla-javascript-b3bb389040e7
 */

export function collapse() {

  // Handler that uses various data-* attributes to trigger
  // specific actions, mimicing bootstraps attributes
  const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

  window.addEventListener('click', function (event) {
    const elm = event.target;
    if (triggers.includes(elm)) {
      event.preventDefault();
      const selector = elm.getAttribute('data-target');
      const selectorTextClosed = elm.getAttribute('data-text-closed');
      const selectorTextOpened = elm.getAttribute('data-text-opened');
      collapse(selector, 'toggle');
      if (event.target.classList.contains('collapse-trigger--opened')) {
        event.target.classList.remove('collapse-trigger--opened');
        event.target.innerHTML = selectorTextClosed;
      } else {
        event.target.classList.add('collapse-trigger--opened');
        event.target.innerHTML = selectorTextOpened;
      }
    }
  }, false);

  const fnmap = {
    'toggle': 'toggle',
    'show': 'add',
    'hide': 'remove'
  };

  const collapse = (selector, cmd) => {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
      target.classList[fnmap[cmd]]('show');
    });
  }

}

export default collapse;
