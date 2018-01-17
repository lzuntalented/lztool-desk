const state = {
  main: 0,
  songUrl: '',
  getters: {
    getSongUrl: function(state, rootState) {
      return rootState.songUrl;
    }
  }
}

const mutations = {
  DECREMENT_MAIN_COUNTER (state) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state) {
    state.main++
  },
  CHANGE_SONGURL(state, url) {
    console.log(url);
    state.songUrl = url;
  }
}

const actions = {
  someAsyncTask ({ commit }) {
    // do something async
    commit('INCREMENT_MAIN_COUNTER')
  },
  playSong( {commit} ) {
    commit()
  }
}

export default {
  state,
  mutations,
  actions
}
