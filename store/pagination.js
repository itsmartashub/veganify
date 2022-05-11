export const state = () => ({
    paginatedRecipes: [],
    currPage: 1,
    resultsPerPage: 12,
})

export const mutations = {
    SET_PAGINATED_RECIPES(state, payload) {
        let start = (state.currPage - 1) * state.resultsPerPage
        let end = start + state.resultsPerPage

        state.paginatedRecipes = payload.slice(start, end)
    },
    SET_CURR_PAGE(state, payload) {
        state.currPage = payload
    },
}
export const actions = {
    setPaginatedRecipes({ state, commit, rootState }, recipes) {
        let start = (state.currPage - 1) * state.resultsPerPage
        let end = start + state.resultsPerPage

        let paginatedRecipes = recipes.slice(start, end)
        commit('SET_PAGINATED_RECIPES', paginatedRecipes)
    },
}
export const getters = {
    getNumberOfPages(state, _, rootState) {
        return Math.ceil(
            rootState.recipes.activeRecipes.length / state.resultsPerPage
        )
    },
    getPaginatedRecipes(state, _, rootState) {
        let start = (state.currPage - 1) * state.resultsPerPage // 20
        // let end = start + state.resultsPerPage
        let end = state.currPage * state.resultsPerPage // po Jonasu

        return rootState.recipes.activeRecipes.slice(start, end)
    },
}
