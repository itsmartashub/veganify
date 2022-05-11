export default function ({ $cookiz, store, app, req }) {
    let theme = $cookiz?.get('theme') || 'light'
    // let theme = $cookiz?.get('theme')

    // let supportDarkMode =
    //     window.matchMedia('(prefers-color-scheme: dark)').matches === true

    // if (!theme && supportDarkMode) store.commit('app/SET_THEME', 'dark')
    // if (theme) store.commit('app/SET_THEME', theme)

    store.commit('app/SET_THEME', theme)

    // store.dispatch('app/setThemeBodyAttr')
}
