module.exports = function (grunt) {
  require('time-grunt')(grunt);

  // Load Grunt tasks declared in the package.json file
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  // Configure Grunt
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    connect: {
      all: {
        options: {
          port: 8000,
          hostname: "localhost",
          base: 'app',
          middleware: function (connect, options) {
            return [
              require('grunt-contrib-livereload/lib/utils').livereloadSnippet,
              connect.static(options.base),
              connect().use('/bower_components', connect.static('./bower_components')),
              connect().use('/app/styles', connect.static('./app/styles'))
            ];
          }
        }
      }
    },
    // grunt-open will open your browser at the project's URL
    open: {
      dev: {
        path: 'http://<%= connect.all.options.hostname%>:<%= connect.all.options.port%>'
      }
    },
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: [
          'app/**/*.js',
          'app/index.html',
          'app/**/*.html'
        ],
        tasks: ['injector'],
        options: {
          spawn: false
        }
      },
      sass: {
        files: 'app/sass/**/*.scss',
        tasks: ['sass']
      }
    },
    sass: {
      options: {
        style: 'compressed',
        sourcemap: 'none'
      },
      dist: {
        files: {
          'app/styles/app.css': 'app/sass/app.scss'
        }
      }
    },
    wiredep: {
      task: {
        src: [
          'app/index.html',
          'app/sass/app.scss'
        ],
        ignorePath: /\.\.\//
      }
    },
    injector: {
      options: {
        sort: function (a, b) {
          var module = /\.module\.js$/;
          var aMod = module.test(a);
          var bMod = module.test(b);
          // inject *.module.js first
          // sorts modules by length to have the
          // main module as latest in order of all modules
          var direction = 0;
          if (aMod === bMod && !bMod) {
            direction = ((b.length - a.length) > 0) ? 1 : -1;
          } else if (aMod === bMod) {
            direction = ((b.length - a.length) > 0) ? 1 : -1;
          } else {
            direction = (aMod ? -1 : 1);
          }
          return direction;
        },
        ignorePath: 'app/'
      },
      dependencies: {
        files: {
          'app/index.html': ['app/**/*.module.js', 'app/**/*.js', '!app/**/*.min.js', '!app/**/*.spec.js']
        }
      }
    }
  });

  grunt.registerTask('dev', [
    'wiredep',
    'injector',
    'sass',
    'connect',
    'open:dev',
    'watch'
  ]);

};
