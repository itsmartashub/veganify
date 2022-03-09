<template>
  <div class="home" v-if="isMounted">
    <Navigation />

    <main class="middle">
      <Header />
      <Categories v-if="isMounted && !err402" />
      <RecipeCards :activeRecipes="activeRecipes" :category="categoryName" />
    </main>

    <Sidebar />

    <!-- <Preloader /> -->
  </div>
</template>

<script>
// import { homePage } from "~/mixins/transitions.js";
import { custom } from '~/utils/transitions.js'

export default {
  // mixins: [homePage],

  // homePage,

  // transition: custom,

  // transition: {
  //     name: "homeAnimation",
  //     css: false,
  //     mode: "out-in",

  //     enter(el, done) {
  //         console.log(el);

  //         this.homeAnimation = this.$gsap.timeline({
  //             defaults: {
  //                 autoAlpha: 0,
  //                 duration: 0.4,
  //                 ease: "back",
  //                 clearProps: true
  //             },
  //             onComplete: done()
  //         });
  //         this.homeAnimation
  //             .from(el.querySelector(".navigation"), {
  //                 duration: 0.8,
  //                 xPercent: -100
  //             })
  //             .from(
  //                 el.querySelector(".navigation .logo__svg"),
  //                 { yPercent: -50 }
  //                 // "<25%"
  //             )
  //             .from(
  //                 el.querySelector(".navigation .logo__veganify"),
  //                 { yPercent: 50 }
  //                 // "<25%"
  //             )
  //             .from(
  //                 el.querySelectorAll(".navigation__link svg"),
  //                 { yPercent: 100, stagger: 0.2 }
  //                 // "<25%"
  //             )
  //             .from(
  //                 el.querySelector(".navigation__themes"),
  //                 { yPercent: 100, rotate: 60 }
  //                 // "<25%"
  //             );

  //         return this.homeAnimation.play();
  //     },

  //     leave(el, done) {
  //         console.log(el);
  //         done();
  //     }
  // },

  // transition: {
  //     name: "homeAnimation",
  //     css: false,
  //     mode: "out-in",

  //     beforeEnter(el) {
  //         console.log(el);
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

  // async fetch() {
  //     await this.$store.dispatch("recipes/fetchRecipes", { recipeNum: 21 });
  // },

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

    // this.$store.dispatch("recipes/fetchAllInOnce");

    // this.$gsap
    //     .timeline({ defaults: { ease: "power1.inOut", duration: 0.8 } })
    //     .set(".home", { y: 150 })
    //     // .to(
    //     //     ".loader__title span",
    //     //     {
    //     //         yPercent: -100,
    //     //         opacity: 0,
    //     //         stagger: 0.1
    //     //     },
    //     //     0
    //     // )
    //     // .to(".loader__logo", { yPercent: 100 }, 0)
    //     // .to(".loader__logo", { scale: 0 }, 0)
    //     .to(".loader", { yPercent: 100 }, 0)
    //     .to(".loader__content", { yPercent: -80 }, 0)
    //     .to(".home", { y: 0 }, 0.2);
    // this.$store.commit("apk/SET_LOADING", false);

    // this.$nextTick(() => {
    //     console.log("GSAP");
    //     this.$gsap
    //         .timeline()
    //         .fromTo(".home", { y: 150, duration: 1 }, { y: 0 });
    // });
  },
}
</script>
