import './style.css';
export default {
  name: 'time-page',
  interval: null,
  data () {
    return {
        nowTime: Date.parse(new Date()) / 1000,
        bjTime: '',
        orginBJTime: '',
        timestamp: '',
        mY: '',
        mM: '',
        mD: '',
        mH: '',
        mS: '',
        mSS: ''
    }
  },
  methods: {
    refresh() {
        this.nowTime = Date.parse(new Date()) / 1000;
    },
    start(){
        console.log(this)
        this.startInterval();
    },
    pause(){
        this.interval && clearInterval(this.interval);
    },
    onChangeData: function (data) {
      console.log(JSON.stringify(data))
    },
    startInterval(){
        const interval = this.interval;
        this.nowTime = Date.parse(new Date()) / 1000;
  
        interval && clearInterval(interval);
        this.interval = setInterval(() => {
          this.nowTime = Date.parse(new Date()) / 1000;
        },1000);
    },
    changeToText(){
        let txt = "";
        console.log(this.orginBJTime)
		let myDate = new Date(parseInt(this.orginBJTime) * 1000);
		txt += myDate.getFullYear() + "/";    //获取完整的年份(4位,1970-????)
		txt += (myDate.getMonth() + 1) + "/";       //获取当前月份(0-11,0代表1月)
		txt += myDate.getDate() + " ";        //获取当前日(1-31)
	
		txt += myDate.getHours() + ":";       //获取当前小时数(0-23)
		txt += myDate.getMinutes() + ":";     //获取当前分钟数(0-59)
		txt += myDate.getSeconds();     //获取当前秒数(0-59)
//		myDate.getMilliseconds();    //获取当前毫秒数(0-999)
//		myDate.toLocaleDateString();     //获取当前日期
//		var mytime=myDate.toLocaleTimeString();     //获取当前时间
//		txt = myDate.toLocaleString( );        //获取日期与时间
//		var txt = new Date(parseInt($("#tb_1").val()) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
//		txt = txt.replace(/上|午|下/g,"");
        this.bjTime = txt;
    },
    changeToTime(){
        let txt = "";
		const y = this.mY || 0;
		const m = this.mM || 0;
		const d = this.mD || 0;
		const h = this.mH || 0;
		const i = this.mS || 0;
		const s = this.mSS || 0;

		txt += y + "/";
		txt += m + "/";
		txt += d + " ";
		
		txt += h + ":";
		txt += i + ":";
		txt += s;
		
		this.timestamp = Date.parse(new Date(txt)) / 1000;
    }
  },
  mounted() {
    this.startInterval();
  }
}
