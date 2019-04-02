/*
 * @title Copy
 * @description A task to copy font files to the output directory.
 */

// Dependencies
import { src, dest } from 'gulp';
import changed from "gulp-changed";

// Config
import { paths } from "../config";

// Task
export function copy() {
  return src(paths.copy.src)
    .pipe(changed(paths.copy.dest))
    .pipe(dest(paths.copy.dest))
 }
