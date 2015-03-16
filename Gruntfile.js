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
          'css/app.css': 'scss/app.scss'
        }
      }
    }
  });

  //Load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};