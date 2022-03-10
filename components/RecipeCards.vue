<template>
  <section class="recipecards" id="recipecards">
    <p>{{ scrollTop }}</p>
    <h2
      class="recipecards__title"
      v-if="!($route.name == 'bookmarks' || $route.name == 'smoothies')"
    >
      <span v-if="activeRecipes[0]"> {{ categoryName }}</span>
      <span v-else> OH, NO 😶 </span>
    </h2>
    <h2 class="recipecards__title" v-if="$route.name == 'bookmarks'">
      <span>BOOKMARKS</span>
    </h2>
    <h2 class="recipecards__title" v-if="$route.name == 'smoothies'">
      <span>SMOOTHIES</span>
    </h2>

    <TransitionGroup
      appear
      name="recipecard"
      mode="out-in"
      tag="section"
      class="recipecards__wrapper"
    >
      <template v-for="activeRecipe in activeRecipes">
        <!-- <nuxt-link :to="`/recipeitem/${recipe.id}`" :key="recipe.id">
                    <RecipeCard :recipe="recipe" />
                </nuxt-link> -->
        <RecipeCard
          :recipe="activeRecipe"
          :key="activeRecipe.id"
          :category="categoryName"
        />
      </template>
    </TransitionGroup>

    <!-- <div
      v-if="!activeRecipes[0]"
      class="recipecards__notifysubtitle"
      v-html="recipeNotifyText"
    ></div> -->

    <Notify :recipeNotifyText="recipeNotifyText" v-if="!activeRecipes[0]" />

    <transition name="recipecard">
      <ScrollToTop v-if="scrollTop" />
    </transition>
  </section>
</template>

<script>
export default {
  props: {
    activeRecipes: {
      type: Array,
      default: function () {
        return this.$store.state.recipes.activeRecipes
      },
    },
  },

  data() {
    return {
      scrollTop: false,
      observeEl: false,
      // showScrollTopClassName: "recipecards__notifysubtitle",
      // hideScrollTopClassName: "header",
      showScrollTopEl: null,
      hideScrollTopEl: null,
      toggleScrollTopEls: [],
    }
  },
  computed: {
    categoryName() {
      return this.$store.state.recipes.categoryName
    },
    recipeNotifyText() {
      return this.$store.state.recipes.recipeNotifyText
    },
  },
  methods: {
    toggleScrollInto() {
      // this.showScrollTopEl = this.$el.querySelector(
      //     ".recipecards__notifysubtitle p:nth-of-type(4)"
      // );
      this.showScrollTopEl = this.$el.querySelector(
        '.recipecard:nth-of-type(10)'
      )
      this.hideScrollTopEl = this.$el.querySelector('.recipecards__title')

      if (!this.showScrollTopEl || !this.hideScrollTopEl) return

      this.toggleScrollTopEls = [this.showScrollTopEl, this.hideScrollTopEl]

      let options = {
        // root: document.querySelector(".home.recipecards"),
        rootMargin: '0px',
        threshold: 0,
      }

      const observer = new IntersectionObserver((entries, observer) => {
        // console.log(entries);

        if (!entries[0]) return

        entries.forEach((entry) => {
          console.log(entry)
          console.log(entry.target)
          console.log(entry.isIntersecting)

          if (entry.isIntersecting) this.scrollTop = true
          else this.scrollTop = false

          // if (entry.isIntersecting) {
          // if (entry.target === this.showScrollTopEl)
          //     this.scrollTop = true;
          // if (entry.target === this.hideScrollTopEl)
          //     this.scrollTop = false;
          // }

          // if (
          //     entry.isIntersecting &&
          //     entry.target === this.showScrollTopEl
          // ) {
          //     this.scrollTop = true;
          //     console.log("TRUE");
          // }
          // if (entry.target === this.hideScrollTopEl) {
          //     this.scrollTop = false;
          //     console.log("FALSE");
          // }
        }, options)
      })

      this.toggleScrollTopEls.forEach((argument) => {
        observer.observe(argument)
      })
    },
  },

  mounted() {
    this.$nextTick(() => {
      // this.toggleScrollInto()
    })
  },
}
</script>

<style></style>
