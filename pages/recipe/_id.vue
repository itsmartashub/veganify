<template>
  <main class="recipeitem" ref="recipeitem">
    <div class="recipeitem__btn-wrapper" ref="recipeitem_btnwrapper">
      <button class="recipeitem__btn-back btn" @click="goBack()">
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
      </button>
    </div>

    <!-- <RecipeitemRecipe :recipeItem="recipeItem" /> -->
    <transition name="page">
      <RecipeitemRecipe />
    </transition>

    <!-- <Preloader /> -->
  </main>
</template>

<script>
import { custom } from '~/utils/transitions.js'

export default {
  layout: 'recipeitem',

  //   transition: custom,

  // transition: {
  //     name: "homeAnimation",
  //     css: false,
  //     mode: "out-in",

  //     beforeEnter(el) {
  //         this.$gsap.set(el, { y: 150 });
  //         this.$gsap.set(".loader", { transformOrigin: "center top" });
  //     },

  //     enter(el, done) {
  //         const enterTL = this.$gsap.timeline({
  //             defaults: { ease: "power1.inOut", duration: 0.8 },
  //             onComplete: done
  //         });

  //         enterTL
  //             .to(".loader", { yPercent: 100 }, 0)
  //             .to(".loader__content", { yPercent: -80 }, 0)
  //             .to(el, { y: 0 }, 0.2);
  //     },

  //     leave(el, done) {
  //         const leaveTL = this.$gsap.timeline({
  //             defaults: { ease: "power1.inOut", duration: 0.8 },
  //             onComplete: done
  //         });

  //         leaveTL
  //             .to(el, { y: 150 }, 0)
  //             .to(".loader", { yPercent: 0 }, 0)
  //             .to(".loader__content", { yPercent: 0 }, 0);
  //     }
  // },

  //   data() {
  //     return {
  //       recipeItem: this.$store.state.recipes.recipeItem,
  //     }
  //   },

  //   async fetch() {
  //     // await this.$store.dispatch("recipes/fetchRecipes", { recipeNum: 21 });
  //     // await this.$store.dispatch('recipes/fetchRandomTrivia')

  //     await this.$store.dispatch('recipes/findRecipeByID', this.$route.params.id)

  //     // if (!this.recipeItem) {
  //     //   await this.$store.dispatch(
  //     //     'recipes/findPopularRecipeByID',
  //     //     this.$route.params.id
  //     //   )
  //     // }
  //   },

  // fetch({ store, route }) {
  //   store.dispatch('recipes/findRecipeByID', route.params.id)
  // },
  // asyncData({ store, route }) {
  //   store.dispatch('recipes/findRecipeByID', route.params.id)
  // },

  computed: {
    // recipeItem() {
    //   return this.$store.state.recipes.recipeItem
    // },
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
    this.$store.dispatch('recipes/findRecipeByID', this.$route.params.id)

    // if (!this.recipeItem) {
    //   this.$store.dispatch(
    //     'recipes/findPopularRecipeByID',
    //     this.$route.params.id
    //   )
    // }
  },
  mounted() {
    this.$nextTick(() => {
      //     // if (process.client) this.gsapRecipeItem();
      //     this.$gsap.from(".recipeitem", { y: 150, duration: 1 });
      //  this.$nextTick(() => (this.isMounted = true))
    })
  },
}
</script>
