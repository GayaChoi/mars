const gulp = require('gulp'),
      autoprefixer = require('gulp-autoprefixer'),
      browserSync = require('browser-sync').create(),
      reload = browserSync.reload,
      sass = require('gulp-sass'),
      cleanCSS = require('gulp-clean-css'),
      sourcemaps = require('gulp-sourcemaps'),
      concat = require('gulp-concat'),
      imagemin = require('gulp-imagemin'),
      changed = require('gulp-changed'),
      uglify = require('gulp-uglify'),
      lineec = require('gulp-line-ending-corrector');


var scss = '../scss',      
    styleWatchFiles = scss + '**/*.scss';


var cssSRC = [
    './app/Assets/common/common.css',  
    './app/css/mars.css',
    './app/css/mars.min.css',
    './app/css/page/buttons.css',
    './app/css/page/buttons.min.css',
    './app/css/page/forms.css',
    './app/css/page/forms.min.css',
    './app/css/page/index.css',
    './app/css/page/index.min.css',
    './app/css/page/modal.css',
    './app/css/page/modeal.min.css',
    './app/css/page/page-r.css',
    './app/css/page/preview.css',
    './app/css/page/preview.min.css'
];    
 

function css() {
   return gulp.src([scss + 'mars.scss'])
   .pipe(sourcemaps.init({loadMaps: true}))
   .pipe(sass({
      outputStyle: 'expanded' 
   }).on('error', sass.logError))
   .pipe(autoprefixer('last 2 versions'))
   .pipe(sourcemaps.write())
   .pipe(lineec())
   .pipe(gulp.dest(scss));
}

function concatCSS() { 
  return gulp.src(cssSRC)
  .pipe(sourcemaps.init({loadMaps: true, largeFile: true}))
  .pipe(concat('mars.min.css'))
  .pipe(clanCSS())
  .pipe(sourcemaps.write('./maps/'))
  .pipe(lineec())
  .pipe(gulp.dest(scss));
}

function watch() { 
   browserSync.init({
      open: 'external',
      proxy: 'http://localhost',
      port: 5500,   
   });
   gulp.watch(styleWatchFiles, gulp.series([css, concatCSS]));
   gulp.watch([scss + 'mars.min.css']).on('change', browserSync.reload);
} 

exports.css = css;
exports.concatCSS = concatCSS;

var build = gulp.parallel(watch);
gulp.task('default',build);

