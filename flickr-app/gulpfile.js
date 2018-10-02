var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    autoprefixer    = require('autoprefixer'),
    postcss         = require('gulp-postcss'),
    iconfont        = require('gulp-iconfont'),
    iconfontCss     = require('gulp-iconfont-css');

gulp.task('scss', function() {
    var processors = [
        autoprefixer({
            browsers: ['last 3 versions', 'ios >=7']
        })
    ];

    return gulp.src('static/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss(processors))
        .pipe(gulp.dest('static/css/'))
});

gulp.task('iconfont', function() {
    return gulp.src(['src/svg/*.svg'])
        .pipe(iconfontCss({
            fontName: 'svgicons',
            cssClass: 'font',
            path: 'static/conf/icon-font.scss',
            targetPath: '../scss/_icon-font.scss',
            fontPath: '../fonts/'
        }))
        .pipe(iconfont({
            fontName: 'svgicons',
            prependUnicode: false,
            formats: ['ttf', 'eot', 'woff'],
            normalize: true,
            centerHorizontally: true
        }))
        .on('glyphs', function(glyphs, options) {
            console.log(glyphs, options);
        })
        .pipe(gulp.dest('./static/fonts/'));
});

gulp.task('watch', function() {
    gulp.watch('static/scss/**/*.scss', ['scss']);
});