<template>
  <main class="recipeitem" ref="recipeitem">
    <div class="recipeitem__btn-wrapper" ref="recipeitem_btnwrapper">
      <!-- <button class="recipeitem__btn-back btn" @click="goBack()">
        <div class="icontainer--bggreen">
          <svg
            class="icon icon-arrowLeft icontainer__icon"
            viewBox="0 0 24 24"
            width="24px"
            height="24px"
          >
            <path
              d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
            ></path>
          </svg>
        </div>
        BACK
      </button> -->
      <transition name="slideLeft">
        <BtnBack v-if="isMounted" />
      </transition>
    </div>

    <!-- <RecipeitemRecipe :recipeItem="recipeItem" /> -->
    <transition name="page">
      <RecipeitemRecipe />
    </transition>
  </main>
</template>

<script>
export default {
  layout: 'recipeitem',
  middleware: ['redirect'],

  data() {
    return {
      isMounted: false,
    }
  },

  // created() {
  //   if (!this.$route.params.id) return
  //   this.$store.dispatch('recipes/findRecipeByID', this.$route.params.id)
  // },

  mounted() {
    this.$nextTick(() => (this.isMounted = true))
  },
}
</script>
