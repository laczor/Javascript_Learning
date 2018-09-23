// Importing the dependecies
var ts = require("gulp-typescript");
var gulp = require("gulp");

//Will tell gulp, where is the tsconfig file is located, based on which project can be created
var tsProject = ts.createProject("tsconfig.json");

gulp.task("typescript", function() {
    return tsProject.src()
        .pipe(ts(tsProject))   // compile all fo the ts file, taking into consideration the tsconfig file
        .pipe(gulp.dest(""));  // outputPatk
});

// Will watch any typescript files for changes
gulp.task("watch", function() {
    gulp.watch("*.ts", ["typescript"]);
});

//default task, when running gulp, run watch mode!
gulp.task("default", ["watch"]);
