const xmorse = require('xmorse')

export default {
  name: 'xmorse-page',
  data () {
    return {
      originText: '我是莫斯密码',
      result: ''
    }
  },
  created() {
    this.result = xmorse.encode(this.originText);
  },
  methods: {
    encrypt(e) {
      this.result = xmorse.encode(this.originText);
    },
    decrypt(e){
      this.result = xmorse.decode(this.originText);
      this.result || this.$message.error('您输入的摩斯密码不正确!');
    }
  }
}
