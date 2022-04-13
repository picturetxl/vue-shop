const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  //* 关闭ESlint的提示报错
  lintOnSave: false,
});
