var Jimp = require("jimp");
var QrCodeReader = require('qrcode-reader');
var fs = require("fs");
var QRCode = require('qrcode')

export default {
  name: 'code-page',
  data () {
    return {
      filePath: '',
      text: '',
      originText: '',
      qrcodeText: '',
      activeName: 'second',
      fileContent: ''
    }
  },
  methods: {
    fileChange(e) {
      const self = this;
      var path = e.path[0].files[0].path;

      var buffer = fs.readFileSync(path);
      Jimp.read(buffer, function(err, image) {
          if (err) {
            console.error(err);
            self.$message.error('文件获取失败!')
          }
          var qr = new QrCodeReader();
          qr.callback = function(err, value) {
              if (err) {
                  console.error(err);
                  self.$message.error('请上传正确的二维码!')
              }
              self.fileContent = '二维码图片内容：' + value.result;
          };
          qr.decode(image.bitmap);
      });
    },
    textToQrcode(){
     QRCode.toDataURL(this.originText, (err, url) => {
       console.log(url)
       this.qrcodeText = url;
     })
    }
  }
}
