const queryString = require('query-string');
import SearchPage from './Search';

export default {
  name: 'music-page',
  data () {
    return {
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
      if (this.searchText.trim() === ''){
        this.showSearchResult = false;
        return;
      }
      this.showSearchResult = true;

      const loading = this.$loading({
        lock: true,
        text: '查找中...',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
      });

      const instance = new SearchPage('http://music.163.com/#/search/m/?s=' + encodeURI(this.searchText));
      instance.addListenCallback((list) => {
        loading.close();
        this.searchList = list;
        instance.destroy();
      });
      instance.createPage();
    },
    change() {
      if (this.searchText.trim() === '') {
        this.showSearchResult = false;
      }
    },
    play(url) {
      this.$store.commit('CHANGE_SONGURL', url);
      console.log(url);
    }
  }
}
