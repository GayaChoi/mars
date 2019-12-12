import gulp from "gulp";
import ws from "gulp-webserver";
import del from "del";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";

sass.compiler = require('node-sass');

const routes = {
    scss: {
        watch: "gulp/scss/page/**/*.scss",
        src: "gulp/scss/page/index.scss",
        dest: "build/css"
    }
};

const styles = () => 
    gulp
      .src(routes.scss.src)
      .pipe(sass().on('error',sass.logError))
      .pipe(gulp.dest(routes.scss.dest));


const webserver = () => 
   gulp.src('build').pipe(ws({ liveload: true, open: true }));


const watch = () => {
     gulp.watch(routes.scss.watch, styles); 
};

const prefixer = () => 
     gulp
     .src(routes.scss.src)
     .pipe(autoprefixer({
         cascade: false 
     }))
     .pipe(gulp.dest(routes.scss.dest)); 


export const clean = () => del(["build"]);

const prepare = gulp.series([clean]);

const assets = gulp.series([styles]);

const autoPre = gulp.series([prefixer]);

const live = gulp.parallel([webserver,watch]);

export const dev = gulp.series([prepare, assets, live, autoPre]);