<template>
  <TransitionRoot as="template" :show="openModal">
    <Dialog
      as="div"
      auto-reopen="true"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="hide()"
    >
      <div
        class="
          flex
          items-center
          justify-center
          min-h-screen
          pt-4
          px-4
          pb-20
          text-center
          sm:block sm:p-0
        "
      >
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
              inline-block
              align-bottom
              bg-white
              rounded-lg
              px-4
              pb-4
              overflow-hidden
              shadow-xl
              transform
              transition-all
              sm:align-middle sm:max-w-sm
            "
          >
            <div>
              <div
                class="
                  bg-white
                  pt-3
                  pb-1
                  border-b border-gray-200
                  flex
                  justify-between
                  items-center
                "
              >
                <button
                  type="button"
                  class="
                    rounded-md
                    inline-flex
                    items-center
                    justify-center
                    text-text
                    hover:text-text-dark
                    focus:outline-none
                  "
                  @click="hide()"
                >
                  <span class="sr-only">Close modal</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </button>
                <DialogTitle
                  as="h3"
                  class="text-lg leading-6 font-medium text-text"
                >
                  {{ selectedArticle.title }}
                </DialogTitle>
                <button
                  v-if="selectedArticle.is_bookmark"
                  type="button"
                  @click="deleteBookmark(selectedArticle.id)"
                  class="
                    inline-flex
                    justify-center
                    items-center
                    w-8
                    h-8
                    md:w-10 md:h-10
                    border border-transparent
                    rounded-full
                    text-text
                    bg-button
                    hover:bg-button-dark
                    outline-none
                    ring-2 ring-offset-2 ring-text
                  "
                >
                  <span class="sr-only">Bookmark</span>
                  <BookmarkIcon class="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  v-else
                  type="button"
                  @click="addBookmark(selectedArticle.id)"
                  class="
                    inline-flex
                    justify-center
                    items-center
                    w-8
                    h-8
                    md:w-10 md:h-10
                    border border-transparent
                    rounded-full
                    text-text
                    bg-button
                    hover:bg-button-dark
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-text
                  "
                >
                  <span class="sr-only">Bookmark</span>
                  <BookmarkIcon class="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
              <div
                class="mt-3 sm:mt-5 px-2 text-sm text-gray-500 text-left"
                style="white-space: pre-line"
                v-html="selectedArticle.description"
              >
              </div>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { XIcon, BookmarkIcon } from "@heroicons/vue/outline";

import { mapGetters, mapActions } from "vuex"; //

export default {
  name: "Article",
  props: {
    openModal: Boolean,
  },
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    XIcon,
    BookmarkIcon,
  },
  setup() {
    return {
      open: false,
    };
  },
  computed: mapGetters(["selectedArticle"]),
  methods: {
    ...mapActions(["addBookmark", "deleteBookmark"]),
    hide() {
      this.$emit("article-hide");
    },
  },
};
</script>
