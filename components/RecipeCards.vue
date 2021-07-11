<template>
    <section class="recipecards">
        <h2 class="recipecards__title">{{ category }}</h2>

        <section class="recipecards__wrapper">
            <template v-for="recipe in recipes">
                <!-- <nuxt-link :to="`/recipeitem/${recipe.id}`" :key="recipe.id">
                    <RecipeCard :recipe="recipe" />
                </nuxt-link> -->
                <RecipeCard
                    :recipe="recipe"
                    :key="recipe.id"
                    :category="category"
                />
            </template>
        </section>
    </section>
</template>

<script>
export default {
    props: {
        recipes: {
            type: Array,
            required: true
        },
        category: {
            type: String,
            required: false
        }
    }
    // computed: {
    //     recipes() {
    //         return this.$store.state.recipes.recipeItems;
    //     }
    // }
    // methods: {
    //     navigateToRecipeItem(recipeID) {
    //         this.$store.commit("recipes/setRecipeItem", recipeID);
    //         this.$route.push(`/recipe/${recipeID}`);
    //     }
    // }
};
</script>

<style></style>
