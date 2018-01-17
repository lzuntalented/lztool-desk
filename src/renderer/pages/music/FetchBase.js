/**
 * Created by lz on 2017/11/22.
 */

const phantom = require('phantom');
const { JSDOM } = require("jsdom");
const fs = require('fs');
// const $ = require('jquery')(window);
// import $ from 'jquery';
/**
 */
class FetchBase{
    constructor(url, timeDelay = 1000){
        // 地址
        this.url = url;
        this.timeDelay = timeDelay;
        // 计时器句柄
        this.timeHandler = null;
        // 资源请求id集合
        this.requestArr = [];
        // 资源请求返回id集合
        this.receiveArr = [];
    }

    /**
     * 初始化变量
     */
    initVar(){
        this.clearTimeout();
        // 资源请求id集合
        this.requestArr = [];
        // 资源请求返回id集合
        this.receiveArr = [];
    }

    /**
     * 清理定时器
     */
    clearTimeout(){
        this.timeHandler && clearTimeout(this.timeHandler);
    }

    /**
     * 销毁浏览器实例
     */
    destroyPage(){
        this.instance.exit();
    }

    parserDom($){

    }

    /**
     * 页面加载完成之后执行
     * @returns {Promise.<void>}
     */
    async doAfterPageLoaded(){
        let page = this.page;
        console.log('get list from ' + this.url);
        // 返回加载完成后的dom结构
        let html = await page.evaluate(function() {
            return window.g_iframe.contentWindow.document.all[0].outerHTML;
        });
        // 本地解析dom
        // const { win } = new JSDOM(html);
        // const $ = require('jquery')(win);
        // // const dom = $(html);

        this.parserDom(html);
    }

    /**
     * 开启定时器
     */
    startTimer() {
        this.timeHandler && clearTimeout(this.timeHandler);
        // 1s后检查请求的资源数和返回的资源数是否相等 相等表示页面加载完成
        this.timeHandler = setTimeout(() => {
            if(this.receiveArr.length >= this.requestArr.length){
                this.doAfterPageLoaded();
            }
        }, this.timeDelay);
    }

    /**
     * 创建浏览器页面
     * @returns {Promise.<void>}
     */
    async createPage(){
        const instance = await phantom.create(['--load-images=no']);
        const page = await instance.createPage();
        // page.setting('localToRemoteUrlAccessEnabled', true);

        // page.settings.loadImages = false;
        // page.settings.XSSAuditingEnabled = true;

        // 监听资源请求和返回
        page.on('onResourceRequested', this.onResourceRequested.bind(this));
        page.on('onResourceReceived', this.onResourceReceived.bind(this));

        page.open(this.url);
        page.property('content');

        this.page = page;
        this.instance = instance;
        // return page;
    }

    /**
     * 资源请求后回调
     * @param requestData
     */
    onResourceRequested(requestData) {
        typeof this.requestBeforeCB === 'function' && this.requestBeforeCB(requestData);
        // 过滤掉图片和轮询接口
        if(!(/\.(jpg|png|gif)/.test(requestData.url) || /weblog/.test(requestData.url))){
            this.requestArr.push(requestData.id);
        }
    }

    /**
     * 资源返回后回调
     * @param requestData
     */
    onResourceReceived(requestData) {
        let id = requestData.id;
        let stage = requestData.stage;

        if(stage === 'end') typeof this.receiveBeforeCB === 'function' && this.receiveBeforeCB(requestData);
        // 过滤掉图片和轮询接口
        if(!(/\.(jpg|png|gif)/.test(requestData.url) || /weblog/.test(requestData.url))){
            // 检测资源是否在请求资源队列中
            if(this.requestArr.indexOf(id) > -1){
                // 检测资源分片返回时是否结束
                if(stage === 'end'){
                    this.receiveArr.push(id);
                    // 检测返回资源数和请求资源数是否对等
                    if(this.receiveArr.length >= this.requestArr.length){
                        this.startTimer();
                    }
                }
            }
        }
    }
}
export default FetchBase;