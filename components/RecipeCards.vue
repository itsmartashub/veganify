<template>
    <div>
        <transition name="recipecards">
            <section
                class="recipecards"
                ref="recipecards"
                id="recipecards"
                v-if="!isWaiting && !err402 && !errNoRequredItem"
            >
                <h2
                    class="recipecards__title"
                    v-if="
                        !(
                            $route.name === 'bookmarks' ||
                            $route.name === 'smoothies'
                        )
                    "
                >
                    <span v-if="activeRecipes[0]">
                        {{
                            categoryName === 'ALL'
                                ? 'ALL RECIPES'
                                : categoryName
                        }}
                    </span>
                </h2>
                <h2
                    class="recipecards__title"
                    v-if="$route.name === 'bookmarks'"
                >
                    <span>BOOKMARKS</span>
                </h2>
                <h2
                    class="recipecards__title"
                    v-if="$route.name === 'smoothies'"
                >
                    <span>SMOOTHIES</span>
                </h2>

                <section
                    class="recipecards__wrapper"
                    v-if="!isWaiting && !err402 && !errNoRequredItem"
                >
                    <template v-for="activeRecipe in paginatedRecipes">
                        <RecipeCard
                            :recipe="activeRecipe"
                            :key="activeRecipe.id"
                            :category="categoryName"
                        />
                    </template>
                </section>

                <Pagination />
            </section>
        </transition>

        <transition name="recipecards">
            <Notify
                :notifyText="notifyText"
                v-if="
                    (err402 && !isWaiting) || (!activeRecipes[0] && !isWaiting)
                "
            />
        </transition>
    </div>
</template>

<script>
export default {
    computed: {
        categoryName() {
            return this.$store.state.recipes.categoryName
        },
        notifyText() {
            return this.$store.state.recipes.notifyText
        },
        paginatedRecipes() {
            return this.$store.getters['pagination/getPaginatedRecipes']
        },
        activeRecipes() {
            return this.$store.state.recipes.activeRecipes
        },
        bookmarksRecipes() {
            return this.$store.state.bookmarks.bookmarksRecipes
        },
        isWaiting() {
            return this.$store.state.app.isWaiting
        },
        err402() {
            return this.$store.state.recipes.err402
        },
        errNoRequredItem() {
            return this.$store.state.recipes.errNoRequredItem
        },
    },
}
</script>
