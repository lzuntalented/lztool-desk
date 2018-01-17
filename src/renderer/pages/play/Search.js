/**
 * Created by lz on 2017/11/22.
 */
import FetchBase from './FetchBase';
import $ from 'jquery';
/**
 * 获取分类列表
 */
class getMusciInfo extends FetchBase{
    constructor(url, delay){
        super(url, delay);
        this.checkMp3 = false;
        this.musicUrl = '';
        this.callback = null;
    }

    parserDom($){
        if(!this.checkMp3){
            this.checkMp3 = true;
            this.initVar();
            this.addPlayUrl();
        } else {
            console.log(this.musicUrl);
            this.callback && this.callback(this.musicUrl);
        }
    }

    addListenCallback(func) {
        this.callback = func;
    }

    /**
     * 添加歌曲播放地址链接
     * @param obj
     * @returns {Promise.<void>}
     */
    async addPlayUrl(){
        await this.page.evaluate(function() {
            var nt = window.g_iframe.contentWindow.document.querySelectorAll('#content-operation .u-btni-addply');
            nt[0].click();
        });
        // console.log(this.musicUrl);
    }

    /**
     * 获取歌曲id
     * @returns {string|void|XML|*}
     */
    getSongId(){
        return this.url.replace(/.*id=([0-9]*)/ig, '$1');
    }

    /**
     * 资源请求时接口
     * @param requestData
     */
    requestBeforeCB(requestData){
        if(this.checkMp3){
            if(/player\/url/.test(requestData.url)){
                this.replayPlayUrl(requestData);
            }
        }
    }

    /**
     * 重构歌曲地址请求
     * @param requestData
     * @returns {Promise.<void>}
     */
    async replayPlayUrl(requestData){
        const page = await this.instance.createPage();
        await page.open(requestData.url, 'POST', requestData.postData);
        const content = await page.property('content');
        this.musicUrl = content.replace(/.*(http:\/\/.*\.mp3).*/ig,'$1');
    }
}
export default getMusciInfo;
//
// var g = new getMusciInfo('http://music.163.com/song?id=247835', 2000);
