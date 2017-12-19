const queryString = require('query-string');

export default {
  name: 'urlParam-page',
  data () {
    return {
      originText: '',
      result: ''
    }
  },
  methods: {
    parseEncode() {
      this.result = encodeURI(this.originText);
    },
    parseDecode() {
      this.result = decodeURI(this.originText);
    },
    parseEncodeComponent() {
      this.result = encodeURIComponent(this.originText);
    },
    parseDecodeComponent() {
      this.result = decodeURIComponent(this.originText);
    },
  }
}
