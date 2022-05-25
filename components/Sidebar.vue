<template>
    <transition name="sidebar">
        <aside class="sidebar" v-show="isMounted">
            <h3 class="sidebar__title" v-if="popularRecipes[0]">
                <span>THE MOST</span>
                <span>POPULAR</span>
            </h3>
            <h3 class="sidebar__title" v-else>
                <span>RECIPES</span>
                <span>WANTED</span>
                <span>🕵🏻‍♀️</span>
            </h3>

            <section class="sidebar__body sidebarcards">
                <template v-for="sidebarRecipe in popularRecipes">
                    <SidebarCard
                        :key="sidebarRecipe.id + Date.now()"
                        :sidebarRecipe="sidebarRecipe"
                    />
                </template>
                <div class="sidebar__norecipes" v-if="!popularRecipes[0]">
                    <p>The plate looks so empty right now. 😶</p>
                    <p>🍽️</p>
                </div>
            </section>
        </aside>
    </transition>
</template>

<script>
export default {
    props: {
        popularRecipes: {
            type: Array,
            default: function () {
                return this.$store.state.recipes.popularRecipeItems
            },
        },
    },

    data() {
        return {
            isMounted: false,
        }
    },

    mounted() {
        this.$nextTick(() => (this.isMounted = true))
    },
}
</script>
