<template>
  <aside class="sidebar">
    <h3 class="sidebar__title">
      THE MOST
      <br />
      <span>POPULAR</span>
    </h3>

    <section class="sidebar__body sidebarcards">
      <!-- <template v-for="sidebarRecipe in recipes">
                <SidebarCard
                    :key="sidebarRecipe.img"
                    :sidebarRecipe="sidebarRecipe"
                />
            </template> -->
      <template v-for="sidebarRecipe in popularRecipes">
        <SidebarCard
          :key="sidebarRecipe.image"
          :sidebarRecipe="sidebarRecipe"
        />
      </template>
    </section>
  </aside>
</template>

<script>
export default {
  props: {
    popularRecipes: {
      type: Array,
      default: function () {
        return this.$store.state.recipes.popularRecipeItems
      },
    },
  },
}
</script>
