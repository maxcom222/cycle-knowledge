<template lang="">
  <header>
    <Popover class="relative bg-header">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div class="flex justify-between items-center py-6">
          <div class="-ml-2 -my-2 md:hidden">
            <PopoverButton
              class="
                bg-transparent
                rounded-md
                p-2
                inline-flex
                items-center
                justify-center
                text-open
                hover:text-open-dark hover:bg-gray-100
                focus:outline-none
                focus:ring-2
                focus:ring-inset
                focus:ring-indigo-500
              "
            >
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
          </div>
          <router-link
            :to="{ name: 'Home' }"
            class="text-2xl md:text-3xl text-text font-bold"
          >
            {{ this.currentTitle }}
          </router-link>
          <div class="hidden md:flex md:space-x-10">
            <a
              v-for="menu in menus"
              :key="menu.id"
              :href="menu.href"
              class="font-medium text-gray-500 hover:text-gray-900"
              >{{ menu.name }}</a
            >
          </div>
          <button
            type="button"
            @click="openBookmark()"
            class="
              inline-flex
              items-center
              w-12
              min-w-12
              h-12
              md:w-14 md:h-14
              border border-transparent
              rounded-full
              shadow-sm
              text-white
              bg-indigo-600
              hover:bg-indigo-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-indigo-500
            "
          ></button>
        </div>
      </div>

      <transition
        enter-active-class="duration-200 ease-out"
        enter-from-class="opacity-0 scale-95"
        enter-to-class="opacity-100 scale-100"
        leave-active-class="duration-100 ease-in"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-95"
      >
        <PopoverPanel
          focus
          class="
            absolute
            top-0
            inset-x-0
            z-10
            p-2
            transition
            transform
            origin-top-right
            md:hidden
          "
        >
          <div
            class="
              rounded-lg
              shadow-lg
              ring-1 ring-black ring-opacity-5
              bg-white
              divide-y-2 divide-gray-50
            "
          >
            <div class="pt-5 pb-6 px-5">
              <div class="flex items-center justify-between">
                <div class="-ml-2">
                  <PopoverButton
                    class="
                      bg-transparent
                      rounded-md
                      p-2
                      inline-flex
                      items-center
                      justify-center
                      text-open
                      hover:text-open-dark hover:bg-gray-100
                      focus:outline-none
                      focus:ring-2
                      focus:ring-inset
                      focus:ring-indigo-500
                    "
                  >
                    <span class="sr-only">Close menu</span>
                    <XIcon class="h-6 w-6" aria-hidden="true" />
                  </PopoverButton>
                </div>
              </div>
              <div class="mt-6">
                <nav class="grid gap-y-6">
                  <a
                    v-for="menu in menus"
                    :key="menu.id"
                    :href="menu.href"
                    class="
                      -m-3
                      p-3
                      flex
                      items-center
                      rounded-md
                      hover:bg-gray-50
                    "
                  >
                    <span class="ml-3 text-base font-medium text-gray-900">
                      {{ menu.name }}
                    </span>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </PopoverPanel>
      </transition>
    </Popover>
  </header>
  <!-- <Bookmark
    :openModal="openBookmarkModal"
    @bookmark-hide="openBookmarkModal = false"
  /> -->
  <Nbookmark :openModal="openBookmarkModal" @bookmark-hide="closeBookmark()" />
</template>
<script>
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import { MenuIcon, XIcon } from "@heroicons/vue/outline";
// import Bookmark from "@/views/Bookmark";
import Nbookmark from "@/views/Nbookmark";

import { mapGetters, mapActions } from "vuex";

const menus = [];

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    MenuIcon,
    XIcon,
    Nbookmark,
    // Bookmark,
  },
  computed: mapGetters(["currentTitle"]),
  methods: {
    ...mapActions(["fetchArticle", "setBodyScroll"]),
    openBookmark() {
      this.openBookmarkModal = true;
      this.setBodyScroll(true);
    },
    closeBookmark() {
      this.openBookmarkModal = false;
      this.setBodyScroll(false);
    },
  },
  data() {
    return {
      openBookmarkModal: false,
      menus,
    };
  },
};
</script>
