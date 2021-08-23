<template lang="">
  <div>
    <div>
      <img
        class="inline-block h-auto w-full"
        :src="selectedCategory.img"
        alt=""
      />
      <p
        class="
          text-xl
          md:text-2xl
          text-text
          font-bold
          md:font-extrabold
          absolute
          w-full
          text-center
          top-44
        "
      >
        {{ selectedCategory.name }}
      </p>
    </div>
    <div
      class="
        text-sm
        md:text-xl
        text-text
        font-medium
        my-6
        md:my-9
        mx-6
        md:mx-10
        leading-6
        md:leading-8
      "
      style="white-space: pre-line"
      v-html="selectedCategory.description"
    ></div>
    <div class="px-3 md:px-10 mb-6">
      <button
        v-for="one in articlesList"
        :key="one.id"
        @click="openArticle(one.id)"
        type="button"
        class="
          mx-3
          my-1
          px-2
          sm:px-4
          py-1.5
          sm:w-48
          text-sm
          font-medium
          rounded-full
          text-text
          bg-button
          hover:bg-button-dark
          border-2 border-text
          focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-text
        "
      >
        {{ one.title }}
      </button>
    </div>
  </div>
  <Article :openModal="openModal" @article-hide="openModal = false" />
</template>
<script>
import Article from "@/views/Article";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Article,
  },
  data() {
    return { openModal: false };
  },
  computed: mapGetters(["articlesList", "selectedCategory"]),
  async created() {
    await this.fetchArticles(this.$route.params.category_id);
    await this.fetchCategory(this.$route.params.category_id);
  },
  methods: {
    ...mapActions(["fetchArticles", "fetchCategory", "fetchArticle"]),
    async openArticle(article_id) {
      await this.fetchArticle(article_id);
      this.openModal = true;
    },
  },
};
</script>
