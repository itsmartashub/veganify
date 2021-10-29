export const state = () => ({
  apik: '',
})

export const actions = {
  setApik({ commit }, { apik }) {
    commit('SET_APIK', { apik })
  },
}

export const mutations = {
  SET_APIK(state, { apik }) {
    state.apik = apik
  },
}
