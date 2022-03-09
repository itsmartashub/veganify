// import { TimelineMax, TweenMax, Power2, Back } from "gsap";
import { gsap } from "gsap";

// let gsap = this.$gsap;

// if (process.client) {
//     gsap.registerPlugin(GSDevTools);
// }

let tlNavigation = el => {
    // const tlNav = this.$gsap.timeline({
    const tlNav = gsap.timeline({
        defaults: {
            autoAlpha: 0,
            duration: 0.4,
            ease: "back",
            clearProps: true
        }
    });

    tlNav
        .from(el.querySelector(".navigation"), {
            duration: 0.8,
            xPercent: -100
        })
        .from(
            el.querySelector(".navigation .logo__svg"),
            { yPercent: -50 }
            // "<25%"
        )
        .from(
            el.querySelector(".navigation .logo__veganify"),
            { yPercent: 50 }
            // "<25%"
        )
        .from(
            el.querySelectorAll(".navigation__link svg"),
            { yPercent: 100, stagger: 0.2 }
            // "<25%"
        )
        .from(
            el.querySelector(".navigation__themes"),
            { yPercent: 100, rotate: 60 }
            // "<25%"
        );

    return tlNav;
};

let tlSidebar = el => {
    // const tlSide = this.$gsap.timeline({
    const tlSide = gsap.timeline({
        defaults: {
            autoAlpha: 0,
            duration: 0.5,
            ease: "back",
            clearProps: true
        }
    });

    tlSide
        .from(el.querySelector(".sidebar"), { xPercent: 100 })
        .from(el.querySelectorAll(".sidebar__title > *"), { yPercent: -100 }) //TODO overflow hidden
        .from(
            el.querySelectorAll(".sidebarcard"),
            {
                scale: 0,
                yPercent: 100,
                stagger: 0.15
            },
            "-=0.5"
        );

    return tlSide;
};
let tlHeader = el => {
    // const tlHead = this.$gsap.timeline({
    const tlHead = gsap.timeline({
        defaults: {
            autoAlpha: 0,
            duration: 0.8,
            ease: "back",
            clearProps: true
        }
    });

    tlHead
        // .from(el.querySelector(".header__form"), { yPercent: -100 })
        .from(el.querySelector(".header__search"), { scale: 0 })
        .from(el.querySelector(".header__form svg"), { rotation: 90 })
        .from(el.querySelectorAll(".header__title > *"), {
            autoAlpha: 0,
            yPercent: 100,
            stagger: 0.15
        });

    return tlHead;
};

let tlCategories = el => {
    // const tlCat = this.$gsap.timeline({
    const tlCat = gsap.timeline({
        defaults: {
            autoAlpha: 0,
            duration: 0.5,
            ease: "back",
            clearProps: true
        }
    });

    tlCat
        .from(el.querySelectorAll(".categories__title > *"), {
            yPercent: 100,
            stagger: 0.1
        })
        .from(el.querySelectorAll(".categories__category"), {
            // yPercent: -100,
            scale: 0,
            stagger: {
                each: 0.1,
                from: "center",
                ease: "back"
            }
        })
        .from(el.querySelectorAll(".categories .hooper-indicators > *"), {
            yPercent: -100,
            stagger: {
                each: 0.1,
                from: "center",
                ease: "back"
            }
        })
        .from(el.querySelector(".categories .hooper-prev"), { xPercent: 100 })
        .from(el.querySelector(".categories .hooper-next"), { xPercent: -100 });

    return tlCat;
};

let tlRecipes = el => {
    console.log(el);
    // const tlRec = this.$gsap.timeline({
    const tlRec = gsap.timeline({
        defaults: {
            autoAlpha: 0,
            duration: 0.5,
            ease: "back",
            clearProps: true
        }
    });

    tlRec
        .from(el.querySelector(".recipecards__title span"), {
            yPercent: -100
        })
        .from(
            el.querySelectorAll(".recipecard"),
            {
                scale: 0,
                // stagger: 0.15
                stagger: {
                    each: 0.1,
                    // from: "center",
                    // grid: "auto",
                    ease: "back"
                }
            },
            0
        );

    return tlRec;
};

const createTransitionMixin = (
    enterTLs = [],
    leaveTLs = [],
    position = "-=1"
) => {
    // export const createTransitionMixin = () => {
    return {
        transition: {
            css: false,
            mode: "out-in",

            enter(el, done) {
                // let enterTimeline = this.$gsap.timeline({ onComplete: done() });

                console.log(el);
                // console.log(this.$gsap);
                // console.log("this.$gsap");

                let enterTimeline = gsap.timeline({ onComplete: done() });

                enterTLs.forEach(tween => {
                    enterTimeline.add(tween(el), position);
                });

                // enterTimeline
                //     .add(tlNavigation)
                //     .add(tlSidebar)
                //     .add(tlMiddle)
                //     .add(tlRecipes);

                // // if (!this.$store.state.menuIsAnimating) {
                // if (!this.$store.state.pageIsAnimating) {
                //     let enterTimeline = this.$gsap.timeline();

                //     enterTLs.forEach(tween => {
                //         enterTimeline.add(tween());
                //     });
                //     enterTimeline.eventCallback("onComplete", done);
                // } else {
                //     done();
                // }
            },

            leave(el, done) {
                let leaveTimeline = gsap.timeline({ onComplete: done() });
                // let leaveTimeline = this.$gsap.timeline({ onComplete: done() });

                // leaveTimeline
                //     .add(tlNavigation)
                //     .add(tlSidebar)
                //     .add(tlMiddle)
                //     .add(tlRecipes);

                leaveTLs.forEach(tween => {
                    leaveTimeline.add(tween(el).reverse());
                });

                // leaveTimeline.reverse();
                // if (!this.$store.state.pageIsAnimating) {
                //     let leaveTimeline = this.$gsap.timeline();

                //     leaveTLs.forEach(tween => {
                //         leaveTimeline.add(tween());
                //     });
                //     leaveTimeline.eventCallback("onComplete", done);
                // } else {
                //     done();
                // }
            }
        }
    };
};

export let homePage = createTransitionMixin(
    [tlNavigation, tlSidebar, tlHeader, tlCategories, tlRecipes],
    [tlNavigation, tlSidebar, tlHeader, tlCategories, tlRecipes]
);

export let smoothiePage = createTransitionMixin(
    [tlNavigation, tlSidebar, tlHeader, tlRecipes],
    [tlNavigation, tlSidebar, tlHeader, tlRecipes]
);
export let bookmarksPage = createTransitionMixin(
    [tlNavigation, tlSidebar, tlRecipes],
    [tlNavigation, tlSidebar, tlRecipes]
);
// export let recipeitemPage = createTransitionMixin(

// );
