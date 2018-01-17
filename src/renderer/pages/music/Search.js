/**
 * Created by lz on 2017/11/22.
 */
import FetchBase from './FetchBase';
const fs = require('fs');
import $ from 'jquery';

/**
 * 获取分类列表
 */
class GetCat extends FetchBase{
    constructor(url, delay){
        super(url, delay);
        this.callback = null;
    }

    parserDom(html){
        var list = [];
        const dom = $(html);
        dom.find('#m-search .srchsongst .item').each(function (idx, item) {
            if(!$(item).hasClass('js-dis')) {
                var obj = {};
                let node = $(item).find('.w0 a');
                obj.href = node.attr('href');
                obj.name = node.find('b').attr('title');
                obj.songer = $(item).find('.w1').text();
                list.push(obj);
            }
        });
        console.log('get list len: ' + list.length);
        this.callback && this.callback(list);
    }

    addListenCallback(func) {
        this.callback = func;
    }
}
export default GetCat; 
//
// var g = new GetCat('http://music.163.com/#/search/m/?s=', 2000);
