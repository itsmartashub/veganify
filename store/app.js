export const state = () => ({
  isDark: false,
})

export const mutations = {
  SET_THEME(state) {
    state.isDark =
      JSON.parse(window.localStorage.getItem('veganify_isdark')) || false
  },
}
