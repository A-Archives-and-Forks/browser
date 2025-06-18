// 浏览器
import _Safari from './browser/Safari.js';
import _Chrome from './browser/Chrome.js';
import _Edge from './browser/Edge.js';
import _IE from './browser/IE.js';
import _Firefox from './browser/Firefox.js';
import _Firefox_Focus from './browser/Firefox Focus.js';
import _Chromium from './browser/Chromium.js';
import _Opera from './browser/Opera.js';
import _Opera_GX from './browser/Opera GX.js';
import _Vivaldi from './browser/Vivaldi.js';
import _Yandex from './browser/Yandex.js';
import _Brave from './browser/Brave.js';
import _Arora from './browser/Arora.js';
import _Lunascape from './browser/Lunascape.js';
import _QupZilla from './browser/QupZilla.js';
import _Coc_Coc from './browser/Coc Coc.js';
import _Kindle from './browser/Kindle.js';
import _Iceweasel from './browser/Iceweasel.js';
import _Konqueror from './browser/Konqueror.js';
import _SeaMonkey from './browser/SeaMonkey.js';
import _Epiphany from './browser/Epiphany.js';
import _360 from './browser/360.js';
import _360SE from './browser/360SE.js';
import _360EE from './browser/360EE.js';
import _360AI from './browser/360AI.js';
import _360AI_macOS from './browser/360AI_macOS.js';
import _360EE_macOS from './browser/360EE_macOS.js';
import _360ENT from './browser/360ENT.js';
import _UC from './browser/UC.js';
import _QQBrowser from './browser/QQBrowser.js';
import _BaiduBrowser from './browser/BaiduBrowser.js';
import _Maxthon from './browser/Maxthon.js';
import _Sogou from './browser/Sogou.js';
import _Liebao from './browser/Liebao.js';
import _2345Browser from './browser/2345Browser.js';
import _115Browser from './browser/115Browser.js';
import _TheWorld from './browser/TheWorld.js';
import _Quark from './browser/Quark.js';
import _Qiyu from './browser/Qiyu.js';

// 厂商品牌
import _HONOR from './brand/HONOR.js';
import _Huawei from './brand/Huawei.js';
import _OPPO from './brand/OPPO.js';
import _Vivo from './brand/Vivo.js';
import _Xiaomi from './brand/Xiaomi.js';
import _Meizu from './brand/Meizu.js';
import _OnePlus from './brand/OnePlus.js';
import _Samsung from './brand/Samsung.js';
import _Lenovo from './brand/Lenovo.js';

// APP
import _QQ from './app/QQ.js';
import _Baidu from './app/Baidu.js';
import _Wechat from './app/Wechat.js';
import _WechatWork from './app/WechatWork.js';
import _Taobao from './app/Taobao.js';
import _Alipay from './app/Alipay.js';
import _Weibo from './app/Weibo.js';
import _Douban from './app/Douban.js';
import _Toutiao from './app/Toutiao.js';
import _Suning from './app/Suning.js';
import _iQIYI from './app/iQIYI.js';
import _DingTalk from './app/DingTalk.js';
import _Douyin from './app/Douyin.js';
import _Facebook from './app/Facebook.js';
import _WhatsApp from './app/WhatsApp.js';
import _Line from './app/Line.js';

// 蜘蛛
import _Twitterbot from './robot/Twitterbot.js';
import _TelegramBot from './robot/TelegramBot.js';
import _Googlebot from './robot/Googlebot.js';
import _Baiduspider from './robot/Baiduspider.js';
import _Sogouspider from './robot/Sogouspider.js';
import _Bingbot from './robot/Bingbot.js';
import _360Spider from './robot/360Spider.js';
import _Bytespider from './robot/Bytespider.js';
import _YisouSpider from './robot/YisouSpider.js';
import _YodaoBot from './robot/YodaoBot.js';
import _YandexBot from './robot/YandexBot.js';
import _Yahoo from './robot/Yahoo.js';
import _ChatGPT from './robot/ChatGPT.js';
import _Headless from './robot/Headless.js';

// 渲染引擎
import _WebKit from './engine/WebKit.js';
import _Trident from './engine/Trident.js';
import _Gecko from './engine/Gecko.js';
import _Servo from './engine/Servo.js';
import _Presto from './engine/Presto.js';
import _KHTML from './engine/KHTML.js';

