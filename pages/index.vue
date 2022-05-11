<template>
    <div class="home" v-if="isMounted">
        <Navigation />

        <main class="middle">
            <Header />

            <transition name="waiting">
                <Categories v-if="isMounted && !err402 && !hideCategories" />
                <!-- <Categories v-if="false" /> -->
            </transition>

            <div class="scrollTo" id="scroll-to">
                <WaitingPlaceholder />
                <RecipeCards :category="categoryName" />
            </div>

            <NotificationList />
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
        hideCategories() {
            return this.$store.state.app.hideCategories
        },
    },
    created() {
        this.$store.commit('recipes/SET_ACTIVE_RECIPES', this.recipeItems)
        // this.$store.commit('pagination/SET_CURR_PAGE', 1)
        this.$store.commit('app/SET_HIDE_CATEGORIES', false)

        // console.log(this.$store.state.app.notifications.length)
        // this.$store.commit('app/CLEAR_NOTIFICATIONS')
        // console.log(this.$store.state.app.notifications.length)

        // if (process.client) {
        //     this.$store.dispatch('bookmarks/setBookmarkRecipesArray')
        //     this.$store.commit('recipes/SET_CATEGORY_NAME', 'ALL')
        // }
    },

    mounted() {
        this.$store.dispatch('bookmarks/setBookmarkRecipesArray')
        // this.$store.commit('recipes/SET_CATEGORY_NAME', 'ALL')
        this.$store.commit('recipes/SET_CATEGORY_NAME', 'ALL')

        this.$nextTick(() => (this.isMounted = true))
    },
}
</script>
