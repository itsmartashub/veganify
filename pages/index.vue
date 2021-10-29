<template>
  <div class="home">
    <Navigation />

    <main class="middle">
      <Header />
      <Categories />
      <RecipeCards :recipes="recipes" :category="categoryName" />
    </main>

    <Sidebar />
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: 'Veganify | Home',
      meta: [
        {
          name: 'description',
          content: 'This is a Veganify homepage BLABLA',
          hid: 'description',
        },
      ],
    }
  },

  async fetch() {
    await this.$store.dispatch('recipes/fetchRecipes', { recipeNum: 21 })
  },

  computed: {
    recipes() {
      return this.$store.state.recipes.recipeItems
    },
    categoryName() {
      return this.$store.state.recipes.categoryName
    },
  },

  mounted() {
    this.$store.dispatch('bookmarks/setBookmarkRecipesArray')
    this.$store.commit('recipes/setCategoryName', 'ALL RECIPES')
  },
}
</script>
