module.exports = {
  publicPath: "./",
  devServer: {
    open: true,
    proxy: {
      "/gateway": {
        target: 'http://localhost:8848/', // 本地后端地址
        // target: "http://101.132.181.9:3000/", // 线上后端地址
        changeOrigin: true, //允许跨域
        pathRewrite: {
          "^/gateway": "",
        },
      },
    },
  },
};
