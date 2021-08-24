import { createStore } from "vuex";

import CategoryModule from "./modules/category";
import ArticleModule from "./modules/article";
import BookmarkModule from "./modules/bookmark";

export default createStore({
  state: {
    title: "",
    isBodyScroll: false,
  },
  getters: {
    currentTitle: (state) => state.title,
    isBodyScroll: (state) => state.isBodyScroll,
  },
  actions: {
    setTitle({ commit }, new_title) {
      commit("setTitle", new_title);
    },
    setBodyScroll({ commit }, value) {
      commit("setBodyScroll", value);
    },
  },
  mutations: {
    setTitle: (state, new_title) => (state.title = new_title),
    setBodyScroll: (state, value) => (state.isBodyScroll = value),
  },
  modules: {
    CategoryModule,
    ArticleModule,
    BookmarkModule,
  },
});
