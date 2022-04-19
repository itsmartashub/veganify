<template>
    <main class="recipeitem__main" v-if="recipeItem && isMounted">
        <section class="recipeitem__left">
            <h1 class="recipeitem__left-title">{{ recipeItem.title }}</h1>

            <RecipeitemTags />

            <RecipeitemShowcase />
        </section>

        <section class="recipeitem__right">
            <header class="recipeitem__right-header">
                <p
                    class="recipeitem__right-breadcrumb"
                    :class="{ 'recipeitem--active': componentIndex === 0 }"
                    @click="changeActiveComponent(0)"
                    v-if="recipeItem.extendedIngredients"
                >
                    Ingredients
                </p>
                <p
                    class="recipeitem__right-breadcrumb"
                    :class="{ 'recipeitem--active': componentIndex === 1 }"
                    @click="changeActiveComponent(1)"
                    v-if="recipeItem.analyzedInstructions"
                >
                    Recipe steps
                </p>
                <p
                    class="recipeitem__right-breadcrumb"
                    :class="{ 'recipeitem--active': componentIndex === 2 }"
                    @click="changeActiveComponent(2)"
                    v-if="!recipeItem.extendedIngredients"
                >
                    Summary
                </p>
            </header>

            <transition
                :name="
                    activeComponent === 'RecipeitemIngredients'
                        ? 'ingredients'
                        : 'recipesteps'
                "
                mode="out-in"
            >
                <component :is="activeComponent" />
            </transition>
        </section>
    </main>
</template>

<script>
export default {
    data() {
        return {
            components: [
                'RecipeitemIngredients',
                'RecipeitemSteps',
                'RecipeitemSummary',
            ],
            componentIndex: 0,

            isMounted: false,
        }
    },
    computed: {
        recipeItem() {
            return this.$store.state.recipes.recipeItem
        },
        activeComponent() {
            return this.components[this.componentIndex]
        },
    },
    methods: {
        changeActiveComponent(index) {
            this.componentIndex = index
        },
    },
    created() {
        if (!this.recipeItem) return console.log('LLALALLALALLA')

        if (!this.recipeItem?.extendedIngredients?.[0]) {
            this.componentIndex = 1
        }
    },

    mounted() {
        this.$nextTick(() => (this.isMounted = true))
    },
}
</script>
