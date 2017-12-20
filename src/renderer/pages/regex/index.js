const queryString = require('query-string');

export default {
  name: 'regex-page',
  data () {
    const buts = [
      {
        value: '[\\u4e00-\\u9fa5]',
        label: '中文字符'
      },
      {
        value: '\\s',
        label: '空白行'
      },
      {
        value: '\\w[-\\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\\.)+[A-Za-z]{2,14}',
        label: 'Email地址'
      },
      {
        value: '^((https|http|ftp|rtsp|mms)?:\\/\\/)[^\\s]+',
        label: '网址URL'
      },
      {
        value: '0?(13|14|15|17|18|19)[0-9]{9}',
        label: '手机（国内）'
      },
      {
        value: '-?[1-9]\\d*',
        label: '匹配整数'
      },
      {
        value: '[1-9]([0-9]{5,11})',
        label: '腾讯QQ号'
      },
      {
        value: '\\d{6}',
        label: '邮政编码'
      },
      {
        value: '(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)\\.(25[0-5]|2[0-4]\\d|[0-1]\\d{2}|[1-9]?\\d)',
        label: 'IP'
      },
      {
        value: '\\d{17}[\\d|x]|\\d{15}',
        label: '身份证号'
      }
    ];
    return {
      originText: '',
      result: '',
      regex: '',
      checkList: [],
      resultLength: '',
      buts
    }
  },
  methods: {
    parse() {
      let flag = '';
      this.checkList.forEach(element => {
        if(element === '1') {
          flag += 'g';
        } else if(element === '2'){
          flag += 'i';
        }
      });
      const regexString = this.regex || '';
      const originText = this.originText || '';
      const regex = new RegExp(regexString, flag);
      this.result = originText.match(regex) || [];
      this.resultLength = '匹配' + this.result.length + '处';
    },
    setRegex(str){
      this.regex = str;
    }
  }
}
