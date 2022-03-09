export default function ({ store, route }) {
  store.dispatch('recipes/findRecipeByID', route.params.id)
  console.log(route)
}
