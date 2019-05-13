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
import { assets } from './assets';
import { copy } from './copy';

// Config
import { paths } from "../config";

function watchFiles() {
  gulp.watch([paths.styles.watch, paths.styles.modules], styles);
  gulp.watch([paths.scripts.watch, paths.scripts.modules], series(scripts, reload));
  gulp.watch([paths.templates.watch, paths.templates.modules], series(templates, reload));
  gulp.watch(paths.assets.src, series(assets, reload));
  gulp.watch(paths.copy.src, series(copy, reload));
}

export const watch = series(
  serve,
  watchFiles
);
