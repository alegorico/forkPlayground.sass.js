module.exports = function (grunt) {
  // require grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  var configs = require('load-grunt-configs')(grunt, {
    config: {
      src: 'tasks/*.js'
    }
  });
  grunt.initConfig(configs);

  grunt.registerTask('html', ['replace', 'htmlmin']);
  grunt.registerTask('css', ['sass', 'postcss']);
  grunt.registerTask('js', ['webpack', 'copy']);
  grunt.registerTask('clear', ['clean']);

  grunt.registerTask('build', ['clear', 'html', 'css', 'js']);
  grunt.registerTask('deploy', ['clear', 'build', 'gh-pages']);

  grunt.registerTask('default', ['build']);
  
  
}
