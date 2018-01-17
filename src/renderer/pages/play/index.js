const queryString = require('query-string');
import SearchPage from './Search';
import lzPlay from './playCore';
import { setInterval } from 'timers';

export default {
  name: 'play-page',
  data () {
    return {
      playUrl: '',
      progress: 0,
      searchText: '',
      showSearchResult: false,
      searchList: [],
      playHistory: [
        {
          name: '我们没在一起'
        },
        {
          name: '再多一天'
        }
      ],
      recommend: []
    }
  },
  methods: {
    search() {
      const instance = new SearchPage('http://music.163.com' + this.playUrl);
      instance.addListenCallback((url) => {
        lzPlay.setVidioUrl(url);
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
    }
  },
  created() {
    lzPlay.initVidio({
      'loadeddata': () => {
        this.startTimer();
      },
    });
    this.$store.subscribe((mutation, state) => {
      if (mutation.type === 'CHANGE_SONGURL'){
        this.playUrl = mutation.payload;
        this.search();
        // lzPlay.setVidioUrl(mutation.payload);
      }
    })
  }
}
