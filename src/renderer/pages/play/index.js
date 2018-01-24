const queryString = require('query-string');
import SearchPage from './Search';
import lzPlay from './playCore';
import { setInterval } from 'timers';
import History from './history';

export default {
  name: 'play-page',
  data () {
    return {
      playUrl: '',
      progress: 0,
      searchText: '',
      showSearchResult: false,
      searchList: [],
      playHistory: [],
      recommend: [],
      // 默认音量
      volume: 50,
      // 是否显示声音调节
      showVolumeTag: false,
      // 是否播放标志
      playTag : false,
      // 播放列表
      playList: [],
      // 当前播放序号
      playIndex: 0,
      // 当前播放事件
      currentTime: '00:00',
      // 歌曲总时间
      allTime: '00:00',
      showProgress: {
        'display-none': false,
        'circle-content': true
      },
      detailClass: {
        'display-none': true,
        'content': true
      }
    }
  },
  methods: {
    search() {
      const instance = new SearchPage('http://music.163.com' + this.playUrl);
      instance.addListenCallback((url) => {
        lzPlay.setVidioUrl(url);
        this.playTag = true;
        instance.destroy();
      });
      instance.createPage();
    },
    startTimer() {
      this.intervalHandler && clearInterval(this.intervalHandler);
      this.intervalHandler = setInterval(() => {
        const all = lzPlay.getAlltime();
        const cur = lzPlay.getCurrettime();
        this.progress = Math.floor(cur / all * 10000) / 100; 
        this.currentTime = lzPlay.timeChange(lzPlay.getCurrettime());
      }, 1000);
    },
    changeProgress(pro) {
      lzPlay.vidioPlay(lzPlay.getAlltime() * (pro / 100));
      this.currentTime = lzPlay.timeChange(lzPlay.getCurrettime());
    },
    showVolume() {
      this.showVolumeTag = !this.showVolumeTag;
    },
    paly() {
      if (!lzPlay.checkVidioStatus()) {
        this.search();
      }
      this.playTag = true;
      lzPlay.vidioPlay();
    },
    pause() {
      if (this.playUrl === '' || this.playList.length === 0) {
        return;
      }
      this.playTag = false;
      lzPlay.vidioPause();
    },
    changeVolume(pro){
      lzPlay.setVolume(pro / 100);
    },
    showDetail() {
      this.detailClass['display-none'] = false;
      this.showProgress['display-none'] = true;
    },
    hideDetail() {
      this.detailClass['display-none'] = true;
      this.showProgress['display-none'] = false;
    }
  },
  created() {
    const self = this;

    // 组件加载后即取出播放历史
    this.playList = History.get();
    this.playIndex = 0;
    if (this.playList.length > 0) {
      this.playUrl = this.playList[this.playIndex].href;
    }

    lzPlay.initVidio({
      // 音乐数据缓存完毕
      'loadeddata': () => {
        // 开始播放
        self.startTimer();
        self.allTime = lzPlay.timeChange(lzPlay.getAlltime());
        self.currentTime = lzPlay.timeChange(0);
        self.playTag = true;
      },
      // 播放结束
      ended: () => {
        self.playTag = false;
        if (self.playIndex + 1 < self.playList.length) {
          self.playIndex += 1;
        } else {
          self.playIndex = 0;
        }
        self.playUrl = self.playList[self.playIndex].href;
        self.search();
      }
    });

    // 监听播放事件
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'CHANGE_SONGURL'){
        const obj = mutation.payload;
        History.add(obj);
        this.playList = History.get();
        this.playUrl = obj.href;
        this.playIndex = 0;
        this.search();
      }
    })
  }
}
