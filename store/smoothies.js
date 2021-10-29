export const state = () => ({
  smoothieItems: [],
  smoothieBookmarks: [],
  popularSmoothieItems: [],
  // apik: context.$config.apiDefault || process.env.API_SECRET_RESERVE,
  // apik: '',
})

export const actions = {
  async fetchSmoothies({ commit, rootState }, { recipeNum }) {
    // await dispatch('app/setApik', { root: true })

    return await this.$axios
      .$get(
        `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=smoothies&instructionsRequired=true&addRecipeInformation=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`,
      )
      .then((data) => {
        let smoothies = data.results

        commit('setSmoothies', smoothies)
        return smoothies
      })
      .catch((err) => Promise.reject(err))
  },

  async fetchPopularSmoothies({ commit, rootState }, { recipeNum }) {
    return await this.$axios
      .$get(
        `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=popular smoothies&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`,
      )
      .then((data) => {
        let popularSmoothies = data.results

        commit('SET_POPULAR_SMOOTHIES', popularSmoothies)
        return popularSmoothies
      })
      .catch((err) => Promise.reject(err))
  },

  async fetchSearchedSmoothieRecipes({ commit, rootState }, { searchedTerm }) {
    return await this.$axios
      .$get(
        `recipes/complexSearch?apiKey=${
          rootState.apk.apik
        }&query=${searchedTerm} smoothie&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${30}`,
      )
      .then((data) => {
        commit('setSmoothies', data.results)
        return data.results
      })
      .catch((err) => {
        //TODO ako nema trazenog recepta da vidimo sta cemo
        console.log(err.response.data.message)
        Promise.reject(err)
      })
  },
}

export const mutations = {
  // SET_APIK(state) {
  //   state.apik = this.$config.apiDefault || process.env.API_SECRET_RESERVE
  // },

  setSmoothies(state, smoothies) {
    state.smoothieItems = smoothies
  },
  setBookmarks(state, bookmark) {
    state.smoothieBookmarks.push(bookmark)
  },
  SET_POPULAR_SMOOTHIES(state, popularSmoothies) {
    state.popularSmoothieItems = popularSmoothies
  },
}
