<template>
  <div class="smoothies" ref="smoothies">
    <Navigation />

    <main class="middle">
      <Header />
      <RecipeCards :activeRecipes="smoothies" />
    </main>

    <Sidebar :popularRecipes="popularSmoothies" />

    <!-- <Preloader /> -->
  </div>
</template>

<script>
// import { smoothiePage } from "~/mixins/transitions.js";

import { custom } from '~/utils/transitions.js'

export default {
  // mixins: [smoothiePage],

  // transition: custom,

  // transition: {
  //     name: "smoothieAnimation",
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
