export default (ctx) => {
  ctx.store.commit('app/GET_THEME_FROM_LS')
  ctx.store.dispatch('app/setThemeBodyAttr')
}
