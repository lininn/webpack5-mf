const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "http://localhost:3001", //后台服务器地址
      changeOrigin: true,
      pathRewrite: {
        "^/api": "",
      },
    })
  );
};
