/*
 * @title Watch
 * @description A task to start the server and watch for changes.
 */

// Dependencies
import gulp from 'gulp';
import { series } from 'gulp';

// Tasks
import { reload, serve } from './server';
import { styles } from './styles';
import { scripts } from './scripts';
import { templates } from './templates';
import { images } from './images';
import { fonts } from './fonts';
import { copy } from './copy';

// Config
import { paths } from "../config";

function watchFiles() {
  gulp.watch([paths.styles.watch, paths.styles.modules], styles);
  gulp.watch([paths.scripts.watch, paths.scripts.modules], series(scripts, reload));
  gulp.watch([paths.templates.watch, paths.templates.modules], series(templates, reload));
  gulp.watch(paths.images.src, series(images, reload));
  gulp.watch(paths.fonts.src, series(fonts, reload));
  gulp.watch(paths.copy.src, series(copy, reload));
}

export const watch = series(
  serve,
  watchFiles
);
