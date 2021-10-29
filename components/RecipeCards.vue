<template>
  <section class="recipecards">
    <h2
      class="recipecards__title"
      v-if="!($route.name == 'bookmarks' || $route.name == 'smoothies')"
    >
      {{ categoryName }}
    </h2>
    <h2 class="recipecards__title" v-if="$route.name == 'bookmarks'">
      BOOKMARKS
    </h2>
    <h2 class="recipecards__title" v-if="$route.name == 'smoothies'">
      SMOOTHIES
    </h2>

    <section class="recipecards__wrapper">
      <template v-for="recipe in recipes">
        <!-- <nuxt-link :to="`/recipeitem/${recipe.id}`" :key="recipe.id">
                    <RecipeCard :recipe="recipe" />
                </nuxt-link> -->
        <RecipeCard
          :recipe="recipe"
          :key="recipe.id"
          :category="categoryName"
        />
        <!-- <RecipeCard
                    :recipe="recipe"
                    :key="recipe.id"
                    :category="categoryName"
                    v-gsap.from="{
                        opacity: 0,
                        rotation: -5,
                        scale: 0.6,
                        duration: 0.5,
                        stagger: 0.2
                    }"
                /> -->
      </template>
    </section>

    <p v-if="recipes.length == 0" class="recipecards__notifysubtitle">
      {{ recipeNotifySubtitle }}
    </p>
  </section>
</template>

<script>
export default {
  props: {
    recipes: {
      type: Array,
      required: true,
    },
    // category: {
    //     type: String,
    //     required: false
    // }
  },
  computed: {
    // recipes() {
    //     return this.$store.state.recipes.recipeItems;
    // },
    categoryName() {
      return this.$store.state.recipes.categoryName
    },
    recipeNotifySubtitle() {
      return this.$store.state.recipes.recipeSubtitle
    },
  },
  // methods: {
  //     navigateToRecipeItem(recipeID) {
  //         this.$store.commit("recipes/setRecipeItem", recipeID);
  //         this.$route.push(`/recipe/${recipeID}`);
  //     }
  // }
}
</script>

<style></style>
