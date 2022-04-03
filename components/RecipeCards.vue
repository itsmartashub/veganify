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

    <!-- <TransitionGroup
      v-if="$route.name !== 'bookmarks'"
      appear
      name="recipecard"
      mode="out-in"
      tag="section"
      class="recipecards__wrapper"
    >
      <template v-for="activeRecipe in activeRecipes">
        <RecipeCard
          :recipe="activeRecipe"
          :key="activeRecipe.id"
          :category="categoryName"
        />
      </template>
    </TransitionGroup> -->

    <!-- <template v-if="$route.name !== 'bookmarks'"> -->
    <template>
      <TransitionGroup
        appear
        name="recipecard"
        mode="out-in"
        tag="section"
        class="recipecards__wrapper"
      >
        <!-- <template v-for="activeRecipe in paginatedRecipes">
          <RecipeCard
            :recipe="activeRecipe"
            :key="activeRecipe.id"
            :category="categoryName"
          />
        </template> -->
        <template v-for="activeRecipe in paginatedRecipes">
          <RecipeCard
            :recipe="activeRecipe"
            :key="activeRecipe.id"
            :category="categoryName"
          />
        </template>
      </TransitionGroup>

      <!-- <Pagination :recipes="recipes" /> -->
      <Pagination />
    </template>

    <!-- <template v-if="$route.name === 'bookmarks'">
      <TransitionGroup
        appear
        name="recipecard"
        mode="out-in"
        tag="section"
        class="recipecards__wrapper"
      >
        <template v-for="activeRecipe in bookmarksRecipes">
          <RecipeCard
            :recipe="activeRecipe"
            :key="activeRecipe.id"
            :category="categoryName"
          />
        </template>
      </TransitionGroup>

      <Pagination />
    </template> -->

    <!-- 
    <template>
      <TransitionGroup
        appear
        name="recipecard"
        mode="out-in"
        tag="section"
        class="recipecards__wrapper"
        v-if="$route.name === 'bookmarks'"
      >
        <template v-for="activeRecipe in bookmarksRecipes">
          <RecipeCard
            :recipe="activeRecipe"
            :key="activeRecipe.id"
            :category="categoryName"
          />
        </template>
      </TransitionGroup>

      <Pagination />
    </template> -->

    <!-- <section class="recipecards__wrapper">
      <template v-for="activeRecipe in bookmarksRecipes">
        <RecipeCard
          :recipe="activeRecipe"
          :key="activeRecipe.id"
          :category="categoryName"
        />
      </template>
    </section> -->

    <Notify :recipeNotifyText="recipeNotifyText" v-if="!activeRecipes[0]" />
  </section>
</template>

<script>
export default {
  // props: {
  //   activeRecipes: {
  //     type: Array,
  //     default: function () {
  //       return this.$store.state.recipes.activeRecipes
  //     },
  //   },
  // },
  computed: {
    categoryName() {
      return this.$store.state.recipes.categoryName;
    },
    recipeNotifyText() {
      return this.$store.state.recipes.recipeNotifyText;
    },
    paginatedRecipes() {
      return this.$store.getters["pagination/getPaginatedRecipes"];
      // return this.$store.state.pagination.paginatedRecipes;
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

    // recipes() {
    //   if (this.$route.name !== "bookmarks") return this.paginatedRecipes;
    //   else return this.bookmarksRecipes;
    // },
  },
  // created() {
  //   this.$store.commit("pagination/SET_PAGINATED_RECIPES", this.recipes);
  // },
};
</script>
