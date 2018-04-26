module.exports = {
  options: {
    processors: [
      require('autoprefixer')()
    ]
  },
  dist: {
    src: 'dist/source/css/style.css',
    dest: 'dist/source/css/style.css'
  }
};
