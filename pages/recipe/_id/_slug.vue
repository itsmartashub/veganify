<template>
    <div class="recipeitem">
        <header class="recipeitem__header">
            <transition name="fadeIn">
                <figure
                    class="recipeitem__header-mobilefigure"
                    v-if="isMountedFigure"
                >
                    <img
                        :src="recipeItem.image"
                        :alt="
                            recipeItem.title | altFormatting(recipeItem.title)
                        "
                    />
                </figure>
            </transition>

            <div class="recipeitem__header-top">
                <transition name="slideFromLeft">
                    <LazyBtnBack v-if="isMountedBtn" />
                </transition>

                <transition name="slideRotateFromRight">
                    <LazyBtnThemeToggle v-if="isMountedBtn" />
                </transition>
            </div>
        </header>

        <transition name="page">
            <LazyRecipeitemRecipe />
        </transition>
    </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
    layout: 'recipeitem',
    middleware: ['redirect'],
    mixins: [SEO],
    scrollToTop: true,

    data() {
        return {
            seo: {
                title: `Veganify | ${this.recipeItem?.title || 'Recipe Item'}`,
                description:
                    this.recipeItem?.summary?.replace(
                        /<\/?("[^"]*"|'[^']*'|[^>])*(>|$)/g,
                        ''
                    ) ||
                    `This is a vegetarian recipe about ${this.recipeItem?.title}.`,
                image: 'https://veganify.vercel.app/veganify-og.png',
            },
            isMountedBtn: false,
            isMountedFigure: false,
        }
    },

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
