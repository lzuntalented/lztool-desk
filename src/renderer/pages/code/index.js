import './style.css'
export default {
  name: 'code-page',
  data () {
    return {
      activeName: 'first',
      originText: '',
      changeText: '',
      tabIndex: '0'
    }
  },
  methods: {
    handleClick (tab, event) {
      if (this.tabIndex === '0') {
        this.asciiToUnicode()
      } else if (this.tabIndex === '1') {
        this.unicodeToAscii()
      } else if (this.tabIndex === '2') {
        this.unicodeToChina()
      } else if (this.tabIndex === '3') {
        this.chinaToUnicode()
      }
    },
    chinaToUnicode () {
      var character = this.originText.split('\\u')
      var native1 = character[0]
      for (var i = 1; i < character.length; i++) {
        var code = character[i]
        native1 += String.fromCharCode(parseInt('0x' + code.substring(0, 4)))
        if (code.length > 4) {
          native1 += code.substring(4, code.length)
        }
      }
      this.changeText = native1
    },
    asciiToUnicode () {
      var str = ''
      for (var i = 0, len = this.originText.length; i < len; i++) {
        str += '&#' + this.originText.charCodeAt(i) + ';'
      }
      this.changeText = str
    },
    unicodeToAscii () {
      const code = this.originText.match(/&#(\d+);/g)
      if (code == null) {
        this.$message.error('文本框中没有合法的Unicode代码！')
        return
      }
      this.changeText = ''
      for (var i = 0; i < code.length; i++) {
        this.changeText += String.fromCharCode(code[i].replace(/[&#;]/g, ''))
      }
    },
    unicodeToChina () {
      var character = this.originText.split('')
      var ascii = ''
      for (var i = 0; i < character.length; i++) {
        var code = Number(character[i].charCodeAt(0))
        if (code > 127) {
          var charAscii = code.toString(16)
          charAscii = new String('0000').substring(charAscii.length, 4) + charAscii
          ascii += '\\u' + charAscii
        } else {
          ascii += character[i]
        }
      }
      this.changeText = ascii
    }
  }
}