// 环境
import globalThis from './runtime/globalThis.js';
import userAgent from './runtime/userAgent.js';

let browserList = [].concat(
    [_Safari, _Chrome, _Edge, _IE, _Firefox, _Firefox_Focus, _Chromium, _Opera, _Opera_GX, _Vivaldi, _Yandex, _Brave, _Arora, _Lunascape, _QupZilla, _Coc_Coc, _Kindle, _Iceweasel, _Konqueror, _SeaMonkey, _Epiphany, _360, _360EE, _360SE, _360EE_macOS, _360AI, _360AI_macOS, _360ENT, _UC, _QQBrowser, _BaiduBrowser, _Maxthon, _Sogou, _Liebao, _2345Browser, _115Browser, _TheWorld, _Quark, _Qiyu],
    [_HONOR, _Huawei, _OPPO, _Vivo, _Xiaomi, _Meizu, _OnePlus, _Samsung, _Lenovo],
    [_QQ, _Baidu, _Wechat, _WechatWork, _Taobao, _Alipay, _Weibo, _Douban, _Suning, _iQIYI, _DingTalk, _Douyin, _Toutiao, _Facebook, _WhatsApp, _Line],
    [_Twitterbot, _TelegramBot, _Googlebot, _Baiduspider, _Sogouspider, _Bingbot, _360Spider, _Bytespider, _YisouSpider, _YodaoBot, _YandexBot, _Yahoo, _ChatGPT, _Headless]
);
browserList.forEach(item=>{
    if(!item.is){
        item.is = async function(){
            return item.parse().is;
        };
    }
    if(!item.version){
        item.version = async function(){
            return item.parse().version;
        };
    }
});

let engineList = [_WebKit, _Trident, _Gecko, _Servo, _Presto, _KHTML];
engineList.forEach(item=>{
    if(!item.is){
        item.is = async function(){
            return item.parse().is;
        };
    }
});

const fixedParam = function(param){
    let {userAgent,engine,browser,browserVersion} = param;
    if(browser == 'Chrome'&&userAgent.match(/\S+Browser/)){
        browser = userAgent.match(/\S+Browser/)[0];
    }
    if(browser == 'Chrome'&&userAgent.match(/\S+Browser/)){
        browserVersion = userAgent.replace(/^.*Browser\/([\d.]+).*$/)?.[1]||'';
    }
    if(!browserVersion){
        browserVersion = userAgent.match(/Version\/([\d.]+)/)?.[1]||'';
    }
    if (_Edge.parse(userAgent).is) {
        engine = parseInt(_Edge.parse(userAgent).version)>75?'Blink':'EdgeHTML';
    } else if (_Chrome.parse(userAgent).is&&parseInt(_Chrome.parse(userAgent).version) > 27) {
        engine = 'Blink';
    }
    return {userAgent,engine,browser,browserVersion};
};

export default {
    name:'browser',
    parse(ua = userAgent){
        let browser = '';
        let browserVersion = '';
        browserList.forEach(function(item){
            if(item.parse(ua).is){
                browser = item.name;
                browserVersion = item.parse(ua).version;
            }
        });
        let engine = '';
        engineList.forEach(function(item){
            if(item.parse(ua).is){
                engine = item.name;
            }
        });

        // 修正
        ({engine,browser,browserVersion} = fixedParam({userAgent:ua,engine,browser,browserVersion}));

        let isWebview = ua.includes('; wv)');
        let isRobot = ['Googlebot', 'Baiduspider', 'Sogouspider', 'Bingbot', '360Spider', 'Bytespider', 'YandexBot'].includes(browser);

        return {
            browser,
            browserVersion,
            engine,
            isWebview,
            isRobot
        };
    },
    async getInfo(){
        let {
            browser,
            browserVersion,
            engine,
            isWebview,
            isRobot
        } = this.parse();
        for(let loader of browserList){
            if(await loader.is()){
                browser = loader.name;
                browserVersion = await loader.version();
            }
        }
        
        // 修正
        ({engine,browser,browserVersion} = fixedParam({userAgent,engine,browser,browserVersion}));

        let cookieEnabled = globalThis?.navigator?.cookieEnabled;

        return {
            browser,
            browserVersion,
            engine,
            isWebview,
            isRobot,
            cookieEnabled,
            userAgent
        };
    }
}