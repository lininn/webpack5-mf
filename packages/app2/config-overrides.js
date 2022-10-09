const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
} = require("customize-cra");
const { ModuleFederationPlugin } = require("webpack").container;
const path = require("path");

module.exports = override(
  (config) => {
    config.output.publicPath = "http://localhost:3001/";
    return config;
  },
  addWebpackPlugin(
    new ModuleFederationPlugin({
      name: "app2",
      filename: "remoteEntry.js",
      exposes: {
        "./button": "./src/button/index.jsx",
      },
    })
  )
);
