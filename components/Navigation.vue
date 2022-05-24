<template>
    <aside class="navigation">
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
                <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 25.623">
                    <path
                        d="M17.447,29.543a6.617,6.617,0,0,0-13.233,0H2.28A8.289,8.289,0,0,1,4.7,23.7a.856.856,0,0,1-.1-.088L2.75,21.762a5.31,5.31,0,0,1-1.567-3.783V4.691H1.008a.861.861,0,1,1,0-1.7H6.751V2.19A2.192,2.192,0,0,1,8.944,0h3.672A2.191,2.191,0,0,1,14.805,2.19V3h6.446a.861.861,0,1,1,0,1.7H2.878V17.985a3.631,3.631,0,0,0,1.071,2.584L5.8,22.415a.846.846,0,0,1,.164.232,8.672,8.672,0,0,1,9.573-.113.847.847,0,0,1,.1-.118l1.847-1.847a3.628,3.628,0,0,0,1.07-2.584V8.655a.848.848,0,0,1,1.263-.739.842.842,0,0,1,.417-.11h2.023a2.573,2.573,0,0,1,2.57,2.571v4.561q0,.021,0,.042a2.574,2.574,0,0,1-2.57,2.55H20.245v.454a5.316,5.316,0,0,1-1.567,3.783L16.856,23.59a8.292,8.292,0,0,1,2.526,5.953Zm4.8-13.708a.876.876,0,0,0,.875-.875V10.4q0-.024,0-.047a.877.877,0,0,0-.875-.849H20.245v6.333ZM13.107,2.989v-.8a.5.5,0,0,0-.493-.493H8.944a.5.5,0,0,0-.494.493v.8Zm-4.657,0h0ZM4.215,29.543h0Zm-1.935,0h0Z"
                        transform="translate(0 -0.001)"
                    />
                </svg> -->
                <!-- <svg
                    data-name="blender-svgrepo-com (1)"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 18.553 19.623"
                >
                    <g
                        id="Group_25"
                        data-name="Group 25"
                        transform="translate(0 2.238)"
                    >
                        <path
                            id="Path_36"
                            data-name="Path 36"
                            d="M346.137,137.128a.633.633,0,0,1-.633-.633v-3.409a.655.655,0,0,0-.654-.654h-1.512a.633.633,0,1,1,0-1.267h1.512a1.923,1.923,0,0,1,1.921,1.921v3.409A.633.633,0,0,1,346.137,137.128Z"
                            transform="translate(-328.217 -127.569)"
                        />
                        <path
                            id="Path_37"
                            data-name="Path 37"
                            d="M344.849,166.444h-1.512a.633.633,0,1,1,0-1.267h1.512a.655.655,0,0,0,.654-.654v-3.409a.633.633,0,1,1,1.267,0v3.409A1.923,1.923,0,0,1,344.849,166.444Z"
                            transform="translate(-328.217 -155.581)"
                        />
                        <path
                            id="Path_38"
                            data-name="Path 38"
                            d="M100.808,65.9a.631.631,0,0,1-.448-.186l-1.38-1.38a3.972,3.972,0,0,1-1.171-2.827V50.942a.633.633,0,1,1,1.267,0V61.511a2.713,2.713,0,0,0,.8,1.931l1.38,1.38a.633.633,0,0,1-.448,1.081Z"
                            transform="translate(-96.922 -50.309)"
                        />
                        <path
                            id="Path_39"
                            data-name="Path 39"
                            d="M290.145,143.154a.633.633,0,0,1-.448-1.081l1.38-1.38a2.713,2.713,0,0,0,.8-1.931v-6.973a.633.633,0,0,1,1.267,0v6.973a3.972,3.972,0,0,1-1.171,2.827l-1.38,1.38A.632.632,0,0,1,290.145,143.154Z"
                            transform="translate(-278.012 -127.559)"
                        />
                        <path
                            id="Path_40"
                            data-name="Path 40"
                            d="M93.755,51.576H78.627a.643.643,0,1,1,0-1.267H93.755a.643.643,0,1,1,0,1.267Z"
                            transform="translate(-77.871 -50.309)"
                        />
                    </g>
                    <path
                        id="Path_42"
                        data-name="Path 42"
                        d="M172.244,3.5h-4.75a.633.633,0,0,1-.633-.633V1.636A1.638,1.638,0,0,1,168.5,0h2.744a1.638,1.638,0,0,1,1.636,1.636V2.871A.633.633,0,0,1,172.244,3.5Zm-4.116-1.267h3.483v-.6a.37.37,0,0,0-.369-.369H168.5a.37.37,0,0,0-.369.369v.6h0Z"
                        transform="translate(-161.813)"
                    />
                    <path
                        id="Path_44"
                        data-name="Path 44"
                        d="M121.736,352.034H109.431a.739.739,0,0,1-.785-.682v-1.337c0-3.323,3.112-6.027,6.938-6.027s6.938,2.7,6.938,6.027v1.337A.739.739,0,0,1,121.736,352.034Zm-11.52-1.364h10.736v-.655c0-2.571-2.408-4.663-5.368-4.663s-5.368,2.092-5.368,4.663v.655Z"
                        transform="translate(-107.527 -328.41)"
                    />
                </svg> -->
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
</template>

<script>
export default {
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
}
</script>
