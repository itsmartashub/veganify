export default function (ctx) {
  // console.log(ctx)
  // console.log(ctx.route)
  if (!ctx.route.params.id || !ctx.route.params.slug) return ctx.redirect('/')
  ctx.store.dispatch('recipes/findRecipeByID', ctx.route.params.id)
}
