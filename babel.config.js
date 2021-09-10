module.exports = {
  presets: [['@babel/preset-env', { targets: { node: true } }]],
  env: {
    development: {
      sourceMap: 'inline',
      retainLines: true
    }
  }
};
