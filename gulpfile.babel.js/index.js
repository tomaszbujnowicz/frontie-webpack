/*
 * @title gulpfile.babel.js
 * @description A directory file loader to include all the gulp tasks
 */

// Dependencies
import gulp from 'gulp';
import { series, parallel } from 'gulp';

// Tasks
import { reload, serve } from './tasks/server';
import { clean } from './tasks/clean';
import { styles } from './tasks/styles';
import { scripts } from './tasks/scripts';
import { templates } from './tasks/templates';
import { images } from './tasks/images';
import { fonts } from './tasks/fonts';
import { copy } from './tasks/copy';
import { publish } from './tasks/deploy';

// Config
import { paths } from './config';

// Gulp Tasks
function watchFiles() {
  gulp.watch(paths.styles.watch, styles);
  gulp.watch(paths.scripts.watch, series(scripts, reload));
  gulp.watch(paths.templates.watch, series(templates, reload));
  gulp.watch(paths.images.src, series(images, reload));
  gulp.watch(paths.fonts.src, series(fonts, reload));
}

export const build = series(
  clean,
  parallel(styles, scripts, templates, images, fonts, copy)
);

export const dev = series(
  build,
  serve,
  watchFiles
);

export const deploy = series(
  build,
  publish
);

export default dev;
