/*
 * @title Error Handler
 */

import notifier from "node-notifier";

function errorHandler(error) {
  notifier.notify({
    title: 'Gulp Error',
    message: error.message,
    timeout: 3
  });
  console.error('\x1b[31m', error.message ,'\x1b[0m');
  this.emit('end');
}

export default errorHandler;
