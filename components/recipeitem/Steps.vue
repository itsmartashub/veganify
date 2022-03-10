<template>
  <div class="steps">
    <template v-for="step in recipeItem.analyzedInstructions[0].steps">
      <div class="step" :key="step.step">
        <span class="step__count">{{ step.number }}</span>
        <span class="step__txt">
          {{ step.step }}
        </span>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  computed: {
    recipeItem() {
      return this.$store.state.recipes.recipeItem
    },
  },
}
</script>
