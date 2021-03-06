var gulp = require('gulp'),
	imagemin = require('gulp-imagemin'),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    htmlReplace = require('gulp-html-replace'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    cssmin = require('gulp-cssmin');

gulp.task('default', ['copy'], function() {
     gulp.start('build-img', 'usemin');
 });

//Cria uma copia da pasta SRC
gulp.task('copy', ['clean'], function() {
     return gulp.src('src/**/*')
     .pipe(gulp.dest('dist'));
});

//Apaga a pasta dist
 gulp.task('clean', function() {
   	 return gulp.src('dist')
     .pipe(clean());
   
 });

// Otimização de imagens - Dependencia Copy para geração de otimização e copia para a distribuição
gulp.task('build-img', function() {
		gulp.src('dist/img/**/*')
		.pipe(imagemin())
	    .pipe(gulp.dest('dist/img'));
});

gulp.task('usemin', function(){
gulp.src('dist/**/*.html')
.pipe(usemin({
	'js' : [uglify],
	'css' : [cssmin]
}))
.pipe(gulp.dest('dist'));

});

