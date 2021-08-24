<template>
  <Header />
  <main class="pb-28">
    <router-view />
  </main>
  <Footer />
</template>

<script>
import Header from "@/views/partials/Header";
import Footer from "@/views/partials/Footer";

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
};
</script>

<style lang="scss">
#app {
  min-height: 100vh;
  background-color: #fdf6e7;
  position: relative;
}
</style>
