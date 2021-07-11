<template>
    <div class="bookmarks">
        <Navigation />

        <main class="middle">
            <Header />
            <Categories />
            <RecipeCards :recipes="bookmarks" category="bookmarks" />
        </main>

        <Sidebar />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: "Veganify | Bookmarks",
            meta: [
                {
                    name: "description",
                    content: "This is a Veganify homepage BLABLA",
                    hid: "description"
                }
            ]
        };
    },

    computed: {
        bookmarks() {
            return this.$store.state.bookmarks.bookmarksRecipes;
        }
    },

    mounted() {
        this.$store.dispatch("bookmarks/setBookmarkRecipesArray");
    }
};
</script>
