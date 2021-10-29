<template>
  <div>
    <Nuxt />
    <p class="bp"></p>
  </div>
</template>

<script>
export default {
  // methods: {
  //     onloadHomeAnimation() {
  //         const tl = this.$gsap.timeline({
  //             defaults: {
  //                 autoAlpha: 0,
  //                 ease: "back.easeOut.config(1.7)",
  //                 clearProps: "all"
  //             }
  //         });
  //         tl.from(".header__form", 0.5, { yPercent: -50 })
  //             .from(".header__title", 0.5, { yPercent: 50 }, "-=.2")
  //             .from(".navigation", 0.75, { xPercent: -100 }, "-=1")
  //             .from(
  //                 ".navigation .logo__svg",
  //                 0.5,
  //                 { yPercent: 50, rotation: -270 },
  //                 "-=1"
  //             )
  //             .from(
  //                 ".navigation .logo__veganify",
  //                 0.75,
  //                 { yPercent: -200 },
  //                 "-=1"
  //             )
  //             .from(
  //                 ".navigation__link",
  //                 0.75,
  //                 { yPercent: 60, stagger: 0.2 },
  //                 "-=1"
  //             )
  //             .from(
  //                 ".navigation__moon",
  //                 1.2,
  //                 { rotation: 360, xPercent: 100 },
  //                 "-=1"
  //             )
  //             .from(".sidebar", 0.75, { xPercent: 100 }, "-=1.2")
  //             .from(".sidebar__title", 0.75, { yPercent: 60 }, "-=1")
  //             .from(
  //                 ".sidebarcard",
  //                 0.5,
  //                 {
  //                     yPercent: 50,
  //                     stagger: 0.1,
  //                     clearProps: "all"
  //                 },
  //                 "-=1"
  //             )
  //             .from(".categories__title", 0.5, { yPercent: -100 }, "-=1")
  //             .from(
  //                 ".categories .hooper-slide",
  //                 0.8,
  //                 {
  //                     yPercent: 20,
  //                     scale: 0.5,
  //                     stagger: 0.1,
  //                     clearProps: "none"
  //                 },
  //                 "-=2"
  //             )
  //             .from(
  //                 ".categories .hooper-indicators > li",
  //                 0.5,
  //                 { yPercent: 80, stagger: 0.1 },
  //                 "-=1.5"
  //             )
  //             .from(".recipecards__title", 0.5, { yPercent: 100 }, "-=1")
  //             .from(".recipecards__wrapper", 1, { yPercent: 100 }, "-=1");
  //         // return tl;
  //         tl.play(0);
  //     }
  // },
  // mounted() {
  //     setTimeout(() => {
  //         this.onloadHomeAnimation();
  //     }, 500);
  // }
}
</script>

<style>
/* .page-enter-active,
.page-leave-active {
    transition: all 0.7s ease;
}

.page-enter,
.page-leave-active {
    opacity: 0;
    transform: translateZ(0);
    backface-visibility: hidden;
} */
</style>
