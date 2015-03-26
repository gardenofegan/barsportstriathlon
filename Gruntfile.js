module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Process SASS files to CSS
    sass: {
      dev: {
        options: {
          style: 'expanded',
          loadPath: ['bower_components/foundation/scss']
        },
        files: {
          'assets/css/<%= pkg.name %>.css': 'assets/scss/<%= pkg.name %>.scss'
        }
      }
    },

    // Copy and move files
    copy: {
      init: {
        files: [
          // TODO : does it make sense to pull these from each of their own bower components area?
          {expand: true, src: ['bower_components/foundation/js/vendor/*'], dest: 'assets/js/vendor/', flatten: true},
          {expand: true, src: 'bower_components/foundation/js/foundation.min.js', dest: 'assets/js/vendor', flatten: true}
        ],
      },
    },

    // Minify JS files
    uglify: {
      dist: {
        options: {
          sourceMap: true,
          compress: {
            drop_console: true
          }
        },
        files: [{
          expand: true,
          cwd: 'assets/js/',
          src: '**/*.js',
          dest: 'assets/js/build'
        }]
      }
    },

    // Remove unused CSS
    uncss: {
      dist: {
        options: {
          ignore       : [],
          stylesheets  : ['assets/css/<%= pkg.name %>.css'],
          ignoreSheets : [],
          urls         : [],
        },
        files: {
          'assets/css/<%= pkg.name %>.clean.css': ['app/views/**/*.php']
        }
      }
    },

    // Add appropriate vendor prefixes
    autoprefixer: {
      options: {
        browsers: [
          'last 3 version'
        ]
      },
      build: {
        src: 'assets/css/<%= pkg.name %>.clean.css',
      }
    },

    // Minify CSS files
    cssmin: {
      dist: {
        build: {
          options: {
            shorthandCompacting: false,
            roundingPrecision: -1
          },
          target: {
            files: {
              'dist/assets/css/build/<%= pkg.name %>.min.css': ['assets/css/<%= pkg.name %>.css']
            }
          }
        },
      }
    },

    // Concatenate js files
    concat: {
      dist: {
        src: ['assets/js/build/*.min.js'],
        dest: 'dist/js/<%= pkg.name %>.min.js',
      }
    },

    // Image optimization
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/img/',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: 'dist/img'
        }]
      }
    },

    // Watches files for changes and runs appropriate tasks
    watch: {
      sass: {
        files: ['assets/scss/*.scss'],
        tasks: ['newer:sass:dev'],
        options: {
          spawn: false 
        }
      },
      gruntfile: {
        files: [ 'Gruntfile.js' ],
        options: {
          reload: true
        }
      }
    },

    php: {
      dist: {
        options: {
            hostname: '127.0.0.1',
            port: 8000,
            base: './', // Project root 
            keepalive: false,
            open: false
        }
      }
    },

    // Injects changes from files into browser
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            'assets/css/*.css',
            'assets/js/**.*js',
            'assets/img/*.png',
            'assets/img/*.jpg',
            'index.php',
            'app/views/**/*.php'
          ]
        },
        options: {
          proxy: '<%= php.dist.options.hostname %>:<%= php.dist.options.port %>',
          watchTask: true
        }
      }
    },

    jshint: {
      dev: ['assets/js/**/*.js'],
      before_dist: ['assets/js/**/*.js'],
      after_dist: ['dist/assets/js/<%= pkg.name %>.min.js']
    }

    
  });

  //Load tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-php');


  //loaded, but unimplemented
  // need to setup to clean out temp files and directories after builds and dist
  grunt.loadNpmTasks('grunt-contrib-clean');


  // Default task(s).
  grunt.registerTask('default', ['copy:init', 'sass:dev', 'php', 'browserSync', 'watch']);

  // TODO : need to flesh out the dist task
  grunt.registerTask('dist', ['copy:init', 'sass:dev', 'browserSync', 'watch']);

};