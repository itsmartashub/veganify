export const mutations = {
    tlNavigation() {
        const tlNav = this.$gsap.timeline({
            defaults: {
                opacity: 0,
                duration: 0.6,
                ease: "back",
                clearProps: "all"
            }
        });
        this.$gsap.to(".home", {
            autoAlpha: 1,
            duration: 0,
            ease: "none"
        });

        tlNav
            // .to(".home", {
            //     autoAlpha: 1,
            //     duration: 0,
            //     ease: "none",
            //     clearProps: "duration"
            // })
            .from(".navigation", {
                duration: 1,
                xPercent: -100
            })
            .from(".navigation .logo__svg", { y: 20 }, "<25%")
            .from(".navigation .logo__veganify", { y: -20 }, "<25%")
            .from(".navigation__link svg", { y: 20, stagger: 0.2 }, "<25%")
            .from(".navigation__themes", { yPercent: 100, rotate: 60 }, "<25%");

        return tlNav;
    },

    tlSidebar() {
        const tlSide = this.$gsap.timeline({
            defaults: {
                opacity: 0,
                duration: 0.6,
                ease: "back",
                clearProps: "all"
            }
        });

        tlSide
            .from(".sidebar", { xPercent: 100, duration: 1 }, 0)
            .from(
                ".sidebar__title span:nth-of-type(1)",
                { xPercent: 100 },
                "<35%"
            )
            .from(
                ".sidebar__title span:nth-of-type(2)",
                { xPercent: -100 },
                "<"
            )
            .from(
                ".sidebarcard",
                {
                    scale: 0,
                    yPercent: 100,
                    stagger: 0.15
                },
                "<"
            );

        return tlSide.play();
    },

    tlHeader() {
        const tlHead = this.$gsap.timeline({
            defaults: {
                opacity: 0,
                duration: 0.6,
                ease: "back",
                clearProps: "all"
            }
        });

        tlHead
            .from(".header__search", { scale: 0 })
            .from(".header__form svg", { rotation: 90 })
            .from(".header__title > *", {
                yPercent: 100,
                stagger: 0.15
            });

        return tlHead.play();
    },

    tlCategories() {
        const tlCat = this.$gsap.timeline({
            defaults: {
                opacity: 0,
                duration: 0.6,
                ease: "back",
                clearProps: "all"
            }
        });

        tlCat
            .from(".categories__title > *", {
                yPercent: 100,
                stagger: 0.1
            })
            .from(".categories__category", {
                scale: 0,
                stagger: {
                    each: 0.1,
                    from: "center",
                    ease: "back"
                }
            })
            .from(".categories .hooper-indicators > *", {
                yPercent: -100,
                stagger: {
                    each: 0.1,
                    from: "center",
                    ease: "back"
                }
            })
            .from(".categories .hooper-prev", { xPercent: 100 })
            .from(".categories .hooper-next", { xPercent: -100 });

        return tlCat.play();
    },

    tlRecipes() {
        const tlRec = this.$gsap.timeline({
            defaults: {
                opacity: 0,
                duration: 0.6,
                ease: "back",
                clearProps: "all"
            }
        });

        tlRec
            .from(".recipecards__title span", {
                yPercent: -100
            })
            .from(".recipecard", { scale: 0, stagger: 0.15 });

        return tlRec.play();
    }
};
