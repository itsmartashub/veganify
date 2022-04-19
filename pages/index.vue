<template>
    <div class="home" v-if="isMounted">
        <Navigation />

        <main class="middle">
            <Header />
            <Categories v-if="isMounted && !err402" />
            <WaitingPlaceholder />
            <RecipeCards :category="categoryName" />
        </main>

        <Sidebar />
    </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
    mixins: [SEO],
    scrollToTop: false,

    data() {
        return {
            seo: {
                title: 'Veganify | Home',
                description: 'Website with nice vegetarian recipes.',
                image: 'https://veganify.vercel.app/veganify.png',
            },
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
        categoryName() {
            return this.$store.state.recipes.categoryName
        },
        err402() {
            return this.$store.state.recipes.err402
        },
    },
    created() {
        this.$store.commit('recipes/SET_ACTIVE_RECIPES', this.recipeItems)
        this.$store.commit('pagination/SET_CURR_PAGE', 1)
    },

    mounted() {
        this.$store.dispatch('bookmarks/setBookmarkRecipesArray')
        this.$store.commit('recipes/SET_CATEGORY_NAME', 'ALL')

        this.$nextTick(() => (this.isMounted = true))

        // if (window.matchMedia('(prefers-color-scheme: dark)').matched)
        //     window.localStorage.setItem(
        //         'veganify_isdark',
        //         JSON.stringify(
        //             window.matchMedia('(prefers-color-scheme: dark)').matched
        //         )
        //     )
        // console.log(window.matchMedia('(prefers-color-scheme: dark)'))
    },
}
</script>
