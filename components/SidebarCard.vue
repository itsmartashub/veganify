<template>
    <article
        tabindex="0"
        class="sidebarcard"
        @click="navigateToRecipeItem(sidebarRecipe)"
    >
        <div class="sidebarcard__left">
            <h4 class="sidebarcard__title">
                {{ sidebarRecipe.title.toLowerCase() | truncateTxt(35) }}
            </h4>

            <div class="sidebarcard__btns">
                <span class="sidebarcard__time btn__label">
                    {{ sidebarRecipe.readyInMinutes }} min
                </span>
                <span
                    class="sidebarcard__review btn__label--outline"
                    v-if="isReview"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="19.679"
                        height="18.859"
                        viewBox="0 0 19.679 18.859"
                    >
                        <defs>
                            <linearGradient
                                id="linear-gradient"
                                x1="0.5"
                                x2="0.5"
                                y2="1"
                                gradientUnits="objectBoundingBox"
                            >
                                <stop offset="0" stop-color="#00e7ab" />
                                <stop offset="1" stop-color="#01adbe" />
                            </linearGradient>
                        </defs>
                        <path
                            id="star"
                            d="M19.628,7.618a1.044,1.044,0,0,0-.9-.719l-5.68-.516L10.8,1.126a1.046,1.046,0,0,0-1.924,0L6.632,6.383.951,6.9a1.047,1.047,0,0,0-.594,1.83l4.293,3.765L3.385,18.071A1.044,1.044,0,0,0,4.94,19.2l4.9-2.928,4.9,2.928a1.046,1.046,0,0,0,1.556-1.13l-1.266-5.577L19.322,8.73a1.046,1.046,0,0,0,.307-1.112Zm0,0"
                            transform="translate(0 -0.491)"
                            fill="url(#linear-gradient)"
                        />
                    </svg>
                    {{ randomLikes(4, 5) }}
                </span>
            </div>
        </div>

        <figure class="sidebarcard__figure sidebarcard__right">
            <img
                :src="sidebarRecipe.image"
                :alt="sidebarRecipe.title | altFormatting(sidebarRecipe.title)"
                class="sidebarcard__img"
            />
        </figure>
    </article>
</template>

<script>
import randomLikes from '~/utils/randomLikes.js'

export default {
    props: {
        sidebarRecipe: {
            type: Object,
        },
    },
    data() {
        return {
            isReview: true,
        }
    },

    methods: {
        randomLikes,

        navigateToRecipeItem(recipe) {
            this.$store.dispatch('recipes/navigateToRecipe', recipe)
        },
    },
}
</script>

<style></style>
