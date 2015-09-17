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
            'public/app/**/*.js',
            'public/app/**/*.css'
            ],
        }
      },
      options : {
        ignorePath: 'public'
      }
    },

    // minify the project
    useminPrepare: {
      html: 'views/index.html',
      options: {
          root: 'public',
          dest: 'dist'
      }
    },
    usemin: {
      html: ['public/dist/**/*.html'],
      css: ['public/dist/**/*.css'],
      js: ['public/dist/**/*.js'],
      options: {
        dirs: ['dist'],
        assetsDirs: ['public']
      }
    },

    // Copy files into the distribution folder
    copy: {
      dist: {
        expand: true,
        dot: true,
        cwd: 'public',
        dest: 'public/dist',
        src: [
          'assets/images/*',
          'index.html'
        ]
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

  // minification
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-filerev');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // runner
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('serve', ['wiredep','injector','express','watch']);
  grunt.registerTask('build', [
    'useminPrepare',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'copy',
    'usemin'
  ]);

};