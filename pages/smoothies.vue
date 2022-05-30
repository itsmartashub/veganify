<template>
    <div class="smoothies">
        <Navigation />

        <main class="middle">
            <Header />

            <div class="scroll-to" id="scroll-to">
                <LazyWaitingPlaceholder />
                <LazyRecipeCards />
            </div>

            <LazyNotificationList />
        </main>

        <Sidebar :popularRecipes="popularSmoothies" />
    </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
    mixins: [SEO],

    data() {
        return {
            seo: {
                title: 'Veganify | Smoothies',
                description:
                    'Here are all the best vegan smoothie recipes to try: creamy and full of flavor! These plant based purees are ideal for breakfast and snacks.',
                image: 'https://veganify.vercel.app/veganify-og.png',
            },
        }
    },

    computed: {
        smoothies() {
            return this.$store.state.recipes.smoothieItems
        },
        popularSmoothies() {
            return this.$store.state.recipes.popularSmoothieItems
        },
    },

    created() {
        this.$store.commit('recipes/SET_ACTIVE_RECIPES', this.smoothies)
        this.$store.commit('pagination/SET_CURR_PAGE', 1)
    },
}
</script>
