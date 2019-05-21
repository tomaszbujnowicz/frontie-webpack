/**
 * Visibility functions
 */

export function show (elem) {
  elem.classList.remove('is-hidden');
}
export function hide (elem) {
  elem.classList.add('is-hidden');
}
export function toggle (elem) {
  elem.classList.toggle('is-hidden');
}
