var fs = require('fs');

module.exports = function(grunt) {
  grunt.initConfig({
   meta: {
      underscoreLicense: fs.readFileSync(process.cwd() + '/public/javascripts/contrib/underscore_license.txt').toString(),
    },
    min: {
      someNamespace: {
        //src: ['public/javascripts/src/someFile.js'],
        //dest: 'public/javascripts/dist/someFile.min.js'
      },
      underscore: {
        src: ['public/javascripts/contrib/underscore-min.js'],
        dest: 'public/javascripts/dist/contrib/underscore.min.js'
      }
    },
    concat: {
      dist: {
        src: [//'public/javascripts/dist/someFile.min.js',
          '<banner:meta.underscoreLicense>',
          'public/javascripts/dist/contrib/underscore.min.js'],
        dest: 'public/javascripts/dist/built.js'
      }
    }
  });
}
