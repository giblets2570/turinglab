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

      // Update dependencies if they change
      dependencies: {
        files: ['public/lib/**/*'],
        tasks: ['wiredep']
      },

      // Reload server if public files change (NOT YET WORKING)
      publicFiles: {
        files: ['public/**/*'],
        options: {
          livereload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-wiredep');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['wiredep','express','watch']);

};