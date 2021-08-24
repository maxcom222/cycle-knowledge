<template lang="">
  <footer class="bg-footer w-full absolute bottom-0">
    <div
      class="md:max-w-xl mx-auto px-6 py-4 flex items-center justify-between"
    >
      <span
        class="
          h-10
          w-10
          md:w-14 md:h-14
          rounded-full
          flex
          items-center
          justify-center
          bg-indigo-600
        "
      ></span>
      <span
        class="
          h-10
          w-10
          md:w-14 md:h-14
          rounded-full
          flex
          items-center
          justify-center
          bg-indigo-600
        "
      ></span>
      <span
        class="
          h-20
          w-20
          md:w-24 md:h-24
          -mt-7
          rounded-full
          flex
          items-center
          justify-center
          bg-white
          border-2 border-open
          shadow-plus
        "
      >
        <PlusIcon
          class="h-10 w-10 md:h-14 md:w-14 text-open-dark"
          aria-hidden="true"
        />
      </span>
      <span
        class="
          h-10
          w-10
          md:w-14 md:h-14
          rounded-full
          flex
          items-center
          justify-center
          bg-indigo-600
        "
      ></span>
      <span
        class="
          h-10
          w-10
          md:w-14 md:h-14
          rounded-full
          flex
          items-center
          justify-center
          bg-indigo-600
          ring-2 ring-offset-2 ring-indigo-500
        "
      ></span>
    </div>
  </footer>
</template>
<script>
import { PlusIcon } from "@heroicons/vue/outline";

export default {
  components: {
    PlusIcon,
  },
};
</script>
<style lang=""></style>
