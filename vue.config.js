const path = require('path');
const pkg = require("./package.json");
const { JX3BOX, SEO } = require("@jx3box/jx3box-common");
const Setting = require("./setting.json");

module.exports = {

    //❤️ define path for static files ~
    publicPath:
        //FOR Localhost => development
        (process.env.NODE_ENV === 'development' && '/') ||

        //BY jsdelivr
        (process.env.STATIC_PATH === "jsdelivr" && `${JX3BOX.__staticPath["jsdelivr"]}${pkg.name}@gh-pages/`) || 

        //BY OSS=>CDN
        (process.env.STATIC_PATH === "mirror" && `${JX3BOX.__staticPath["mirror"]}${pkg.name}/`) ||

        //BY relative path
        (process.env.STATIC_PATH === "repo" && `/${pkg.name}/`) || 

        //BY root path or bind a domain
        (process.env.STATIC_PATH == 'root' && '/') || 

        //for lost
        '/',

    chainWebpack: config => {

        //💘 html-webpack-plugin ~
        config.plugin("html").tap(args => {
            args[0].meta = {                            //------设置SEO信息
                Keywords: Setting.keys,
                Description: Setting.desc
            };
            args[0].title = Setting.title + SEO.title;  //------自动添加标题后缀
            return args;
        });


        //💝 in-line small imgs ~
        config.module
            .rule("images")
            .use("url-loader")
            .loader("url-loader")
            .tap(options => Object.assign(options, { limit: 10240 }));


        //💝 in-line svg imgs ~
        config.module
			.rule("vue")
			.use("vue-svg-inline-loader")
            .loader("vue-svg-inline-loader")


        //💖 import common less var * mixin ~
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
        function addStyleResource (rule) {
            rule.use('style-resource')
              .loader('style-resources-loader')
              .options({
                patterns: [
                    path.resolve(__dirname, './src/assets/css/var.less'),
                    path.resolve(__dirname, './node_modules/csslab/base.less')
                ],
            })
        }



    }
};
