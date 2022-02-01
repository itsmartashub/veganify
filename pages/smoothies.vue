<template>
    <div class="smoothies">
        <Navigation />

        <main class="middle">
            <Header />
            <RecipeCards :recipes="smoothies" />
        </main>

        <Sidebar :popularRecipes="popularSmoothies" />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Veganify | Smoothies",
            meta: [
                {
                    name: "description",
                    content: "This is a Veganify homepage BLABLA",
                    hid: "description"
                }
            ]
        };
    },

    async asyncData({ store }) {
        // console.log(store);
        await store.dispatch("smoothies/fetchSmoothies", { recipeNum: 20 });
        await store.dispatch("smoothies/fetchPopularSmoothies", {
            recipeNum: 3
        });
    },

    computed: {
        smoothies() {
            return this.$store.state.smoothies.smoothieItems;
        },
        popularSmoothies() {
            return this.$store.state.smoothies.popularSmoothieItems;
        }
        // recipes() {
        //   return this.$store.state.recipes.recipeItems
        // },
    }
};
</script>
