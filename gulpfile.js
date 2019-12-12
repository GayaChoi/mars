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


var base = '../gulp'
    scss = base + '/scss',      
    styleWatchFiles = scss + '**/*.scss';
    

var cssSRC = [
    base + '/app/Assets/common/common.css',  
    base + '/app/css/mars.css',
    base + '/app/css/mars.min.css',
    base + '/app/css/page/buttons.css',
    base + '/app/css/page/buttons.min.css',
    base + '/app/css/page/forms.css',
    base + '/app/css/page/forms.min.css',
    base + '/app/css/page/index.css',
    base + '/app/css/page/index.min.css',
    base + '/app/css/page/modal.css',
    base + '/app/css/page/modeal.min.css',
    base + '/app/css/page/page-r.css',
    base + '/app/css/page/preview.css',
    base + '/app/css/page/preview.min.css'
];    
 

function css() {
   return gulp.src([scss + '/page' + '/index.scss'])
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
  .pipe(concat('index.min.css'))
  .pipe(clanCSS())
  .pipe(sourcemaps.write('./maps/'))
  .pipe(lineec())
  .pipe(gulp.dest(scss));
}

function watch() { 
   browserSync.init({
      open: 'external',
      proxy: 'http://localhost/',
      port: 5500,   
   });
   gulp.watch(styleWatchFiles, gulp.series([css, concatCSS]));
   gulp.watch([scss + 'mars.min.css']).on('change', browserSync.reload);
} 

exports.css = css;
exports.concatCSS = concatCSS;

var build = gulp.parallel(watch);
gulp.task('default',build);

