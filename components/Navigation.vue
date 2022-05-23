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
                        stroke-width="1.5"
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
                    viewBox="0 0 14.206 19.5"
                >
                    <path
                        id="bookmark-svgrepo-com_2_"
                        d="M18.706,12.471V22l-6.353-6.353L6,22V17.765M18.706,8.235V6.118A2.118,2.118,0,0,0,16.588,4H8.118A2.118,2.118,0,0,0,6,6.118v7.412"
                        transform="translate(-5.25 -3.25)"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
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
