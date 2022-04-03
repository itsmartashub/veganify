<template>
  <div class="home" v-if="isMounted">
    <Navigation />

    <main class="middle">
      <Header />
      <Categories v-if="isMounted && !err402" />
      <!-- <RecipeCards :activeRecipes="activeRecipes" :category="categoryName" /> -->
      <WaitingPlaceholder />
      <RecipeCards :category="categoryName" />

      <Notification />
    </main>

    <Sidebar />
  </div>
</template>

<script>
export default {
  scrollToTop: false,

  head() {
    return {
      title: "Veganify | Home",
      meta: [
        {
          name: "description",
          content: "This is a Veganify homepage BLABLA",
          hid: "description",
        },
      ],
    };
  },

  data() {
    return {
      isMounted: false,
    };
  },

  computed: {
    activeRecipes() {
      return this.$store.state.recipes.activeRecipes;
    },
    recipeItems() {
      return this.$store.state.recipes.recipeItems;
    },
    categoryName() {
      return this.$store.state.recipes.categoryName;
    },
    err402() {
      return this.$store.state.recipes.err402;
    },
  },

  created() {
    this.$store.commit("recipes/SET_ACTIVE_RECIPES", this.recipeItems);
    this.$store.commit("pagination/SET_CURR_PAGE", 1);
  },

  mounted() {
    this.$store.dispatch("bookmarks/setBookmarkRecipesArray");
    this.$store.commit("recipes/SET_CATEGORY_NAME", "ALL");

    this.$nextTick(() => (this.isMounted = true));
  },
};
</script>
