module.exports = {
  transpileDependencies: ["vuetify"],
  devServer: {
    proxy: {
      "/v1": {
        target: "http://120.79.167.88:80",
        changeOrigin: true,
        pathRewrite: {
          "^/v1": "/v1"
        }
      }
    }
  }
};
