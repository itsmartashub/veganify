<template>
    <transition name="nav">
        <aside class="navigation" v-show="isMounted">
            <a
                href="/"
                class="navigation__logowrapper"
                aria-label="Go To The Index Page"
            >
                <Logo />
                <p class="logo__veganify">
                    vegan
                    <span>ify</span>
                </p>
            </a>

            <nav class="navigation__links">
                <NuxtLink
                    to="/"
                    class="navigation__link"
                    aria-label="Go To The Home Page"
                    data-link-name="home"
                    @click.native="clickOnLink('index')"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 19.5 19.806"
                    >
                        <path
                            d="M13,3l9,7.412V21H16.375m0-4.235a3.085,3.085,0,0,0-.989-2.246,3.526,3.526,0,0,0-4.773,0,3.085,3.085,0,0,0-.989,2.246V21H4V10.412L8.5,6.706"
                            transform="translate(-3.25 -1.944)"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </NuxtLink>
                <NuxtLink
                    to="/smoothies"
                    class="navigation__link"
                    aria-label="Go To The Smoothies Page"
                    data-link-name="smoothies"
                    @click.native="clickOnLink('smoothies')"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 21.195 24.543"
                    >
                        <path
                            d="M17.447,29.543a6.617,6.617,0,0,0-13.233,0H2.28a8.3,8.3,0,0,1,2.648-6.068L3.3,22.135a4.028,4.028,0,0,1-1.567-3.114V7.691H1.184a.778.778,0,0,1-.806-.375.912.912,0,0,1,0-.944.778.778,0,0,1,.806-.376H7V5.189A2.191,2.191,0,0,1,9.192,3h3.671a2.193,2.193,0,0,1,2.19,2.189v.806h4.953a.778.778,0,0,1,.806.376.916.916,0,0,1,0,.944.779.779,0,0,1-.806.375H3.428V19.024A2.749,2.749,0,0,0,4.5,21.152l1.658,1.365a8.676,8.676,0,0,1,9.136-.133l1.45-1.165a2.659,2.659,0,0,0,1.071-2.075V11.652a.74.74,0,0,1,.685-.668.673.673,0,0,1,.13-.013h1.68a2.195,2.195,0,0,1,2.134,2.246V17.2c0,.016,0,.032,0,.048a2.078,2.078,0,0,1-2.133,1.925h-.8a3.9,3.9,0,0,1-1.567,3l-1.4,1.121a8.307,8.307,0,0,1,2.836,6.241Zm2.86-11.685a.706.706,0,0,0,.727-.68v-3.96a.748.748,0,0,0-.726-.765h-.8v5.405ZM13.354,5.989v-.8a.5.5,0,0,0-.494-.494H9.192a.5.5,0,0,0-.494.494v.8Zm-4.657,0h0ZM4.215,29.543h0Zm-1.935,0h0Z"
                            transform="translate(-0.247 -3.001)"
                        />
                    </svg>
                </NuxtLink>
                <NuxtLink
                    to="/bookmarks"
                    class="navigation__link"
                    aria-label="Go To The Bookmarks Page"
                    data-link-name="bookmarks"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 14.206 19.6"
                    >
                        <path
                            d="M18.706,12.471V22l-6.353-6.353L6,22V17.765M18.706,8.235V6.118A2.118,2.118,0,0,0,16.588,4H8.118A2.118,2.118,0,0,0,6,6.118v7.412"
                            transform="translate(-5.25 -3.25)"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                </NuxtLink>
            </nav>

            <BtnThemeToggle />
        </aside>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            isMounted: false,
        }
    },
    computed: {
        activeRecipes() {
            return this.$store.state.recipes.activeRecipes
        },
        recipeItems() {
            return this.$store.state.recipes.recipeItems
        },
        smoothieItems() {
            return this.$store.state.recipes.smoothieItems
        },
    },
    methods: {
        clickOnLink(linkName) {
            if (this.$route.name !== linkName) return
            this.$store.commit('pagination/SET_CURR_PAGE', 1)
            this.$store.commit('recipes/SET_NO_REQUIRED_ITEM', false)

            if (linkName === 'index') {
                this.$store.commit(
                    'recipes/SET_ACTIVE_RECIPES',
                    this.recipeItems
                )
                this.$store.commit('recipes/SET_CATEGORY_NAME', 'ALL')
                this.$store.commit('app/SET_HIDE_CATEGORIES', false)
                this.$store.commit('app/SET_SCROLL_INTO_VIEW', {
                    _selector: '.home .header',
                })
                return
            }
            if (linkName === 'smoothies') {
                this.$store.commit(
                    'recipes/SET_ACTIVE_RECIPES',
                    this.smoothieItems
                )
                this.$store.commit('recipes/SET_CATEGORY_NAME', 'SMOOTHIES')
                this.$store.commit('app/SET_SCROLL_INTO_VIEW', {
                    _selector: '.smoothies .header',
                })
                return
            }
        },
    },

    mounted() {
        this.$nextTick(() => (this.isMounted = true))
    },
}
</script>
