const calendar = require('./calendar');

export default {
  name: 'dateChange-page',
  data () {
    const yearArr = [];
    for (let i = 1900; i <= 2099; ++i){
      yearArr.push({
        value: i,
        label: i
      })
    }
    const monthArr = [];
    for (let i = 1; i <= 12; ++i){
      monthArr.push({
        value: i,
        label: i
      });
    }
    const day31Arr = [];
    for (let i = 1; i <= 31; ++i){
      day31Arr.push({
        value: i,
        label: i
      });
    }
    const day30Arr = [];
    for (let i = 1; i <= 30; ++i){
      day30Arr.push({
        value: i,
        label: i
      });
    }
    const day29Arr = [];
    for (let i = 1; i <= 29; ++i){
      day29Arr.push({
        value: i,
        label: i
      });
    }
    const day28Arr = [];
    for (let i = 1; i <= 28; ++i){
      day28Arr.push({
        value: i,
        label: i
      });
    }
    const dayArr = [];
    return {
      yearArr,
      monthArr,
      dayArr,
      day31Arr,
      day30Arr,
      day29Arr,
      day28Arr,
      year: '',
      month: '',
      day: '',
      result: ''
    }
  },
  created() {
    let myDate = new Date();

    const year = myDate.getFullYear(); // 获取完整的年份(4位,1970-????)
    const month = (myDate.getMonth() + 1); // 获取当前月份(0-11,0代表1月)
    const day = myDate.getDate(); // 获取当前日(1-31)

    this.year = year;
    this.month = month;
    this.day = day;

    this.getDayArr();

  },
  methods: {
    getDayArr() {
      var day31 = [1,3,5,7,8,10,12];
      if (day31.indexOf(+this.month) > -1){
        this.dayArr = this.day31Arr;
      } else if (this.month === 2) {
        if (this.year % 4 === 0) {
          this.dayArr = this.day29Arr;
          if (this.day > 29) {
            this.day = 29;
          }
        } else {
          this.dayArr = this.day28Arr;
          if (this.day > 28) {
            this.day = 28;
          }
        }
      } else {
        this.dayArr = this.day30Arr;
        if (this.day > 30) {
          this.day = 30;
        }
      }
      
    },
    yearChange() {
      this.getDayArr();
    },
    monthChange() {
      this.getDayArr();
    },
    gTOn() {
      const lunar = calendar.solar2lunar(this.year, this.month, this.day);
      this.result = lunar.lYear+'年'+lunar.lMonth+'月'+lunar.lDay+'日（'+lunar.IMonthCn+lunar.IDayCn+'），'+lunar.gzYear+'年'+lunar.gzMonth+'月'+lunar.gzDay+'日（'+lunar.Animal+'年）';
    },
    nTOg() {
      const lunar = calendar.lunar2solar(this.year, this.month, this.day);
      this.result = lunar.cYear+'年'+lunar.cMonth+'月'+lunar.cDay+'日（'+lunar.ncWeek+'）';
    }
  
  }
}
