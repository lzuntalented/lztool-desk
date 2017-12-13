const crypto = require('crypto.js')

export default {
  name: 'encrypt-page',
  data () {
    return {
      options: [{
        value: '0',
        label: 'MD5'
      }, {
        value: '1',
        label: 'SHA1'
      }],
      type: '0',
      originText: '',
      result: ''
    }
  },
  methods: {
    encrypt(e) {
      if (this.type === '0') {
        this.result = crypto.md5(this.originText);
      } else if (this.type === '1') {
        this.result = crypto.sha1(this.originText);
      }
    },
    decrypt(e){
      this.$message.error('该功能还未实现!')
    }
  }
}
