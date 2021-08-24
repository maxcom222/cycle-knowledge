<template>
  <TransitionRoot as="template" :show="openModal">
    <Dialog
      as="div"
      auto-reopen="false"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="hideBookmark()"
    >
      <div class="flex items-center justify-center text-center">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay
            class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
          >&#8203;</span
        >
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div
            class="
              min-w-full min-h-screen
              h-full
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
            <div>
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
                <DialogTitle
                  as="h3"
                  class="leading-6 text-2xl md:text-3xl text-text font-bold"
                >
                  Bookmarks
                </DialogTitle>
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
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
  <Article :openModal="openArticleModal" @article-hide="articleHide()" />
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";

import { XIcon } from "@heroicons/vue/outline";

import Article from "@/views/Article";

import { mapGetters, mapActions } from "vuex";

export default {
  name: "Bookmark",
  props: {
    openModal: Boolean,
  },
  components: {
    Article,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
  },
  data() {
    return { openArticleModal: false, open: false };
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
      this.$refs.btnClose.focus();
      this.openArticleModal = true;
    },
    articleHide() {
      this.$refs.btnClose.focus();
      this.openArticleModal = false;
    },
  },
};
</script>
