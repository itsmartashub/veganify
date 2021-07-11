<template>
    <aside class="sidebar">
        <h3 class="sidebar__title">
            THE MOST <br />
            <span>POPULAR</span>
        </h3>

        <section class="sidebar__body sidebarcards">
            <!-- <template v-for="sidebarRecipe in recipes">
                <SidebarCard
                    :key="sidebarRecipe.img"
                    :sidebarRecipe="sidebarRecipe"
                />
            </template> -->
            <template v-for="sidebarRecipe in recipes">
                <SidebarCard
                    :key="sidebarRecipe.image"
                    :sidebarRecipe="sidebarRecipe"
                />
            </template>
        </section>
    </aside>
</template>

<script>
export default {
    data() {
        return {
            recipes: [
                {
                    title: "Instant Pot Crack Chicken Chili",
                    image: "/img/img-1.jpg",
                    isGlutenFree: true,
                    kcal: 120,
                    review: 4.8,
                    time: 20
                },
                {
                    title: "Instant Pot Crack Chicken Chili",
                    image: "/img/img-2.jpg",
                    isGlutenFree: false,
                    kcal: 320,
                    review: 4.1,
                    time: 60
                },
                {
                    title: "Instant Pot Crack Chicken Chili",
                    image: "/img/img-3.jpg",
                    isGlutenFree: true,
                    kcal: 120,
                    review: 4.5,
                    time: "15-30"
                }
            ]
        };
    },

    computed: {
        popularRecipes() {
            return this.$store.state.recipes.popularRecipeItems;
        }
    }
};
</script>

<style></style>
