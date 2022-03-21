module.exports = {
    // css: {
    //     loaderOptions: {
    //         less: {
    //             // 若 less-loader 版本小于 6.0，请移除 lessOptions 这一级，直接配置选项。

    //                 modifyVars: {
    //                     // 直接覆盖变量
    //                     "tabs-line-height":"0.35rem",
    //                     "tab-font-size":"18px",
    //                     "tabs-bottom-bar-width":"0.6rem",
    //                     "nav-bar-height":"0.36rem",
    //                     "tabbar-height":"0.4rem",
    //                 },

    //         },
    //     },
    // },
    devServer:{
        proxy:{
            '/api':{
                target:"http://localhost:3000",
                changeOrigin:true, //创建虚拟服务器
                ws:true //websocket代理
            }
        }
    }
};