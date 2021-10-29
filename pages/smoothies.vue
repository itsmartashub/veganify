<template>
  <div class="smoothies">
    <Navigation />

    <main class="middle">
      <Header />
      <RecipeCards :recipes="smoothies" />
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
      return this.$store.state.smoothies.smoothieItems
    },
    popularSmoothies() {
      return this.$store.state.smoothies.popularSmoothieItems
    },
    // recipes() {
    //   return this.$store.state.recipes.recipeItems
    // },
  },
}
</script>

<style></style>
