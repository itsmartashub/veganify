<template>
    <main class="recipeitem">
        <div class="recipeitem__btn-wrapper">
            <button class="recipeitem__btn-back btn" @click="goBack()">
                <div class="icontainer--bggreen">
                    <svg
                        class="icon icon-arrowLeft icontainer__icon"
                        viewBox="0 0 24 24"
                        width="24px"
                        height="24px"
                    >
                        <path
                            d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
                        ></path>
                    </svg>
                </div>
                BACK
            </button>
        </div>

        <RecipeitemRecipe :recipeItem="recipeItem" />
    </main>
</template>

<script>
export default {
    layout: "recipeitem",

    async fetch() {
        await this.$store.dispatch("recipes/fetchRandomTrivia");
        // await this.$store.dispatch('recipes/fetchRandomJoke')
        // this.posts = await this.$http.$get('https://api.nuxtjs.dev/posts')
    },

    computed: {
        recipeItem() {
            return this.$store.state.recipes.recipeItem;
        }

        // randomTriviaItem() {
        //   return this.$store.state.recipes.randomTriviaItem
        // },
    },

    methods: {
        goBack() {
            //   window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            this.$router.back();
        }
    },

    created() {
        // return this.$store.dispatch('recipes/fetchRecipeByID', this.$route.params.id)
        this.$store.dispatch("recipes/findRecipeByID", this.$route.params.id);
        if (!this.recipeItem) {
            this.$store.dispatch(
                "recipes/findPopularRecipeByID",
                this.$route.params.id
            );
        }
    }
};
</script>
