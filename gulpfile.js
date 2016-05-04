var gulp = require('gulp');//本地安装gulp所用到的地方
var less = require('gulp-less');
var prefix = require('gulp-autoprefixer');

function handleError(err) {
    console.log(err.toString());
    this.emit('end');
}

//定义一个testLess任务（自定义任务名称）
gulp.task('less_css', function () {
    return gulp.src(['src/less/**/*.less','!src/less/reuseClass.less']) //该任务针对的文件
        .pipe(less()).on('error', handleError)
        .pipe(prefix())
        .pipe(gulp.dest('dist/css/'));
    console.log('less编译',new Date().getTime());
});

gulp.task('watch', function () {
    var watcher = gulp.watch(['src/less/**/*.less','!src/less/reuseClass.less'], ['less_css']);
    watcher.on('change', function(event) {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });
});
