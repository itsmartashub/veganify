<template>
    <section class="maincards">
        <h2 class="maincards__title">ALL <span>RECIPES</span></h2>

        <section class="maincards__wrapper">
            <template v-for="recipe in recipes">
                <!-- <nuxt-link :to="`/recipeitem/${recipe.id}`" :key="recipe.id">
                    <MainCard :recipe="recipe" />
                </nuxt-link> -->
                <MainCard :recipe="recipe" :key="recipe.id" />
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
