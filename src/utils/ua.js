export default function (){
    /**
     * UserAgent检测
     * @name ua
     * @returns {Object} 返回一个记录ua信息的对象
     *  isPC : boolean
     *  isMobile : boolean
     *  platform : 'pc' pc、ipad等各类移动端平台名称
     *  browser : 'chrome' 浏览器的名称
     *  version : 28 浏览器的版本
     *
     *  同时给html根元素添加
     *  .ua-pc / ua-mobile
     *  .ua-ipad / .ua-iphone / ... （主要用于ios下一些特殊需要）
     *  .browser-firefox / .browser-safari / ... （主要用于firefox,safari一些特殊情况）
     *  .ie-8 / ... （如果是IE浏览器，会额外有ie-版本号，用来特殊处理IE版本下的问题）
     *
     */
    var ua = window.navigator.userAgent.toLowerCase();
    var _ua = {
        isPC: true,
        isMobile: false,
        platform: "pc"
    };
    var cls = document.documentElement.className;

    //平台检测
    var mobileAgents = [
        "micromessenger",
        "android",
        "iphone",
        "symbianOS",
        "windows phone",
        "ipad",
        "ipod"
    ];
    var mobileAngntsAlias = [
        "wx",
        "android",
        "iphone",
        "symbian",
        "wp",
        "ipad",
        "ipod"
    ];
    var platformCheck = (function() {
        for (var i = 0; i < mobileAgents.length; i++) {
            if (ua.indexOf(mobileAgents[i]) > 0) {
                _ua.isPC = false;
                _ua.isMobile = true;
                _ua.platform = mobileAngntsAlias[i];
                cls += " ua-mobile ua-" + mobileAngntsAlias[i];
                document.documentElement.className = cls;
                break;
            }
        }
        if (_ua.isPC) {
            cls += " ua-" + "pc";
            document.documentElement.className = cls;
        }
    })();

    //浏览器检测
    var pcAgents =
        /(micromessenger|opr|edge|firefox)[ \/]([\w.]+)/.exec(ua) || // Wechat & Oprea & Edge & firefox
        /(chrome)[ \/]([\w.]+)/.exec(ua) || // Chrome
        /(safari)[ \/]([\w.]+)/.exec(ua) || // Safari
        /(msie) ([\w.]+)/.exec(ua) || //IE7-10
        /(trident).+rv:(\w.)+/.exec(ua) ||
        []; //IE 11
    var pcAgentsAlias = {
        micromessenger: "wx",
        opr: "oprea",
        edge: "edge",
        firefox: "firefox",
        chrome: "chrome",
        safari: "safari",
        trident: "ie",
        msie: "ie"
    };
    var browserCheck = (function() {
        var browser = pcAgents[1];
        _ua.browser = pcAgentsAlias[browser];

        var version = pcAgents[2];
        _ua.version = parseInt(version);

        cls += " browser-" + _ua.browser;
        if (_ua.browser == "ie") {
            _ua.isIE = true;
            cls += " ie-" + _ua.version;
        }
        document.documentElement.className = cls;
    })();

    window._ua = _ua

    return _ua;
}