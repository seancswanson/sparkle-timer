module.exports = function(grunt) {
  var _ = grunt.util._;

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-mocha-test');

  var buildRoot = 'public/build';

  // ----------
  var gruntConfig = {
    clean: {
      build: [buildRoot]
    },
    uglify: {
      build: {
        src: [
          'js/app.js',
          'common/*.js',
          'js/*.js'
        ],
        dest: 'public/build/app.min.js'
      }
    },
    concat: {
      build: {
        src: [
          // 'lib/jquery-3.1.1.min.js',
          // 'lib/*.js'
        ],
        dest: 'public/build/lib.js'
      }
    },
    connect: {
      server: {
        options: {
          port: 8017,
          base: 'public'
        }
      }
    },
    less: {
      build: {
        src: [
          // 'lib/normalize.css',
          // 'lib/font-awesome.css',
          'style/app.less'
        ],
        dest: 'public/build/app.css'
      }
    },
    mochaTest: {
      specs: {
        options: {
          ui: 'bdd',
          reporter: 'spec',
          require: './test/helpers'
        },
        src: ['test/**/*_test.js']
      }
    },
    watch: {
      files: [
        'Gruntfile.js',
        'js/**',
        'style/**',
        'lib/**',
        'views/**',
        'content/**'
      ],
      tasks: 'build'
    }
  };

  grunt.initConfig(gruntConfig);

  // ----------
  grunt.registerTask('copy:build', function() {

  });

  // ----------
  grunt.registerTask('build', [
    'clean', 'uglify', 'concat', 'less', 'copy:build'
  ]);

  // ----------
  grunt.registerTask('dev', [
    'build', 'watch'
  ]);

};
