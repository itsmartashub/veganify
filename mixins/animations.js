import { gsap } from "gsap";

let tlNavigation = () => {
    // const tlNav = this.$gsap.timeline({
    const tlNav = gsap.timeline({
        defaults: {
            opacity: 0,
            duration: 0.6,
            ease: "back"
        }
    });

    tlNav
        .to(".home", {
            autoAlpha: 1,
            duration: 0,
            ease: "none"
        })
        .from(".navigation", {
            duration: 1,
            xPercent: -100
        })
        .from(".navigation .logo__svg", { y: 20 }, "<25%")
        .from(".navigation .logo__veganify", { y: -20 }, "<25%")
        .from(".navigation__link svg", { y: 20, stagger: 0.2 }, "<25%")
        .from(".navigation__themes", { yPercent: 100, rotate: 60 }, "<25%");

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
                let enterTimeline = gsap.timeline({ onComplete: done() });

                enterTLs.forEach(tween => {
                    enterTimeline.add(tween(el), position);
                });
            },

            leave(el, done) {
                let leaveTimeline = gsap.timeline({ onComplete: done() });

                leaveTLs.forEach(tween => {
                    leaveTimeline.add(tween(el).reverse());
                });
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
