<template>
  <section class="recipecards" id="recipecards" v-if="!isWaiting">
    <h2
      class="recipecards__title"
      v-if="!($route.name === 'bookmarks' || $route.name === 'smoothies')"
    >
      <span v-if="activeRecipes[0]">
        {{ categoryName === "ALL" ? "ALL RECIPES" : categoryName }}
      </span>
      <span v-else> OH, NO 😶 </span>
    </h2>
    <h2 class="recipecards__title" v-if="$route.name === 'bookmarks'">
      <span>BOOKMARKS</span>
    </h2>
    <h2 class="recipecards__title" v-if="$route.name === 'smoothies'">
      <span>SMOOTHIES</span>
    </h2>

    <template>
      <TransitionGroup
        appear
        name="recipecard"
        mode="out-in"
        tag="section"
        class="recipecards__wrapper"
      >
        <template v-for="activeRecipe in paginatedRecipes">
          <RecipeCard
            :recipe="activeRecipe"
            :key="activeRecipe.id"
            :category="categoryName"
          />
        </template>
      </TransitionGroup>

      <Pagination />
    </template>

    <Notify :recipeNotifyText="recipeNotifyText" v-if="!activeRecipes[0]" />
  </section>
</template>

<script>
export default {
  computed: {
    categoryName() {
      return this.$store.state.recipes.categoryName;
    },
    recipeNotifyText() {
      return this.$store.state.recipes.recipeNotifyText;
    },
    paginatedRecipes() {
      return this.$store.getters["pagination/getPaginatedRecipes"];
    },
    activeRecipes() {
      return this.$store.state.recipes.activeRecipes;
    },
    bookmarksRecipes() {
      return this.$store.state.bookmarks.bookmarksRecipes;
    },
    isWaiting() {
      return this.$store.state.app.isWaiting;
    },
  },
};
</script>
