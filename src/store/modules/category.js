import axios from "axios";

const state = {
  categories: [],
  category: {},
};

const getters = {
  categoriesList: (state) => state.categories,
  selectedCategory: (state) => state.category,
};

const actions = {
  async fetchCategories({ commit }) {
    const response = await axios.get("/api/categories");
    commit("setCategories", response.data);
  },
  async fetchCategory({ commit }, category_id) {
    const response = await axios.get(`/api/category/${category_id}`);
    commit("setSelectedCategory", response.data);
  },
};

const mutations = {
  setCategories: (state, categories) => (state.categories = categories),
  setSelectedCategory: (state, category) => (state.category = category),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
