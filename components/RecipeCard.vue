<template>
    <transition name="recipecard" mode="out-in">
        <article
            class="recipecard"
            @click="navigateToRecipeItem(recipe)"
            tabindex="0"
        >
            <figure
                class="recipecard__figure"
                :class="{ 'recipecard__figure--bg-none': isImgLoaded }"
            >
                <img
                    v-show="isImgLoaded"
                    @load="onImgLoad"
                    :src="recipe.image"
                    :alt="recipe.title | altFormatting(recipe.title)"
                    class="recipecard__img"
                />
                <div
                    v-show="!isImgLoaded"
                    class="recipecard__skeleton"
                    :class="{
                        'recipecard__skeleton--animation-none': isImgLoaded,
                    }"
                ></div>
            </figure>

            <div class="recipecard__body">
                <h3
                    class="recipecard__category"
                    v-if="
                        !(
                            $route.name === 'bookmarks' ||
                            $route.name === 'smoothies'
                        )
                    "
                >
                    {{ category === 'ALL' ? 'ALL RECIPES' : category }}
                </h3>
                <h3
                    class="recipecard__category"
                    v-if="$route.name === 'bookmarks'"
                >
                    bookmarks
                </h3>
                <h3
                    class="recipecard__category"
                    v-if="$route.name === 'smoothies'"
                >
                    smoothies
                </h3>
                <h4 class="recipecard__title">
                    {{ recipe.title.toLowerCase() | truncateTxt(35) }}
                </h4>
            </div>

            <footer class="recipecard__footer">
                <div class="recipecard__min">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19.5"
                        height="19.5"
                        viewBox="0 0 19.5 19.5"
                    >
                        <path
                            id="clock-svgrepo-com"
                            d="M12,3A9,9,0,1,1,5.292,6M12,7v5l3,3"
                            transform="translate(-2.25 -2.25)"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="1.5"
                        />
                    </svg>

                    <p v-html="minsToHours(recipe.readyInMinutes)"></p>
                </div>

                <BtnBookmark :recipe="recipe" />
            </footer>
        </article>
    </transition>
</template>

<script>
import minsToHours from '~/utils/minsToHours.js'

export default {
    props: {
        recipe: {
            type: Object,
            required: true,
        },
        category: {
            type: String,
            required: false,
        },
    },

    data() {
        return {
            isImgLoaded: false,
        }
    },

    methods: {
        minsToHours,

        navigateToRecipeItem(recipe) {
            this.$store.dispatch('recipes/navigateToRecipe', recipe)
        },

        onImgLoad() {
            return (this.isImgLoaded = true)
        },
    },
}
</script>
