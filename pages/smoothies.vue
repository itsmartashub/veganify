<template>
    <div class="smoothies" ref="smoothies">
        <Navigation />

        <main class="middle">
            <Header />
            <WaitingPlaceholder />
            <!-- <RecipeCards :recipes="smoothies" /> -->
            <RecipeCards />
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
                    'This is a Veganify webpage with vegetarian-friendly smoothie recipes',
                image: 'https://veganify.vercel.app/veganify.png',
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
