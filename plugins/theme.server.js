// export default function ({ $cookiz, store, app, req, $options }) {
export default function (ctx) {
    let theme = ctx.$cookiz?.get('theme') || 'light'
    // let theme = $cookiz?.get('theme')

    // let supportDarkMode =
    //     window.matchMedia('(prefers-color-scheme: dark)').matches === true

    // if (!theme && supportDarkMode) store.commit('app/SET_THEME', 'dark')
    // if (theme) store.commit('app/SET_THEME', theme)

    ctx.store.commit('app/SET_THEME', theme)
    // console.log(ctx)

    // store.dispatch('app/setThemeBodyAttr')
}
