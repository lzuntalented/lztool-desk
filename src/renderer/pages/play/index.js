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
      volume: 50,
      showVolumeTag: false,
      playTag : false,
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
      }, 1000);
    },
    changeProgress(pro) {
      lzPlay.vidioPlay(lzPlay.getAlltime() * (pro / 100));
    },
    showVolume() {
      this.showVolumeTag = !this.showVolumeTag;
    },
    paly() {
      this.playTag = true;
      lzPlay.vidioPlay();
    },
    pause() {
      this.playTag = false;
      lzPlay.vidioPause();
    },
    changeVolume(pro){
      lzPlay.setVolume(pro / 100);
    }
  },
  created() {
    const self = this;
    lzPlay.initVidio({
      'loadeddata': () => {
        this.startTimer();
      },
      vidioPlay() {
        
      }
    });
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'CHANGE_SONGURL'){
        const obj = mutation.payload;
        History.add(obj);
        this.playUrl = obj.href;
        this.search();
        // lzPlay.setVidioUrl(mutation.payload);
      }
    })
  }
}
