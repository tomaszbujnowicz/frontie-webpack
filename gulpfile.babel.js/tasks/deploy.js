/*
 * @title Deploy
 * @description Publish contents to Github pages.
 */

// Dependencies
import { src } from 'gulp';
import ghPages from 'gulp-gh-pages';

// Config
import { paths } from "../config";

// Task
export function deploy() {
  return src(paths.deploy)
    .pipe(ghPages())
 }
