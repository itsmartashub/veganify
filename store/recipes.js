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
  findRecipeByID({ state, commit }, recipeID) {
    console.log(recipeID)
    if (!state.mergedRecipes[0]) return console.log('NEMA mergedRecipes !!!!')

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
  },

  async fetchSearchedRecipes({ state, commit }, { searchedTerm, isSmoothie }) {
    let query = isSmoothie ? `${searchedTerm} smoothie` : searchedTerm

    try {
      const response = await this.$axios.get(
        `recipes/complexSearch?apiKey=${state.apik}&query=${query}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${state.recipeNum}`
      )

      // commit("SET_RECIPES", response.data.results);
      commit('SET_ACTIVE_RECIPES', response.data.results)
      commit('SET_CATEGORY_NAME', searchedTerm)
      commit('SET_SCROLL_INTO_VIEW', { _selector: '.recipecards' })

      if (response.statusText !== 'OK') throw new Error(`${response.status}`)
    } catch (error) {
      //TODO ako nema trazenog recepta da vidimo sta cemo
      console.error(`${error} 💥💥💥`)
      commit('SET_API_ERR_MSG', error.message)
      throw error
    }
  },

  async promiseAllFn({ state, commit, dispatch }, apik) {
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
    //! sa this.$axios.$get se dohvate podaci (data), a sa this.$axios.get (bez dollar sign ovo get) se dohvati response
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

        // commit('SET_MERGED_RECIPES')
        dispatch('mergeRecipes')
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

  setActiveRecipesByCategoryName({ state, commit }, categoryName) {
    let catArr = state.categories
    let catArrLength = catArr.length
    let newArr

    for (let i = 0; i < catArrLength; i++) {
      if (catArr[i].name == categoryName) {
        newArr = catArr[i].items
        commit('SET_ACTIVE_RECIPES', newArr)
        // state.activeRecipes = catArr[i].items
        break
      }

      commit('SET_CATEGORY_NAME', categoryName)
      commit('SET_SCROLL_INTO_VIEW', { _selector: '.categories > .hooper' })
    }
  },

  mergeRecipes({ state, commit }) {
    let concatArrs = [
      ...state.recipeItems,
      ...state.activeRecipes,
      ...state.smoothieItems,
      ...state.popularRecipeItems,
      ...state.popularSmoothieItems,
    ]

    state.categories.forEach((cat) => {
      concatArrs = concatArrs.concat(...cat.items)
    })
    commit('SET_MERGED_RECIPES', [...new Set(concatArrs)])
    // state.mergedRecipes = [...new Set(concatArrs)]
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

  SET_MERGED_RECIPES(state, mergedRecipes) {
    // let concatArrs = state.recipeItems
    //     .concat(state.activeRecipes)
    //     .concat(state.smoothieItems)
    //     .concat(state.popularRecipeItems)
    //     .concat(state.popularSmoothieItems);

    // let concatArrs = [
    //   ...state.recipeItems,
    //   ...state.activeRecipes,
    //   ...state.smoothieItems,
    //   ...state.popularRecipeItems,
    //   ...state.popularSmoothieItems,
    // ]

    // state.categories.forEach((cat) => {
    //   concatArrs = concatArrs.concat(...cat.items)
    // })
    // state.mergedRecipes = [...new Set(concatArrs)]
    state.mergedRecipes = mergedRecipes
  },

  // SET_SEARCHED_RECIPES(state, searchedRecipes) {
  //   state.searchedRecipeItems = searchedRecipes
  // },

  SET_CATEGORY_NAME(state, categoryName) {
    state.categoryName = categoryName
  },
  SET_ACTIVE_RECIPES_BY_CATEGORY_NAME(state, categoryName) {
    // state.categoryName = categoryName

    let catArr = state.categories
    let catArrLength = catArr.length

    for (let i = 0; i < catArrLength; i++) {
      if (catArr[i].name == categoryName) {
        state.activeRecipes = catArr[i].items
        break
      }
    }
  },
  SET_CATEGORIES(state, categoriesArr) {
    state.categories = categoriesArr
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
