<template>
  <div
    :style="
      isBodyScroll == true
        ? 'overflow: hidden; height: 100vh'
        : 'overflow: auto'
    "
  >
    <Header />
    <main class="pb-28">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/views/partials/Header";
import Footer from "@/views/partials/Footer";

import { mapGetters } from "vuex";

const menus = [];

export default {
  components: {
    Header,
    Footer,
  },
  setup() {
    document.title = "Zykluswissen";
    return { menus };
  },
  computed: mapGetters(["isBodyScroll"]),
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background-color: #fdf6e7;
  position: relative;
}
</style>
