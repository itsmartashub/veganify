<template>
  <!-- <div>
            <h1>{{ recipe.id }}</h1>
            <h1>{{ this.$route.params.id }}</h1>
            <p>{{ recipe.title }}</p>
            <p>{{ recipe.image }}</p>
            <br /><br />

            <ul
                v-for="step in recipe.analyzedInstructions[0].steps"
                :key="step.step"
            >
                <li>{{ step.number }} {{ step.step }}</li>
                <br />
            </ul>

            <br /><br />

            <div
                v-for="(nesto, index) in recipe.nutrition.nutrients"
                :key="index"
            >
                <p
                    v-if="
                        nesto.name == 'Calories' ||
                        nesto.name == 'Fat' ||
                        nesto.name == 'Cholesterol' ||
                        nesto.name == 'Protein'
                    "
                >
                    {{ nesto.name }} {{ nesto.amount }} {{ nesto.unit }}
                </p>
            </div>

            <br /><br />

            <ol
                v-for="(extIngr, index) in recipe.extendedIngredients"
                :key="extIngr.original"
            >
                <li>
                    {{ ++index }} - {{ extIngr.original }} ||||
                    <strong>{{ extIngr.amount }}</strong> {{ extIngr.unit }}
                    <u>{{ extIngr.name }}</u>
                </li>
                <img
                    :src="
                        `https://spoonacular.com/cdn/ingredients_100x100/${extIngr.image}`
                    "
                    alt=""
                />
            </ol>

            <br /><br />

            <ol
                v-for="(missedIngr, index) in recipe.missedIngredients"
                :key="missedIngr.original"
            >
                <li>
                    {{ ++index }} - {{ missedIngr.original }} ||||
                    <strong>{{ missedIngr.amount }}</strong>
                    {{ missedIngr.unit }}
                    <u>{{ missedIngr.name }}</u>
                </li>
            </ol>

            <br /><br />

            <div>
                <h4>Sumarry</h4>
                <p v-html="recipe.summary"></p>
            </div>
        </div> -->

  <div class="recipeitem__content">
    <section class="recipeitem__left">
      <RecipeitemTags />

      <h1 class="recipeitem__title">
        {{ recipeItem.title }}
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

      <!-- <keep-alive> -->
      <component :is="activeComponent" />
      <!-- </keep-alive> -->
    </section>
  </div>
</template>

<script>
export default {
  props: {
    recipeItem: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      components: [
        'RecipeitemIngredients',
        'RecipeitemSteps',
        'RecipeitemSummary',
      ],
      componentIndex: 0,
    }
  },
  computed: {
    // recipeItem() {
    //   return this.$store.state.recipes.recipeItem
    // },
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
    // return this.$store.commit(
    //     "recipes/SET_RECIPE_ITEM",
    //     this.$route.params.id
    // );
    if (!this.recipeItem.extendedIngredients) {
      this.componentIndex = 1
    }
  },
}
</script>
