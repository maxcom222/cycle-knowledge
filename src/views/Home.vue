<template>
  <div class="relative">
    <Category
      v-for="category in categoriesList"
      :key="category.id"
      :category_id="parseInt(category.id)"
      classname="w-80 md:w-1/2 my-7 md:my-11 mx-auto"
      :img="category.img"
      :name="category.name"
    />
  </div>
</template>

<script>
import Category from "@/components/Category";

import { mapGetters, mapActions } from "vuex";

export default {
  components: {
    Category,
  },
  setup() {},
  methods: {
    ...mapActions(["fetchCategories"]),
  },
  computed: mapGetters(["categoriesList"]),
  async created() {
    await this.fetchCategories();
  },
};
</script>
