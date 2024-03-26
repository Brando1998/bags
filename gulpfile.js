const { series } = require('gulp');

// The `clean` function is not exported so it can be considered a private task.
// It can still be used within the `series()` composition.
function clean(cb) {
  // body omitted
  cb();
}

// The `build` function is exported so it is public and can be run with the `gulp` command.
// It can also be used within the `series()` composition.
function build(cb) {
  // body omitted
  cb();
}

exports.build = build;
exports.default = series(clean, build);

// const { src, dest, watch, parallel, series } = require("gulp");

// const sass = require('gulp-sass');
// const ejs = require("gulp-ejs");
// const rename = require("gulp-rename");
// const eslint = require("gulp-eslint");
// const mocha = require("gulp-mocha");
// const sync = require("browser-sync").create();

// // compile css
// function generateCSS(cb) {
//     src('./sass/**/*.scss')
//         .pipe(sass().on('error', sass.logError))
//         .pipe(dest('public/stylesheets'))
//         .pipe(sync.stream());
//     cb();
// }

// // generate templates
// function generateHTML(cb) {
//     src("./views/index.ejs")
//         .pipe(ejs({
//             title: "Hello Semaphore CI!",
//         }))
//         .pipe(rename({
//             extname: ".html"
//         }))
//         .pipe(dest("public"));
//     cb();
// }


// function runLinter(cb) {
//     return src(['**/*.js', '!node_modules/**'])
//         .pipe(eslint())
//         .pipe(eslint.format()) 
//         .pipe(eslint.failAfterError())
//         .on('end', function() {
//             cb();
//         });
// }

// // run tests
// function runTests(cb) {
//     return src(['**/*.test.js'])
//         .pipe(mocha())
//         .on('error', function() {
//             cb(new Error('Test failed'));
//         })
//         .on('end', function() {
//             cb();
//         });
// }

// // whatch for files changes
// function watchFiles(cb) {
//     watch('views/**.ejs', generateHTML);
//     watch('sass/**.scss', generateCSS);
//     watch([ '**/*.js', '!node_modules/**'], parallel(runLinter, runTests));
// }

// // reload on live
// function browserSync(cb) {
//     sync.init({
//         server: {
//             baseDir: "./public"
//         }
//     });

//     watch('views/**.ejs', generateHTML);
//     watch('sass/**.scss', generateCSS);
//     watch("./public/**.html").on('change', sync.reload);
// }


// exports.css = generateCSS;
// exports.html = generateHTML;
// exports.lint = runLinter;
// exports.test = runTests;
// exports.watch = watchFiles;
// exports.sync = browserSync;

// exports.default = series(runLinter,parallel(generateCSS,generateHTML),runTests);