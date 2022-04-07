<template>
  <div class="smoothies" ref="smoothies">
    <Navigation />

    <main class="middle">
      <Header />
      <WaitingPlaceholder />
      <RecipeCards :recipes="smoothies" />
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
