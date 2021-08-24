import { createStore } from "vuex";

import CategoryModule from "./modules/category";
import ArticleModule from "./modules/article";
import BookmarkModule from "./modules/bookmark";

export default createStore({
  state: {
    title: "",
  },
  getters: {
    currentTitle: (state) => state.title,
  },
  actions: {
    setTitle({ commit }, new_title) {
      commit("setTitle", new_title);
    },
  },
  mutations: {
    setTitle: (state, new_title) => (state.title = new_title),
  },
  modules: {
    CategoryModule,
    ArticleModule,
    BookmarkModule,
  },
});
