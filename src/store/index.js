import { createStore } from "vuex";

import CategoryModule from "./modules/category";
import ArticleModule from "./modules/article";
import BookmarkModule from "./modules/bookmark";

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    CategoryModule,
    ArticleModule,
    BookmarkModule,
  },
});
