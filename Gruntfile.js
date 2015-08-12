module.exports = function(grunt) {

  grunt.initConfig({

    // Automatically inject bower dependencies into index.html
    wiredep : {
      task : {
        src: [
          'views/*.html'
          ],
        options : {
          ignorePath: '../public'
        }
      }
    },

    // Inject all asset dependencies
    injector: {
      local_dependencies: {
        files: {
          'views/index.html': [
            'public/assets/**/*.js',
            'public/assets/**/*.css',
            'public/app/**/*.js'
            ],
        }
      },
      options : {
        ignorePath: 'public'
      }
    },

    // Run a development express server 
    express: {
      dev: {
        options: {
          script: 'app.js'
        }
      }
    },

    // Watch for file changes when running server
    watch: {
      files: ['public/**/*'],
      tasks: ['wiredep','injector'],
      options: {
        livereload: true
      }
    }

  });

  // dependencies
  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-injector');

  // runner
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['wiredep','injector','express','watch']);

};