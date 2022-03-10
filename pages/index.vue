<template>
  <div class="home" v-if="isMounted">
    <Navigation />

    <main class="middle">
      <Header />
      <Categories v-if="isMounted && !err402" />
      <RecipeCards :activeRecipes="activeRecipes" :category="categoryName" />
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

  data() {
    return {
      isMounted: false,
    }
  },

  computed: {
    activeRecipes() {
      return this.$store.state.recipes.activeRecipes
    },
    categoryName() {
      return this.$store.state.recipes.categoryName
    },
    err402() {
      return this.$store.state.recipes.err402
    },
  },

  mounted() {
    this.$store.dispatch('bookmarks/setBookmarkRecipesArray')
    this.$store.commit('recipes/SET_CATEGORY_NAME', 'ALL RECIPES')

    this.$nextTick(() => (this.isMounted = true))
  },
}
</script>
