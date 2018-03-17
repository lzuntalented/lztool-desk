const request = require('request');
const crypto = require('crypto.js');

export default {
  name: 'fanyi-page',
  data () {
    return {
      originText: 'copy that',
      result: '',
      baseUrl: 'http://fanyi.youdao.com/',
      fanyiUrl: 'http://fanyi.youdao.com/translate_o?smartresult=dict&smartresult=rule',
      requsetHandler: null,
    }
  },
  created() {
    this.requsetHandler = request.defaults({jar: true})
    this.requsetHandler(this.baseUrl, function (err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
    });
  },
  methods: {
    decrypt(e){
      if (this.originText.trim() === '') {
        this.result = '';
        return;
      }

      const options = {
        method: 'POST',
        url: this.fanyiUrl,
        form: this.createParams(),
        headers: this.createHeader(),
        gzip: true
      };
      this.requsetHandler(options, (err, httpResponse, body) => {
        if (err) {
            return console.error('upload failed:', err);
        }
        const res = JSON.parse(body);
        console.log(res);
        if (res && res.errorCode === 0) {
          this.result = res['translateResult'][0][0]['tgt'];
        } else {
          this.$message.error('未找到翻译内容');
        }
      });
    },
    createParams() {
      const time = new Date().getTime();
      const client = 'fanyideskweb';
      const origin = this.originText;
      const D = "ebSeFb%=XZ%T[KZ)c(sy!";
      const sign = crypto.md5(client + origin + time + D);
      const data = {
        i: origin,
        from: 'AUTO',
        to: 'AUTO',
        smartresult: 'dict',
        client,
        salt: time,
        sign,
        doctype: 'json',
        version: '2.1',
        keyfrom: 'fanyi.web',
        action: 'FY_BY_REALTIME',
        typoResult: false
      }
      return data;
    },
    createHeader() {
      const headers = {
        Referer : 'http://fanyi.youdao.com/',
        "User-Agent" : 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.84 Safari/537.36',
      };
      return headers;
    }
  }
}
