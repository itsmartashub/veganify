export default async function (ctx) {
    if (!ctx.route.params.id || !ctx.route.params.slug) return ctx.redirect('/')
    ctx.store.dispatch('recipes/findRecipeByID', ctx.route.params.id)
    // await ctx.store.dispatch('recipes/fetchRandomTrivia')
}
