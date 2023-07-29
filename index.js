const { interfaceVersion, resolve } = require('eslint-import-resolver-node');

module.exports = {
  interfaceVersion,

  resolve: (source, file, config) => resolve(
    source
      .replace(/[?#].*$/, ''),
    file,
    config
  )
};