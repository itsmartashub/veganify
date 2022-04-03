<template>
  <div class="smoothies" ref="smoothies">
    <Navigation />

    <main class="middle">
      <Header />
      <!-- <RecipeCards :activeRecipes="smoothies" /> -->
      <!-- <RecipeCards :activeRecipes="activeRecipes" /> -->
      <WaitingPlaceholder />
      <RecipeCards :recipes="smoothies" />
      <!-- <RecipeCards /> -->

      <Notification />
    </main>

    <Sidebar :popularRecipes="popularSmoothies" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Veganify | Smoothies",
      meta: [
        {
          name: "description",
          content: "This is a Veganify homepage BLABLA",
          hid: "description",
        },
      ],
    };
  },

  computed: {
    // activeRecipes() {
    //   return this.$store.state.recipes.activeRecipes;
    // },
    smoothies() {
      return this.$store.state.recipes.smoothieItems;
    },
    popularSmoothies() {
      return this.$store.state.recipes.popularSmoothieItems;
    },
  },

  created() {
    this.$store.commit("recipes/SET_ACTIVE_RECIPES", this.smoothies);
    this.$store.commit("pagination/SET_CURR_PAGE", 1);
  },
};
</script>
