<template>
  <article
    class="recipecard"
    @click="navigateToRecipeItem(recipe)"
    tabindex="0"
  >
    <figure class="recipecard__figure">
      <img :src="recipe.image" :alt="recipe.title" class="recipecard__img" />
    </figure>

    <div class="recipecard__body">
      <h3
        class="recipecard__category"
        v-if="!($route.name == 'bookmarks' || $route.name == 'smoothies')"
      >
        {{ category }}
      </h3>
      <h3 class="recipecard__category" v-if="$route.name == 'bookmarks'">
        bookmarks
      </h3>
      <h3 class="recipecard__category" v-if="$route.name == 'smoothies'">
        smoothies
      </h3>
      <h4 class="recipecard__title">
        {{ recipe.title | truncateTxt(35) }}
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

        <p>
          {{ recipe.readyInMinutes }}
          <span>min</span>
        </p>
      </div>

      <div
        class="recipecard__bookmark"
        @click.stop="toggleBookmark()"
        :class="{ 'recipecard__bookmark--saved': isBookmarked }"
      >
        <div class="recipecard__bookmark-svgs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 28.21 37.227"
            class="recipecard__bookmark-svg recipecard__bookmark-svg--outline"
          >
            <g id="Group_200" data-name="Group 200">
              <path
                id="Path_181"
                data-name="Path 181"
                d="M88.758,31.41A1.454,1.454,0,0,0,87.3,32.864a1.372,1.372,0,0,1-.408,1.014,1.578,1.578,0,0,1-1.1.44,1.336,1.336,0,0,1-.988-.415l-7.658-7.87a1.454,1.454,0,0,0-2.084,0L67.407,33.9a1.354,1.354,0,0,1-1,.415,1.552,1.552,0,0,1-1.1-.432,1.345,1.345,0,0,1-.4-1V5.817a2.912,2.912,0,0,1,2.908-2.908H84.4A2.912,2.912,0,0,1,87.3,5.817V25.666a1.454,1.454,0,1,0,2.908,0V5.817A5.823,5.823,0,0,0,84.4,0H67.819A5.823,5.823,0,0,0,62,5.817V32.889a4.266,4.266,0,0,0,1.27,3.072,4.464,4.464,0,0,0,3.113,1.266h.078a4.24,4.24,0,0,0,3.028-1.294l6.616-6.8,6.616,6.8a4.222,4.222,0,0,0,3.035,1.295,4.489,4.489,0,0,0,3.18-1.279,4.3,4.3,0,0,0,1.273-3.083A1.454,1.454,0,0,0,88.758,31.41Z"
                transform="translate(-62.002)"
              />
            </g>
          </svg>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 212.045 212.045"
            style="enable-background: new 0 0 212.045 212.045"
            xml:space="preserve"
            class="recipecard__bookmark-svg recipecard__bookmark-svg--filled"
          >
            <path
              d="M167.871,0H44.84C34.82,0,26.022,8.243,26.022,18v182c0,3.266,0.909,5.988,2.374,8.091c1.752,2.514,4.573,3.955,7.598,3.954
	c2.86,0,5.905-1.273,8.717-3.675l55.044-46.735c1.7-1.452,4.142-2.284,6.681-2.284c2.538,0,4.975,0.832,6.68,2.288l54.86,46.724
	c2.822,2.409,5.657,3.683,8.512,3.683c4.828,0,9.534-3.724,9.534-12.045V18C186.022,8.243,177.891,0,167.871,0z"
            />
          </svg>
        </div>
      </div>
    </footer>
  </article>
</template>

<script>
import randomLikes from '~/utils/randomLikes.js'
// import altSeo from '~/utils/altSeo.js'
// import shared from "~/mixins/shared";

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
    bookmarkCategory: {
      type: String,
      required: false,
    },
  },

  computed: {
    bookmarksIDs() {
      return this.$store.state.bookmarks.bookmarksIDs
    },
    isBookmarked() {
      return this.bookmarksIDs.includes(this.recipe.id)
    },
  },

  methods: {
    randomLikes,

    navigateToRecipeItem(recipe) {
      if (!recipe) return console.log(recipe)

      this.$router.push(`/recipe/${recipe.id}`)
    },

    toggleBookmark() {
      this.$store.dispatch('bookmarks/toggleBookmarkID', {
        recipeID: this.recipe.id,
        recipe: this.recipe,
      })
    },
  },
}
</script>
