const queryString = require('query-string');
const http = require('http');
const https = require('https');
const Url = require('url');

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
      requestParamsTable: [{key: 'add',value: 'add'}],
      requestHeaderTable: [{key: 'add',value: 'add'}],
      responseTableColumns: [
        {
          key: '',
          value: ''
        }
      ]
    }
  },
  methods: {
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if(rowIndex === this.requestParamsTable.length - 1 && columnIndex === 0) {
        return [1,3];
      }
      return [1,1]
    },
    arrayHeaderSpanMethod({ row, column, rowIndex, columnIndex }) {
      if(rowIndex === this.requestHeaderTable.length - 1 && columnIndex === 0) {
        return [1,3];
      }
      return [1,1]
    },
    renderOperateHeader(){
    },
    addParamRow(arr) {
      arr.splice(arr.length - 1, 1);
      arr.push({
        key: '',
        value: ''
      });
      arr.push({
        key: 'add',
        value: 'add'
      });
    },
    delTableRow(arr, index){
      arr.splice(index, 1);
    },
    sendRequest(){
      // console.log(this.requestParamsTable);
      // const u = 'http://www.lzuntalented.cn/sort/0?a=123&b=2';
      // this.url = u;
      const url = this.url.trim();
      if (url === '') {
        this.$message.error('请输入请求地址')
        return;
      }

      const urlObject = Url.parse(url);
      let httpHandler = http;

      var options = {
        hostname: urlObject.hostname,
        port: urlObject.port || 80,
        path: urlObject.pathname,
        method: 'GET'
      };

      // 请求参数
      let params = urlObject.query || '';

      let tmp = [];
      const pLen = this.requestParamsTable.length;
      this.requestParamsTable.forEach((it, idx) => {
        if (pLen - 1 === idx) return;
        if (it.key.trim() === '') return;
        tmp.push(it.key + '=' + it.value);
      });
      if (tmp.length > 0) {
        params += '&' + tmp.join('&');
      }

      // console.log(params);

      // https请求检测
      if (url.startsWith('https://')) {
        options.port = 443;
        httpHandler = https;
      }
      
      // post请求检测
      if (this.method === 'POST') {
        options.method = this.method;
      }
      // 开始请求
      const req = httpHandler.request(options, res => {
        // console.log(`STATUS: ${res.statusCode}`);
        // console.log(`HEADERS: ${JSON.stringify(res.headers)}`);
        let html = '';
        for (var i in res.headers) {
          html += `<p>${i}：${res.headers[i]}</p>`;
        }
        this.responseTableColumns[0].key = html;

        res.setEncoding('utf8');
        let resBody = '';
        res.on('data', (chunk) => {
          resBody += chunk;
        });
        res.on('end', () => {
          // console.log('No more data in response.')
          this.responseTableColumns[0].value = resBody;
        })
      });

      req.on('error', (e) => {
        // this.$message.error(`problem with request: ${e.message}`);
      });

      req.write(params);
      req.end();
    }
  }
}
