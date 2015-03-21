module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'expanded',
          loadPath: ['bower_components/foundation/scss']
        },
        files: {
          'assets/css/app.css': 'assets/scss/app.scss'
        }
      }
    },
    copy: {
      main: {
        files: [
          // does it make sense to pull these from each of their own bower components area?
          {expand: true, src: ['bower_components/foundation/js/vendor/*'], dest: 'assets/js/vendor/', flatten: true},
          {expand: true, src: 'bower_components/foundation/js/foundation.min.js', dest: 'assets/js/vendor', flatten: true}
        ],
      },
    }
  });

  //Load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');

  //loaded, but unimplemented
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-browser-sync');


  // Default task(s).
  grunt.registerTask('default', ['sass', 'copy']);

};