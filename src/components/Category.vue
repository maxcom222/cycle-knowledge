<template>
  <div :class="[classname, 'block']">
    <router-link
      :to="{ name: 'ViewCategory', params: { category_id: category_id } }"
    >
      <div class="flex items-center">
        <div>
          <img
            class="
              inline-block
              h-24
              md:h-28
              w-24
              min-w-24
              md:w-28
              rounded-full
              border-2 border-solid border-text
            "
            :src="img"
            alt=""
          />
        </div>
        <div class="ml-4 md:ml-9">
          <p class="text-xl md:text-2xl text-text font-medium md:font-semibold">
            {{ name }}
          </p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    category_id: Number,
    img: String,
    name: String,
    classname: String,
  },
};
</script>
