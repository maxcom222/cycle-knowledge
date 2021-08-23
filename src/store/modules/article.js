import axios from "axios";

const state = {
  articles: [],
  article: {},
};

const getters = {
  articlesList: (state) => state.articles,
  selectedArticle: (state) => state.article,
};

const actions = {
  async fetchArticles({ commit }, category_id) {
    const response = await axios.get(`/api/${category_id}/articles`);
    commit("setArticles", response.data);
  },
  async fetchArticle({ commit }, article_id) {
    const response = await axios.get(`/api/articles/${article_id}`);
    commit("setSelectedArticle", response.data);
  },
};

const mutations = {
  setArticles: (state, articles) => (state.articles = articles),
  setSelectedArticle: (state, article) => (state.article = article),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
