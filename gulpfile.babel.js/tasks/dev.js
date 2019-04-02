/*
 * @title Dev
 * @description A task to generate a development environment,
 * start the server and watch for changes.
 */

// Dependencies
import { series } from 'gulp';

// Tasks
import { build } from './build';
import { watch } from './watch';

export const dev = series(
  build,
  watch
);
