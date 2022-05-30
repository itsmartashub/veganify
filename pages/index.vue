<template>
    <!-- //! BEZ  v-if="isMounted" u .home nema animacije prilikom prvog dolazska na index i kad se vracamo iz recipeitem u index-->
    <!-- <div class="home" v-if="isMounted"> -->
    <div class="home">
        <Navigation />

        <main class="middle">
            <Header />

            <transition name="waiting">
                <!-- <Categories v-if="isMounted && !err402 && !hideCategories" /> -->
                <LazyCategories v-if="!err402 && !hideCategories" />
            </transition>

            <div class="scroll-to" id="scroll-to">
                <LazyWaitingPlaceholder />
                <RecipeCards :category="categoryName" />
            </div>

            <LazyNotificationList />
        </main>

        <Sidebar />
    </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
    mixins: [SEO],
    // scrollToTop: false,

    data() {
        return {
            seo: {
                title: 'Veganify | Home',
                description: `Vegetarian recipes for anyone planning on trying plant-based! Whether it's breakfast, lunch, dinner or snacks - we've got you!`,
                image: 'https://veganify.vercel.app/veganify-og.png',
            },
            // isMounted: false,
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
        hideCategories() {
            return this.$store.state.app.hideCategories
        },
    },
    created() {
        this.$store.commit('recipes/SET_ACTIVE_RECIPES', this.recipeItems)
        this.$store.commit('app/SET_HIDE_CATEGORIES', false)
    },

    mounted() {
        this.$store.dispatch('bookmarks/setBookmarkRecipesArray')
        this.$store.commit('recipes/SET_CATEGORY_NAME', 'ALL')

        // this.$nextTick(() => (this.isMounted = true))
    },
}
</script>
