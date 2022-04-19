export default (ctx) => {
    // if (process.client) {
    // console.log('CLIENT')
    ctx.store.commit('app/GET_THEME_FROM_LS')
    ctx.store.dispatch('app/setThemeBodyAttr')
    // }
}
