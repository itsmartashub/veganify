<template>
  <div class="smoothies" ref="smoothies">
    <Navigation />

    <main class="middle">
      <Header />
      <RecipeCards :activeRecipes="smoothies" />
    </main>

    <Sidebar :popularRecipes="popularSmoothies" />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Veganify | Smoothies',
      meta: [
        {
          name: 'description',
          content: 'This is a Veganify homepage BLABLA',
          hid: 'description',
        },
      ],
    }
  },

  computed: {
    smoothies() {
      // return this.$store.state.smoothies.smoothieItems;
      return this.$store.state.recipes.smoothieItems
    },
    popularSmoothies() {
      // return this.$store.state.smoothies.popularSmoothieItems;
      return this.$store.state.recipes.popularSmoothieItems
    },
  },
}
</script>
