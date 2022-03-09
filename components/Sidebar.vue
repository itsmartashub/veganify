<template>
  <aside class="sidebar">
    <h3 class="sidebar__title" v-if="popularRecipes.length">
      <span>THE MOST</span>
      <span>POPULAR</span>
    </h3>
    <h3 class="sidebar__title" v-else>
      <span>RECIPES</span>
      <span>WANTED</span>
      <span>🕵🏻‍♀️</span>
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

      <!-- <p class="sidebar__norecipes" v-if="!popularRecipes.length">🕵🏻</p> -->
      <div class="sidebar__norecipes" v-if="!popularRecipes.length">
        <p>The plate looks so empty right now. 😶</p>
        <p>🍽️</p>
      </div>
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
