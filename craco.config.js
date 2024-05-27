const path = require('path');
const fs = require('fs');

const srcPath = path.resolve(__dirname, 'src');
const folders = fs.readdirSync(srcPath).filter(file => fs.statSync(path.join(srcPath, file)).isDirectory());

const alias = folders.reduce((acc, folder) => {
  acc[`@${folder}`] = path.resolve(__dirname, 'src', folder);
  return acc;
}, {});

const {
  loaderByName,
  getLoader
} = require("@craco/craco");
const transformBabelLoader = require('./transformBabelLoader');

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const lm = getLoader(webpackConfig, loaderByName('babel-loader'));
      const loader = lm.match.loader;
      webpackConfig.module.rules[1].oneOf[1] = transformBabelLoader(loader);
      return webpackConfig;
    },
    alias
  },
  jest: {
    configure: jestConfig => {
      jestConfig.transform['^.+\\.(js|jsx|ts|tsx)$'] = require.resolve(
        './babelTransform.js',
      )
      return jestConfig
    }
  }
}