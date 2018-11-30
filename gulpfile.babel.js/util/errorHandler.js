/*
 * @title Error Handler
 */

import notifier from "node-notifier";

export function errorHandler (error) {
  notifier.notify({
    title: 'Gulp error',
    message: error.message
  });
  console.error(error.message);
  this.emit('end');
}
