const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addWebpackPlugin,
} = require("customize-cra");
const path = require("path");
const { ModuleFederationPlugin } = require("webpack").container;
module.exports = override(
  addWebpackPlugin(
    new ModuleFederationPlugin({
      name: "app1",
      remotes: {
        app2: "app2",
      },
    })
  )
);
