<template>
    <p class="summary" v-html="recipeItem.summary"></p>
</template>

<script>
export default {
    computed: {
        recipeItem() {
            return this.$store.state.recipes.recipeItem
        },
    },
}
</script>
