/* import gulp from "gulp";
import ws from "gulp-webserver";
import sass from "gulp-sass";
import autoprefixer from "gulp-autoprefixer";

sass.compiler = require('node-sass');

const routes = {
    scss: {
        watch: "", 
        src: "scss/mars.scss",
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


const watch = () => 
    gulp.watch(routes.scss.watch, styles);


const autoPre = () => {
 return(
    gulp.src(routes.scss.src)
    .pipe(sass({
        outpustStyle: 'expanded'
    })).on('error', sass.logError)
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest(routes.scss.dest))
  );
}

const assets = gulp.series([styles]);

const live = gulp.parallel([webserver,watch]);

exports.autoPre = autoPre;
export const dev = gulp.series([assets, live]);  */