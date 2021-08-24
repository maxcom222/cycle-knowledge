<template>
  <transition v-show="openModal">
    <div class="modal-backdrop">
      <div
        class="
          min-w-full min-h-screen
          h-screen
          inline-block
          align-bottom
          bg-body
          overflow-hidden
          shadow-xl
          transform
          transition-all
          sm:align-middle sm:max-w-sm
        "
      >
        <div class="bg-header py-6 flex justify-center items-center">
          <button
            type="button"
            ref="btnClose"
            class="
              absolute
              left-3
              rounded-md
              inline-flex
              items-center
              justify-center
              text-open
              hover:text-open-dark
              focus:outline-none
            "
            @click="hideBookmark()"
          >
            <span class="sr-only">Close modal</span>
            <XIcon class="h-6 w-6" aria-hidden="true" />
          </button>
          <div
            as="h3"
            class="leading-6 text-2xl md:text-3xl text-text font-bold"
          >
            Bookmarks
          </div>
        </div>

        <div class="mt-3 sm:mt-5 px-2">
          <button
            v-for="bookmark in bookmarksList"
            :key="bookmark.id"
            @click="this.openArticle(bookmark.id)"
            class="
              inline-flex
              rounded-full
              items-center
              py-0.5
              pl-2.5
              pr-1
              mx-2
              my-2
              text-sm
              font-medium
              bg-button-light
              text-text
            "
          >
            {{ bookmark.title }}
            <button
              type="button"
              @click="this.deleteBookmark(bookmark.id)"
              class="
                flex-shrink-0
                mx-2
                h-4
                w-4
                rounded-full
                inline-flex
                items-center
                justify-center
                text-text
                hover:bg-button-dark
                focus:outline-none focus:bg-text focus:text-white
              "
            >
              <span class="sr-only">Remove article option</span>
              <svg
                class="h-2 w-2"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 8 8"
              >
                <path
                  stroke-linecap="round"
                  stroke-width="1.5"
                  d="M1 1l6 6m0-6L1 7"
                />
              </svg>
            </button>
          </button>
        </div>
      </div>
    </div>
  </transition>
  <Article
    :openModal="openArticleModal"
    @article-hide="openArticleModal = false"
  />
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";

import Article from "@/views/Article";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Article,
    XIcon,
  },
  props: {
    openModal: Boolean,
  },
  data() {
    return { openArticleModal: false };
  },
  async created() {
    await this.fetchBookmarks();
  },
  computed: mapGetters(["bookmarksList", "selectedCategory"]),
  methods: {
    ...mapActions(["fetchBookmarks", "deleteBookmark", "fetchArticle"]),
    hideBookmark() {
      this.$emit("bookmark-hide");
    },
    async openArticle(article_id) {
      await this.fetchArticle(article_id);
      this.openArticleModal = true;
    },
    articleHide() {
      this.openArticleModal = false;
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
}
</style>
