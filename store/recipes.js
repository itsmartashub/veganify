export const state = () => ({
  apik: '',
  recipeNum: 50,
  activeRecipes: [],
  recipeItems: [],
  popularRecipeItems: [],
  recipeItem: {},
  smoothieItems: [],
  popularSmoothieItems: [],
  // searchedRecipeItems: [],
  categoryName: 'ALL RECIPES',
  categories: [
    { name: 'salad', items: [] },
    { name: 'soup', items: [] },
    { name: 'pasta', items: [] },
    { name: 'pizza', items: [] },
    { name: 'burger', items: [] },
  ],

  mergedRecipes: [],
  err402: false,
  apiErrMsg: '',
  recipeNotifyText: `
        <p>There is no required item 😶 </p>
        <p>Please, try something else 🍽️</p>`,
  randomTriviaItem: '',
  randomJokeItem: '',
})

export const actions = {
  async fetchRecipes({ commit, rootState }, { recipeNum }) {
    try {
      //! sa this.$axios.$get se dohvate podaci (data), a sa this.$axios.get (bez dollar sign ovo get) se dohvati response
      const response = await this.$axios.get(
        `recipes/complexSearch?apiKey=${rootState.apk.apik}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`
      )

      // console.log(response);

      const { results } = response.data
      commit('SET_RECIPES', results)

      if (response.statusText !== 'OK') throw new Error(`${response.status}`)
    } catch (error) {
      console.error(`${error} 💥💥💥`)
      throw error
    }
  },

  findRecipeByID({ state, commit }, recipeID) {
    console.log(recipeID)
    // if (!state.recipeItems[0]) return console.log('NEMA RECIPEITEMS !!!!')
    if (!state.mergedRecipes[0]) return console.log('NEMA mergedRecipes !!!!')

    // let selectedRecipe = state.recipeItems.find(
    //     recipe => recipe.id == recipeID
    // );
    // console.log(recipeID)

    let mergedArr = state.mergedRecipes
    let mergedRecLength = mergedArr.length
    let selectedRecipe

    for (let i = 0; i < mergedRecLength; i++) {
      if (+mergedArr[i].id === +recipeID) {
        selectedRecipe = mergedArr[i]
        break
      }
    }

    // let selectedRecipe = state.mergedRecipes.find(
    //   (recipe) => recipe.id == recipeID
    // )

    if (!selectedRecipe) return new Error('NEMA SELEKTOVANOG RECEPTA')

    commit('SET_RECIPE_ITEM', selectedRecipe)

    // console.log(state.recipeItem)

    // if (selectedRecipe) {
    //   commit('SET_RECIPE_ITEM', selectedRecipe)
    //   // debugger
    //   // return selectedRecipe
    // } else {
    //   console.log('NEMA ITEMA')
    // }
    // // else {
    // //   // selectedRecipe = rootState.smoothies.smoothieItems.find(
    // //   //     smoothie => smoothie.id == recipeID
    // //   // );
    // //   selectedRecipe = state.smoothieItems.find(
    // //     (smoothie) => smoothie.id == recipeID
    // //   )
    // //   commit('SET_RECIPE_ITEM', selectedRecipe)
    // // }
  },

  async fetchPopularRecipes({ commit, rootState }, { recipeNum }) {
    try {
      const response = await this.$axios.get(
        `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=the most popular&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`
      )

      const { results } = response.data
      commit('SET_POPULAR_RECIPES', results)

      if (response.statusText !== 'OK') throw new Error(`${response.status}`)
    } catch (error) {
      // console.log(err.response.data.code);
      // Promise.reject(err);
      console.error(`${error} 💥💥💥`)
      throw error
    }
  },

  findPopularRecipeByID({ state, commit }, recipeID) {
    let selectedRecipe = state.popularRecipeItems.find(
      (recipe) => recipe.id == recipeID
    )

    if (selectedRecipe) {
      commit('SET_RECIPE_ITEM', selectedRecipe)
      return selectedRecipe
    }
  },

  async fetchSearchedRecipes({ state, commit }, { searchedTerm }) {
    try {
      const response = await this.$axios.get(
        `recipes/complexSearch?apiKey=${state.apik}&query=${searchedTerm}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${state.recipeNum}`
      )

      // commit("SET_RECIPES", response.data.results);
      commit('SET_ACTIVE_RECIPES', response.data.results)
      commit('SET_CATEGORY_NAME', searchedTerm)
      commit('SET_SCROLL_INTO_VIEW', { _selector: '.recipecards' })

      if (response.statusText !== 'OK') throw new Error(`${response.status}`)
    } catch (error) {
      //TODO ako nema trazenog recepta da vidimo sta cemo
      // console.log(error.response.data.message);
      // Promise.reject(error);
      console.error(`${error} 💥💥💥`)
      commit('SET_API_ERR_MSG', error.message)
      throw error
    }
  },

  async fetchRecipesByCategoryName({ commit, rootState }, { categoryName }) {
    try {
      const response = await this.$axios.get(
        `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=${categoryName}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc`
      )

      const { results } = response.data

      commit('SET_RECIPES', results)
      commit('SET_CATEGORY_NAME', categoryName)
      commit('SET_SCROLL_INTO_VIEW', {
        _selector: '.categories > .hooper',
      })

      if (response.statusText !== 'OK') throw new Error(`${response.status}`)
    } catch (error) {
      console.error(`${error} 💥💥💥`)
      throw error
    }
  },

  async promiseAllFn({ state, commit }, apik) {
    let endpoints = [
      // All Recipes
      `recipes/complexSearch?apiKey=${state.apik}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${state.recipeNum}`,

      // Popular recipes
      `recipes/complexSearch?apiKey=${state.apik}&query=the most popular&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=3`,

      // Smoothies
      `recipes/complexSearch?apiKey=${state.apik}&query=smoothies&instructionsRequired=true&addRecipeInformation=true&ignorePantry=true&sortDirection=asc&number=${state.recipeNum}`,

      // Popular Smoothies
      `recipes/complexSearch?apiKey=${state.apik}&query=popular smoothies&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=3`,
    ]

    state.categories.forEach((cat) => {
      endpoints.push(
        `recipes/complexSearch?apiKey=${state.apik}&query=${cat.name}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${state.recipeNum}`
      )
    })

    await Promise.all(endpoints.map((endpoint) => this.$axios.get(endpoint)))
      .then((response) => {
        commit('SET_RECIPES', response[0].data.results)
        commit('SET_ACTIVE_RECIPES', response[0].data.results)
        commit('SET_POPULAR_RECIPES', response[1].data.results)
        commit('SET_SMOOTHIES', response[2].data.results)
        commit('SET_POPULAR_SMOOTHIES', response[3].data.results)

        commit('SET_CATEGORIES', [
          { name: 'salad', items: response[4].data.results },
          { name: 'soup', items: response[5].data.results },
          { name: 'pasta', items: response[6].data.results },
          { name: 'pizza', items: response[7].data.results },
          { name: 'burger', items: response[8].data.results },
        ])

        commit('SET_MERGED_RECIPES')
      })
      .catch((errors) => {
        commit('SET_API_ERR_MSG', errors.message)
      })
  },

  async fetchAllInOnce({ commit, dispatch, state, rootState }) {
    // let apik = process.env.API_SECRET_DEFAULT;
    commit('SET_APIK', process.env.API_SECRET_DEFAULT)

    await dispatch('promiseAllFn')

    console.error(state.apiErrMsg)

    if (state.apiErrMsg == 'Request failed with status code 402') {
      await dispatch('ifErr402', process.env.API_SECRET_RESERVE_1)
    }
    if (state.apiErrMsg == 'Request failed with status code 402') {
      await dispatch('ifErr402', process.env.API_SECRET_RESERVE_2)
    }
    if (state.apiErrMsg == 'Request failed with status code 402') {
      await dispatch('ifErr402', process.env.API_SECRET_RESERVE_3)
    }
    if (state.apiErrMsg == 'Request failed with status code 402') {
      await dispatch('ifErr402', process.env.API_SECRET_RESERVE_4)
    }
    if (state.apiErrMsg == 'Request failed with status code 402') {
      await dispatch('ifErr402', process.env.API_SECRET_RESERVE_5_SISSY)
    }
    if (state.apiErrMsg == 'Request failed with status code 402') {
      await dispatch('ifErr402', process.env.API_SECRET_RESERVE_6_SISSY)
    }
    if (state.apiErrMsg == 'Request failed with status code 402') {
      await dispatch('ifErr402', process.env.API_SECRET_RESERVE_7_SISSY)
    }
    if (state.apiErrMsg == 'Request failed with status code 402') {
      await dispatch('ifErr402', process.env.API_SECRET_RESERVE_8_SISSY)
    }
    if (state.apiErrMsg == 'Request failed with status code 402') {
      await dispatch('ifErr402', process.env.API_SECRET_RESERVE_9_SISSY)
    }
  },

  async ifErr402({ commit, dispatch }, newApik) {
    commit(
      'SET_NOTIFY',
      `
            <p>Guess you won't be <b>VEGANIFEED</b> today 😡 </p>
            <p>I'm so sorry, this is the free app and there're no more free <a href='https://spoonacular.com/food-api/' >Spoonacular API</a> calls 😭</p>
            <p>Is it impossible to give me the chance again tomorrow? 👩🏼‍🍳</p>
            <p>All these recipes and much more can be found on the <a href='https://spoonacular.com/recipes'>Spoonacular website</a> 🥕</p>
            `
    )
    commit('SET_402', true)

    commit('SET_APIK', newApik)

    commit('SET_API_ERR_MSG', '')
    await dispatch('promiseAllFn')
    commit('SET_402', false)
  },

  async fetchRandomTrivia({ commit, state }) {
    try {
      const response = await this.$axios.get(
        `food/trivia/random?apiKey=${state.apik}`
      )

      const { text } = response.data

      commit('SET_RANDOM_TRIVIA_ITEM', text)
    } catch (error) {
      console.error(`${error} 💥💥💥`)
      throw error
    }
  },
}

