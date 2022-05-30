export default function ({ $cookiz, store }) {
    let theme = $cookiz?.get('theme') || 'light'
    store.commit('app/SET_THEME', theme)
}
