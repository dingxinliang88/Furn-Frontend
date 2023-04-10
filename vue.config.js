const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

// 修改启动端口
module.exports = {
  devServer: {
    port: 10000,
  },
};