/*
 * @title Assets
 * @description A task to copy assets.
 */

// Dependencies
import { src, dest } from 'gulp';
import babel from 'gulp-babel';
import plumber from 'gulp-plumber';
import changed from "gulp-changed";
import errorHandler from '../util/errorHandler.js';

// Config
import { paths } from "../config";

// Task
export function assets() {
  return src(paths.assets.src)
    .pipe(plumber({errorHandler}))
    .pipe(changed(paths.assets.dest))
    .pipe(dest(paths.assets.dest));
}
