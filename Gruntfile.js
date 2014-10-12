// npm install grunt-contrib-concat --save-dev
// npm install grunt-contrib-cssmin --save-dev
// npm install grunt-contrib-sass --save-dev
// npm install grunt-contrib-uglify --save-dev
// npm install grunt-contrib-watch --save-dev
// npm install grunt-processhtml --save-dev
// npm install grunt-contrib-compass --save-dev
// npm install grunt-contrib-imagemin --save-dev
// npm install grunt-includes --save-dev
// npm install grunt-uncss --save-dev

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    uglify: {
      build: {
        files: {
          'build/js/main.min.js': ['js/*.js']
        }
      }
    },

    // sass: {                              // Task
    //   dist: {                            // Target
    //     options: {                       // Target options
    //       style: 'compressed'
    //     },
    //     files: {                         // Dictionary of files
    //       'css/main.css': 'scss/main.scss'       // 'destination': 'source'
    //     }
    //   }
    // },

    compass: {
      dist: {
        options: {
          config: 'config.rb'
        }
      }
    },

    uncss: {
      build: {
        options: {
          ignore  : [
            '.dark-bg',
            '.scrolled',
            '.page-home .page-banner.scrolled h1:before',
            '.page-home .page-banner.scrolled h1:after',
            '.show'
          ],
          // For some reason Uncss is only ignoring the first class specified so we have to apply this hack
          // Commented out because Uncss was not adding the raw css below, used js instead
          //raw : '.page-banner.scrolled h1:before, .page-banner.scrolled h1:after {opacity:0;}',
          stylesheets  : ['css/main.css']
        },
        files: {
          'build/css/main.css': ['*.html','models/*.html']
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'build/css/main.min.css': ['build/css/main.css']
        }
      }
    },

    processhtml: {
      build: {
        files: {
          'partials/output/header.html' : ['partials/header.html'],
          'partials/output/footer.html' : ['partials/footer.html'],
        }
      }
    },

    // Uncomment for Development
    includes: {
      default: {
        cwd: 'templates',
        src: [ '*.html','models/*.html' ], // checks templates dir for html files
        dest: '.', // export to current directory
        options: {
          flatten: true,
          includePath: 'partials' // directory containing partial includes
        }
      },
      build: {
        cwd: 'templates',
        src: [ '*.html','models/*.html' ], // checks templates dir for html files
        dest: 'build/', // export to
        options: {
          flatten: true,
          includePath: 'partials/output' // directory containing partial includes
        }
      }
    },

    imagemin: {                          // Task
      dynamic: {                         // Target
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'images/',                   // Src matches are relative to this path
          src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
          dest: 'build/images'                  // Destination path prefix
        }]
      }
    },

    watch: {
      options: {
          livereload: true,
          sourcemap: true
      },
      // sass: {
      //   files:'scss/*.scss',
      //   tasks:'sass'
      // },
      compass: {
        files:'scss/*.scss',
        tasks:'compass'
      },
      includes: {
        files: ['partials/*.html','templates/*.html','templates/models/*.html'],
        tasks: 'includes:default'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-uncss');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-processhtml');
  grunt.loadNpmTasks('grunt-includes');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default tasks
  grunt.registerTask('default', ['includes:default','compass']);
  // Build tasks
  grunt.registerTask('build', ['includes:default','compass','uncss','cssmin','processhtml','includes:build','imagemin','uglify']);
};