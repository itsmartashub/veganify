<template>
    <div class="home">
        <Navigation />

        <main class="middle">
            <Header />
            <Categories />
            <!-- <MainCards :recipes="recipes" /> -->
            <RecipeCards :recipes="recipes" category="CATEGORY" />
        </main>

        <Sidebar />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Veganify | Home",
            meta: [
                {
                    name: "description",
                    content: "This is a Veganify homepage BLABLA",
                    hid: "description"
                }
            ]
        };
    },
    data() {
        return {
            // recipes: [
            //     {
            //         id: 1,
            //         title:
            //             "Instant Pot Crack Chicken ChiliChiliChiliChiliChiliChili",
            //         image: "/img/img-1.jpg",
            //         glutenFree: true,
            //         kcal: 120,
            //         review: 4.8,
            //         time: 20
            //     },
            //     {
            //         id: 2,
            //         title: "Instant Pot Crack Chicken Chili",
            //         image: "/img/img-2.jpg",
            //         glutenFree: false,
            //         kcal: 320,
            //         review: 4.1,
            //         time: 60
            //     },
            //     {
            //         id: 3,
            //         title: "Instant Pot Crack Chicken Chili",
            //         image: "/img/img-3.jpg",
            //         glutenFree: true,
            //         kcal: 120,
            //         review: 4.5,
            //         time: "15-30"
            //     },
            //     {
            //         id: 4,
            //         title: "Instant Pot Crack Chicken Chili",
            //         image: "/img/img-4.jpg",
            //         glutenFree: false,
            //         kcal: 90,
            //         review: 3.5,
            //         time: 55
            //     }
            // ]
        };
    },

    computed: {
        recipes() {
            return this.$store.state.recipes.recipeItems;
        }
    },

    mounted() {
        return this.$store.dispatch("bookmarks/setBookmarkRecipesArray");
    }
};
</script>

<style></style>
