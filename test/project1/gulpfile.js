var gulp = require('gulp');

gulp.task('compile', function() {
	console.log('compiling project1')
});
 
gulp.task('default', [ 'compile' ]);
