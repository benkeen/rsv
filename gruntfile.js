module.exports = function(grunt) {
  "use strict";

  // load what we need
  grunt.loadNpmTasks('grunt-contrib-uglify');

  var config = {
    uglify: {
      all: {
        files: {
          'standalone/rsv.min.js': 'standalone/rsv.js',
          'jquery/jquery.rsv.min.js': 'jquery/jquery.rsv.js',
          'prototype/prototype.rsv.min.js': 'prototype/prototype.rsv.js'
        },
        options: {
          report: "min",
          compress: true
        }
      }
    }
  };

  grunt.initConfig(config);
  grunt.registerTask('default', ['uglify']);
};
