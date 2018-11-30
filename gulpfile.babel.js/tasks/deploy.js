/*
 * @title Deploy
 * @description Publish contents to Github pages
 */

// Dependencies
import { src } from 'gulp';
import ghPages from 'gulp-gh-pages';
// TODO import build before deploy

// Config
import { paths } from "../config";

// Task
export function publish() {
  return src(paths.dest)
    .pipe(ghPages())
 }
