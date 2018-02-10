const queryString = require('query-string');

export default {
  name: 'apitest-page',
  data () {
    const reqestMethods = [
      {
        value: 'GET',
        label: 'GET'
      },
      {
        value: 'POST',
        label: 'POST'
      }
    ];
    return {
      reqestMethods,
      method: 'GET',
      url: '',
      requestParamsTable: [{key:1,value:1},{key:2,value:2}],
      requestHeaderTable: []
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
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      // console.log(rowIndex, columnIndex)
      if(rowIndex === this.requestParamsTable.length - 1 && columnIndex === 0) {
        return [1,3];
      }
      return [1,1]
    },
    renderOperateHeader(){
    }
  }
}
