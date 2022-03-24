export const state = () => ({
  isDark: false,
})

export const actions = {
  setThemeBodyAttr({ state }) {
    state.isDark
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme')
  },
}
export const mutations = {
  GET_THEME_FROM_LS(state) {
    state.isDark =
      JSON.parse(window.localStorage.getItem('veganify_isdark')) || false
  },

  SET_THEME(state, payload) {
    state.isDark = payload
  },

  SET_THEME_BODY_ATTR(state) {
    state.isDark
      ? document.body.setAttribute('data-theme', 'dark')
      : document.body.removeAttribute('data-theme')
  },
}
