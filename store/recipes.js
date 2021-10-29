export const state = () => ({
  recipeItems: [],
  popularRecipeItems: [],
  recipeItem: {},
  searchedRecipeItems: [],
  categoryName: 'ALL RECIPES',
  recipeNotifySubtitle:
    'There is no required item. Please, try something else.',
  randomTriviaItem: '',
  randomJokeItem: '',
  // apik:
  //   process.env.API_SECRET_RESERVE ||
  //   process.env.API_SECRET_DEFAULT ||
  //   this.$config.apiReserve ||
  //   this.$config.apiDefault,
  // // apik: '',
})

export const actions = {
  async fetchRecipes({ commit, rootState }, { recipeNum }) {
    return await this.$axios
      .$get(
        `recipes/complexSearch?apiKey=${rootState.apk.apik}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`,
      )
      .then((data) => {
        let recipes = data.results

        commit('setRecipes', recipes)
        return recipes
      })
      .catch((err) => Promise.reject(err))
  },

  findRecipeByID({ state, commit, rootState }, recipeID) {
    let selectedRecipe = state.recipeItems.find(
      (recipe) => recipe.id == recipeID,
    )

    if (selectedRecipe) {
      commit('setRecipeItem', selectedRecipe)
      return selectedRecipe
    } else {
      selectedRecipe = rootState.smoothies.smoothieItems.find(
        (smoothie) => smoothie.id == recipeID,
      )
      commit('setRecipeItem', selectedRecipe)
    }
  },

  async fetchPopularRecipes({ commit, rootState }, { recipeNum }) {
    return await this.$axios
      .$get(
        `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=the most popular&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`,
      )
      .then((data) => {
        let popularRecipes = data.results

        commit('setPopularRecipes', popularRecipes)
        return popularRecipes
      })
      .catch((err) => {
        console.log(err.response.data.code)

        Promise.reject(err)
      })
  },

  findPopularRecipeByID({ state, commit }, recipeID) {
    let selectedRecipe = state.popularRecipeItems.find(
      (recipe) => recipe.id == recipeID,
    )

    if (selectedRecipe) {
      commit('setRecipeItem', selectedRecipe)
      return selectedRecipe
    }
  },

  async fetchSearchedRecipes({ commit, rootState }, { searchedTerm }) {
    return await this.$axios
      .$get(
        `recipes/complexSearch?apiKey=${
          rootState.apk.apik
        }&query=${searchedTerm}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${30}`,
      )
      .then((data) => {
        // commit('SET_SEARCHED_RECIPES', data.results)
        console.log(data.results)
        commit('setRecipes', data.results)
        commit('setCategoryName', searchedTerm)
        return data.results
      })
      .catch((err) => {
        //TODO ako nema trazenog recepta da vidimo sta cemo
        console.log(err.response.data.message)
        Promise.reject(err)
      })
  },

  async fetchRecipesByCategoryName({ commit, rootState }, { categoryName }) {
    return await this.$axios
      .$get(
        `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=${categoryName}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc`,
      )
      .then((data) => {
        let recipes = data.results

        commit('setRecipes', recipes)
        commit('setCategoryName', categoryName)

        return recipes
      })
      .catch((err) => Promise.reject(err))
  },

  async fetchRandomTrivia({ commit, rootState }) {
    return await this.$axios
      .$get(`food/trivia/random?apiKey=${rootState.apk.apik}`)
      .then((data) => {
        commit('setRandomTriviaItem', data.text)
      })
      .catch((err) => Promise.reject(err))
  },

  // setApik({ commit }) {
  //   commit('SET_APIK')
  // },
  // fetchRandomJoke({ commit }) {
  //   return (
  //     this.$axios
  //       // .$get(`apiKey=${$config.apiSecret}/food/trivia/random`)
  //       // .$get(`food/jokes/random?apiKey=41c76521f84a4260bb233f8d2efc4144`)
  //       // .$get(`food/jokes/random?apiKey=${process.env.API_SECRET_DEFAULT}`)
  //       .$get(`food/jokes/random?apiKey=1a7ab25a8a41433e8ea459f37557ee3d`)
  //       .then((data) => {
  //         console.log(data)
  //         commit('setRandomJokeItem', data.text)
  //       })
  //       .catch((err) => Promise.reject(err))
  //   )
  // },
}

export const mutations = {
  // SET_APIK(state) {
  //   state.apik =
  //     process.env.API_SECRET_RESERVE ||
  //     process.env.API_SECRET_DEFAULT ||
  //     this.$config.apiReserve ||
  //     this.$config.apiDefault
  // },

  setRecipes(state, recipes) {
    state.recipeItems = recipes
  },
  setPopularRecipes(state, popularRecipes) {
    state.popularRecipeItems = popularRecipes
  },
  setRecipeItem(state, selectedRecipe) {
    state.recipeItem = selectedRecipe
  },

  // SET_SEARCHED_RECIPES(state, searchedRecipes) {
  //   state.searchedRecipeItems = searchedRecipes
  // },

  // setWinePairing(state, winePairing) {
  //   state.winePairingItems = winePairing
  // },

  setCategoryName(state, categoryName) {
    state.categoryName = categoryName
  },

  setRandomTriviaItem(state, randomTriviaText) {
    state.randomTriviaItem = randomTriviaText
  },
  // setRandomJokeItem(state, randomJoke) {
  //   state.randomJokeItem = randomJoke
  // },
}
