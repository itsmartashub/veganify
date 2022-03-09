<template>
    <div class="bookmarks" ref="bookmarks">
        <Navigation />

        <main class="middle" v-if="bookmarks[0]">
            <Header />
            <!-- <Categories /> -->
            <RecipeCards :activeRecipes="bookmarks" />
        </main>

        <main v-else class="middle nobookmarks">
            <div class="nobookmarks__svgwrapper">
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    x="0px"
                    y="0px"
                    viewBox="0 0 212.045 212.045"
                    style="enable-background: new 0 0 212.045 212.045;"
                    xml:space="preserve"
                >
                    <path
                        d="M167.871,0H44.84C34.82,0,26.022,8.243,26.022,18v182c0,3.266,0.909,5.988,2.374,8.091c1.752,2.514,4.573,3.955,7.598,3.954
	c2.86,0,5.905-1.273,8.717-3.675l55.044-46.735c1.7-1.452,4.142-2.284,6.681-2.284c2.538,0,4.975,0.832,6.68,2.288l54.86,46.724
	c2.822,2.409,5.657,3.683,8.512,3.683c4.828,0,9.534-3.724,9.534-12.045V18C186.022,8.243,177.891,0,167.871,0z"
                    />
                </svg>
            </div>

            <div>
                <h1 class="nobookmarks__title">
                    Such a empty! <span class="plate">🍽️</span>
                </h1>
                <h2 class="nobookmarks__subtitle">There is no bookmarks yet</h2>
            </div>
        </main>

        <Sidebar />

        <!-- <Preloader /> -->
    </div>
</template>

<script>
// import { bookmarksPage } from "~/mixins/transitions.js";
import { custom } from "~/utils/transitions.js";

export default {
    // mixins: [bookmarksPage],
    // transition: custom,

    // transition: {
    //     name: "bookmarksAnimation",
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
            title: "Veganify | Bookmarks",
            meta: [
                {
                    name: "description",
                    content: "This is a Veganify homepage BLABLA",
                    hid: "description"
                }
            ]
        };
    },

    data() {
        return {
            animation: null
        };
    },

    computed: {
        bookmarks() {
            return this.$store.state.bookmarks.bookmarksRecipes;
        }
        // bookmarkCategory() {
        //     return this.$store.state.bookmarks.bookmarkCategory;
        // }
    },

    mounted() {
        this.$store.dispatch("bookmarks/setBookmarkRecipesArray");

        // this.$nextTick(() => {
        //     if (process.client) {
        //         this.animation = this.$gsap.timeline({
        //             defaults: {
        //                 opacity: 0,
        //                 duration: 0.6,
        //                 ease: "back"
        //                 // clearProps: true
        //             }
        //         });

        //         this.animation
        //             .to(".bookmarks", {
        //                 autoAlpha: 1,
        //                 duration: 0,
        //                 ease: "none"
        //             })
        //             .from(".navigation", {
        //                 duration: 0.8,
        //                 xPercent: -100
        //             })
        //             .from(".navigation .logo__svg", { y: 20 }, "<25%")
        //             .from(".navigation .logo__veganify", { y: 20 }, "<25%")
        //             .from(
        //                 ".navigation__link svg",
        //                 { y: 20, stagger: 0.2 },
        //                 "<25%"
        //             )
        //             .from(
        //                 ".navigation__themes",
        //                 { yPercent: 100, rotate: 60 },
        //                 "<25%"
        //             );

        //         return this.animation.play();
        //     }
        // });

        // this.$nextTick(() => {
        //     this.$gsap
        //         .timeline()
        //         .fromTo(".bookmarks", { y: 150, duration: 1 }, { y: 0 });
        // });
    }
};
</script>
