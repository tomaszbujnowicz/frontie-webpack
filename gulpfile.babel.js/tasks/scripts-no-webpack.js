/*
 * @title Scripts
 * @description A task to concatenate and compress js files via webpack
 */

// Dependencies
import { src, dest } from 'gulp';
import babel from 'gulp-babel';

// Config
import { paths } from "../config";

// Task
export function scripts() {
  return src(paths.scripts.src, { sourcemaps: true })
    .pipe(babel())
    .pipe(dest(paths.scripts.dest));
}
