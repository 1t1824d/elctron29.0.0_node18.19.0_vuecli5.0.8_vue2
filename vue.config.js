const { defineConfig } = require('@vue/cli-service')
const path = require("path");
console.log(`path.join(__dirname,'preload.js')`, path.join(__dirname,'preload.js'));
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: './',
  pluginOptions: {
    electronBuilder: {
      removeElectronJunk: false,
      preload: './src/preload/preload.js',
      builderOptions: {
        "appId": "voloday_test",
        "productName": "voloday_test",//项目名，也是生成的安装文件名，即.exe
        "copyright": "Copyright © 2024",//版权信息
        "win": {//win相关配置
         // "icon": "./src/assets/icon.ico",//图标，当前图标在根目录下
          "target": [
            {
              "target": "nsis",//利用nsis制作安装程序
              "arch": [
                "x64",//64位
              ]
            }
          ]
        },
        "nsis": {
          "oneClick": false, // 是否一键安装
          "allowElevation": true, // 允许请求提升。 如果为false，则用户必须使用提升的权限重新启动安装程序。
          "allowToChangeInstallationDirectory": true, // 允许修改安装目录
          // "installerIcon": "./src/assets/icon.ico",// 安装图标
          // "uninstallerIcon": "./src/assets/icon.ico",//卸载图标
          // "installerHeaderIcon": "./src/assets/icon.ico", // 安装时头部图标
          "createDesktopShortcut": true, // 创建桌面图标
          "createStartMenuShortcut": true,// 创建开始菜单图标
          "shortcutName": "voloday_test", // 图标名称
        },
      }
    },
  },

})


