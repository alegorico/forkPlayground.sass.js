module.exports = {
  fonts: {
    expand: true,
    cwd: 'source/fonts',
    src: '**',
    dest: 'dist/source/fonts'
  },
  sassjs: {
    expand: true,
    cwd: 'node_modules/sass.js/dist/',
    src: '**',
    dest: 'dist/source/js/sass.js'
  },
  ace: {
    expand: true,
    cwd: 'node_modules/ace-builds/src-min/',
    src: '**',
    dest: 'dist/source/js/ace'
  },
  assets: {
	  expand: true,
	  src: '**',
	  dest: 'dist/source',
	  cwd: 'assets'
  }
};
