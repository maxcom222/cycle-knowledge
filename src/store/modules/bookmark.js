import axios from "axios";

const state = {
  bookmarks: [],
};

const getters = {
  bookmarksList: (state) => state.bookmarks,
};

const actions = {
  async fetchBookmarks({ commit }) {
    const response = await axios.get("/api/bookmarks");
    commit("setBookmarks", response.data);
  },
  async addBookmark({ commit, dispatch }, id) {
    const response = await axios.post(`/api/bookmarks/${id}`);
    dispatch("fetchArticle", id, { root: true });
    commit("setBookmarks", response.data);
  },
  async deleteBookmark({ commit }, id) {
    await axios.delete(`/api/bookmarks/${id}`);
    commit("removeBookmark", id);
  },
};

const mutations = {
  setBookmarks: (state, bookmarks) => (state.bookmarks = bookmarks),
  removeBookmark: (state, id) => {
    state.bookmarks = state.bookmarks.filter(
      (bookmark) => parseInt(bookmark.id) != parseInt(id)
    );
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