export const mutations = {
  SET_ACTIVE_RECIPES(state, activeRec) {
    state.activeRecipes = activeRec
  },
  SET_RECIPES(state, recipes) {
    state.recipeItems = recipes
  },
  SET_POPULAR_RECIPES(state, popularRecipes) {
    state.popularRecipeItems = popularRecipes
  },
  SET_RECIPE_ITEM(state, selectedRecipe) {
    state.recipeItem = selectedRecipe
  },

  SET_SMOOTHIES(state, smoothies) {
    state.smoothieItems = smoothies
  },
  SET_POPULAR_SMOOTHIES(state, popularSmoothies) {
    state.popularSmoothieItems = popularSmoothies
  },

  SET_MERGED_RECIPES(state) {
    // let concatArrs = state.recipeItems
    //     .concat(state.activeRecipes)
    //     .concat(state.smoothieItems)
    //     .concat(state.popularRecipeItems)
    //     .concat(state.popularSmoothieItems);

    let concatArrs = [
      ...state.recipeItems,
      ...state.activeRecipes,
      ...state.smoothieItems,
      ...state.popularRecipeItems,
      ...state.popularSmoothieItems,
    ]

    state.categories.forEach((cat) => {
      // cat.items.concat(concatArrs);
      concatArrs = concatArrs.concat(...cat.items)
    })
    // state.mergedRecipes = new Set(concatArrs);
    state.mergedRecipes = [...new Set(concatArrs)]
    // state.mergedRecipes = concatArrs

    // console.log(state.mergedRecipes)
  },

  // SET_SEARCHED_RECIPES(state, searchedRecipes) {
  //   state.searchedRecipeItems = searchedRecipes
  // },

  // setWinePairing(state, winePairing) {
  //   state.winePairingItems = winePairing
  // },

  SET_CATEGORY_NAME(state, categoryName) {
    state.categoryName = categoryName
  },
  SET_CATEGORIES(state, categoriesArr) {
    state.categories = categoriesArr
  },

  SET_RECIPES_BY_CATEGORY_NAME(state, categoryName) {
    let catArr = state.categories
    let catArrLength = catArr.length

    for (let i = 0; i < catArrLength; i++) {
      if (catArr[i].name == categoryName) {
        return (state.activeRecipes = catArr[i].items)
      }
    }
  },

  SET_RANDOM_TRIVIA_ITEM(state, randomTriviaText) {
    state.randomTriviaItem = randomTriviaText
  },

  SET_SCROLL_INTO_VIEW(state, { _selector }) {
    document.querySelector(_selector).scrollIntoView({ behavior: 'smooth' })
  },
  SET_NOTIFY(state, notify) {
    state.recipeNotifyText = notify
  },
  SET_402(state, err402) {
    state.err402 = err402
  },
  SET_API_ERR_MSG(state, errMsg) {
    state.apiErrMsg = errMsg
  },
  SET_APIK(state, newApik) {
    state.apik = newApik
  },

  // setRandomJokeItem(state, randomJoke) {
  //   state.randomJokeItem = randomJoke
  // },
}
