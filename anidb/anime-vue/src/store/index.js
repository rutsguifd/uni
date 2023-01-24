import axios from "axios";
import { createStore } from "vuex";

export default createStore({
  state: {
    animeInfo: {},
   
    randomAnimeInfo: {},
    animeList: {},
    topAnimeList: {},
    search_query: "",
  },
  mutations: {
    updateAnime(state, anime) {
      state.animeInfo = anime;
    },
    updateList(state, list) {
      state.animeList = list;
    },
    updateTopList(state, toplist) {
      state.topAnimeList = toplist;
    },

    searchQuery(state, srch) {
      state.search_query = srch;
    },
    updateRandomAnime(state, randomAnime) {
      state.randomAnimeInfo = randomAnime;
    },
  },
  actions: {

    fetchAnimeInfo({ commit }, id) {
      axios
        .get(`https://api.jikan.moe/v4/anime/${id}/full`)
        .then((response) => {
          commit("updateAnime", response.data.data);
        });
    },

    fetchAnimeList({commit}, search ) {
      axios
        .get(`https://api.jikan.moe/v4/anime?q=${
                search ?? ""
              
              }`)
        .then((response) => {
          commit("updateList", response.data.data);
        });
    },
    fetchTopAnimeList({ commit }) {
      axios.get("https://api.jikan.moe/v4/top/anime").then((response) => {
        commit("updateTopList", response.data.data);
      });
    },
    fetchRandomAnime({ commit }) {
      axios("https://api.jikan.moe/v4/random/anime").then((response) => {
        commit("updateRandomAnime", response.data.data);
      });
    },

  },
  getters: {
    anime(state) {
      return state.animeInfo;
    },
    animelist(state) {
      return state.animeList;
    },
    topAnimeList(state) {
      return state.topAnimeList;
    },
    randomAnime(state) {
      return state.randomAnimeInfo;
    },
    searchList(state) {
      return state.search_query;
    },
  },
});
