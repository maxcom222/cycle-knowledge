<template>
  <TransitionRoot as="template" :show="openModal">
    <Dialog
      as="div"
      auto-reopen="true"
      class="fixed z-10 inset-0 overflow-y-auto"
      @close="hide()"
    >
      <div class="flex items-center justify-center min-h-screen text-center">
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
              min-h-screen
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
            <div class="bg-header py-6 flex justify-between items-center">
              <button
                type="button"
                class="
                  ml-3
                  rounded-md
                  inline-flex
                  items-center
                  justify-center
                  text-open
                  hover:text-open-dark
                  focus:outline-none
                "
                @click="hide()"
              >
                <span class="sr-only">Close modal</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
              <DialogTitle
                as="h3"
                class="leading-6 text-2xl md:text-3xl text-text font-bold"
              >
                {{ selectedArticle.title }}
              </DialogTitle>
              <button
                v-if="selectedArticle.is_bookmark"
                type="button"
                @click="deleteBookmark(selectedArticle.id)"
                class="
                  mr-3
                  inline-flex
                  justify-center
                  items-center
                  w-12
                  min-w-12
                  h-12
                  border border-transparent
                  rounded-full
                  hover:bg-button-dark
                  outline-none
                "
              >
                <img src="/buttons/bookmark_selected.png" alt="" />
              </button>
              <button
                v-else
                type="button"
                @click="addBookmark(selectedArticle.id)"
                class="
                  mr-3
                  inline-flex
                  justify-center
                  items-center
                  w-12
                  min-w-12
                  h-12
                  border border-transparent
                  rounded-full
                  focus:outline-none
                "
              >
                <img src="/buttons/bookmark_default.png" alt="" />
              </button>
            </div>
            <div
              class="px-6 py-6 text-sm sm:text-lg text-text text-left"
              style="white-space: pre-line"
              v-html="selectedArticle.description"
            ></div>
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
import { XIcon } from "@heroicons/vue/outline";

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
