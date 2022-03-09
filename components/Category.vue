<template>
  <!-- <article
        class="categories__category"
        :class="[isActive ? 'categories__category--active' : '']"
        @click="fetchRecipesByCategoryName(category.name)"
    > -->
  <article
    class="categories__category"
    :class="[isActive ? 'categories__category--active' : '']"
  >
    <div class="categories__icon" v-html="category.svg"></div>
    <div class="categories__name">{{ category.name }}</div>
    <div class="categories__counter">{{ category.count }}+</div>
  </article>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selectedCategory: 'all',
      isActive: false,
    }
  },

  // methods: {
  //     //    async fetchRecipesByCategoryName(categoryName) {
  //     fetchRecipesByCategoryName(categoryName) {
  //         // this.selectedCategory = categoryName;
  //         this.isActive = !this.isActive;
  //         // console.log(categoryName);

  //         // this.$store.commit("recipes/SET_CATEGORY_NAME", categoryName);

  //         // await this.$store.dispatch('recipes/fetchRecipesByCategoryName', categoryName);
  //     }
  // }
}
</script>

<style></style>
