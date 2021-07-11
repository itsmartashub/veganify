<template>
    <article
        class="categories__category"
        :class="[isActive ? 'categories__category--active' : '']"
        @click="fetchRecipesByCategoryName(category.name)"
    >
        <div class="categories__icon" v-html="category.svg"></div>
        <div class="categories__name">{{ category.name }}</div>
        <div class="categories__counter">{{ category.count }}+</div>
    </article>
</template>

<script>
export default {
    props: {
        category: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            selectedCategory: "all",
            isActive: false
        };
    },

    computed: {
        // isActiveClass() {
        // return this.category.name == this.selectedCategory;
        // }
    },

    methods: {
        //    async fetchRecipesByCategoryName(categoryName) {
        fetchRecipesByCategoryName(categoryName) {
            // this.selectedCategory = categoryName;
            this.isActive = !this.isActive;
            console.log(categoryName);
            this.$store.commit("recipes/setCategoryName", categoryName);
            // await this.$store.dispatch('recipes/fetchRecipesByCategoryName', categoryName);
        }
    }
};
</script>

<style></style>
