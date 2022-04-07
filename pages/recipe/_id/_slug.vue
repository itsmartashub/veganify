<template>
    <main class="recipeitem" ref="recipeitem">
        <div class="recipeitem__btn-wrapper">
            <transition name="fadeIn">
                <figure class="recipeitem__mobilefigure" v-if="isMountedFigure">
                    <img
                        :src="recipeItem.image"
                        :alt="
                            recipeItem.title | altFormatting(recipeItem.title)
                        "
                    />
                </figure>
            </transition>

            <transition name="slideLeft">
                <BtnBack v-if="isMountedBtn" />
            </transition>
        </div>

        <transition name="page">
            <RecipeitemRecipe />
        </transition>
    </main>
</template>

<script>
export default {
    layout: 'recipeitem',
    middleware: ['redirect'],

    data() {
        return {
            isMountedBtn: false,
            isMountedFigure: false,
        }
    },

    // async fetch({ store }) {
    //     await store.dispatch('recipes/fetchRandomTrivia')
    // },

    computed: {
        recipeItem() {
            return this.$store.state.recipes.recipeItem
        },
    },

    mounted() {
        this.$nextTick(() => {
            setTimeout(() => {
                this.isMountedFigure = true
            }, 1000)
            setTimeout(() => {
                this.isMountedBtn = true
            }, 1300)
        })
    },
}
</script>
