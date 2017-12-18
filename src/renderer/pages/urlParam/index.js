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
    parse() {
      const list = this.originText.split('&');
      const result = [];
      list.forEach(element => {
        const str = element.split('=').join(" : ");
        result.push(str);
      });
      this.result = result;
    }
  }
}
