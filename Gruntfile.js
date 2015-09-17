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
      html: ['dist/**/*.html'],
      css: ['dist/**/*.css'],
      js: ['dist/**/*.js'],
      options: {
        dirs: ['dist'],
        assetsDirs: ['public']
      }
    },

    // Package all the html partials into a single javascript payload
    ngtemplates: {
      options: {
        // This should be the name of your apps angular module
        module: 'turingWeb',
        htmlmin: {
          collapseBooleanAttributes: true,
          collapseWhitespace: true,
          removeAttributeQuotes: true,
          removeEmptyAttributes: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        },
        usemin: 'public/app/app.modules.js'
      },
      main: {
        cwd: 'public',
        src: ['public/app/**/*.html'],
        dest: '.tmp/templates.js'
      },
      tmp: {
        cwd: '.tmp',
        src: ['public/app/**/*.html'],
        dest: '.tmp/tmp-templates.js'
      }
    },

    // Copy files into the distribution folder
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'public',
          dest: 'dist',
          src: [
            'assets/images/*',
          ]
        },{
          expand: true,
          dot: true,
          cwd: 'views',
          dest: 'dist',
          src: [
            'index.html'
          ]
        }]
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

  // angular templates
  grunt.loadNpmTasks('grunt-angular-templates');

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
    'copy',
    'useminPrepare',
    'ngtemplates',
    'concat:generated',
    'cssmin:generated',
    'uglify:generated',
    'usemin'
  ]);

};