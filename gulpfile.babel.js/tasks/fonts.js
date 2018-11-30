/*
 * @title Fonts
 * @description A task to copy fonts
 */

// Dependencies
import { src, dest } from 'gulp';
import changed from "gulp-changed";

// Config
import { paths } from "../config";

// Task
export function fonts(cb) {
  return src([ paths.fonts.src ], { 'dot': true /* include hidden files */ } )
    .pipe(changed(paths.fonts.dest))
    .pipe(dest(paths.fonts.dest))
    cb();
}
