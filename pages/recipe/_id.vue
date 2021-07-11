<template>
    <main class="recipeitem">
        <RecipeitemRecipe />
    </main>
</template>

<script>
export default {
    layout: "recipeitem"

    // computed: {
    // recipe() {
    //     return this.$store.state.recipes.recipeItem;
    // }
    // },

    // created() {
    //     return this.$store.commit(
    //         "recipes/setRecipeItem",
    //         this.$route.params.id
    //     );
    // }
};
</script>
