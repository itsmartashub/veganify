<template>
  <div class="recipeitem__content" v-if="recipeItem && isMounted">
    <section class="recipeitem__left">
      <RecipeitemTags />

      <h1 class="recipeitem__title">
        <span>{{ recipeItem.title }}</span>
      </h1>

      <RecipeitemShowcase />
    </section>

    <section class="recipeitem__right">
      <header class="recipeitem__header">
        <p
          class="recipeitem__breadcrumb"
          :class="{ 'recipeitem--active': componentIndex === 0 }"
          @click="changeActiveComponent(0)"
          v-if="recipeItem.extendedIngredients"
        >
          Ingredients
        </p>
        <p
          class="recipeitem__breadcrumb"
          :class="{ 'recipeitem--active': componentIndex === 1 }"
          @click="changeActiveComponent(1)"
          v-if="recipeItem.analyzedInstructions"
        >
          Recipe steps
        </p>
        <p
          class="recipeitem__breadcrumb"
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
  </div>
</template>

<script>
export default {
  //   props: {
  //     recipeItem: {
  //       type: Object,
  //       required: true,
  //     },
  //   },
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
    // this.$store.commit('recipes/SET_RECIPE_ITEM', this.$route.params.id)

    if (!this.recipeItem?.extendedIngredients?.[0]) {
      this.componentIndex = 1
    }
    // console.log(this.recipeItem)
  },

  mounted() {
    this.$nextTick(() => (this.isMounted = true))
  },
}
</script>
