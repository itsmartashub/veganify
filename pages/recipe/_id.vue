<template>
  <main class="recipeitem">
    <div class="recipeitem__btn-wrapper">
      <button class="recipeitem__btn-back btn" @click="goBack()">
        <div class="icontainer--bggreen">
          <span class="icontainer__icon">&#8249;</span>
        </div>
        BACK
      </button>
    </div>

    <RecipeitemRecipe :recipeItem="recipeItem" />
  </main>
</template>

<script>
export default {
  layout: 'recipeitem',

  async fetch() {
    await this.$store.dispatch('recipes/fetchRandomTrivia')
    // await this.$store.dispatch('recipes/fetchRandomJoke')
    // this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
  },

  computed: {
    recipeItem() {
      return this.$store.state.recipes.recipeItem
    },

    // randomTriviaItem() {
    //   return this.$store.state.recipes.randomTriviaItem
    // },
  },

  methods: {
    goBack() {
      //   window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
      this.$router.back()
    },
  },

  created() {
    // return this.$store.dispatch('recipes/fetchRecipeByID', this.$route.params.id)
    this.$store.dispatch('recipes/findRecipeByID', this.$route.params.id)
    if (!this.recipeItem) {
      this.$store.dispatch(
        'recipes/findPopularRecipeByID',
        this.$route.params.id,
      )
    }
  },
}
</script>
