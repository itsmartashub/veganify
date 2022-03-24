export const state = () => ({
  paginatedRecipes: [],
  currPage: 1,
  resultsPerPage: 12,
})

export const mutations = {
  SET_PAGINATED_RECIPES(state, payload) {
    state.paginatedRecipes = payload
  },
  SET_CURR_PAGE(state, payload) {
    state.currPage = payload
  },
}
export const actions = {
  setPaginatedRecipes({ commit, rootState }) {
    let start = (state.currPage - 1) * state.resultsPerPage
    let end = start + state.resultsPerPage

    const paginatedRecipes = rootState.recipes.activeRecipes.slice(start, end)

    commit('SET_PAGINATED_RECIPES', paginatedRecipes)

    // console.log(state.currPage)
    // console.log(state.resultsPerPage)
    // console.log(state.paginatedRecipes.length)
  },
}
export const getters = {
  getNumberOfPages(state, _, rootState) {
    return Math.ceil(
      rootState.recipes.activeRecipes.length / state.resultsPerPage
    )
  },
  getPaginatedRecipes(state, _, rootState) {
    let start = (state.currPage - 1) * state.resultsPerPage
    let end = start + state.resultsPerPage
    return rootState.recipes.activeRecipes.slice(start, end)
  },
}
