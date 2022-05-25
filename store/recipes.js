export const state = () => ({
    apik: '',
    recipeNum: 60,
    activeRecipes: [],
    recipeItems: [],
    popularRecipeItems: [],
    recipeItem: {},
    smoothieItems: [],
    popularSmoothieItems: [],
    categoryName: 'ALL',
    categories: [
        { name: 'salad', items: [] },
        { name: 'soup', items: [] },
        { name: 'pasta', items: [] },
        { name: 'pizza', items: [] },
        { name: 'burger', items: [] },
    ],

    mergedRecipes: [],
    err402: false,
    errNoRequredItem: false,
    apiErrMsg: '',
    notifyText: `<p>Please try again 🍽️</p>`,

    notifyText_err402: `
        <p>Guess you won't be <b>VEGANIFEED</b> today 😡 But, please, try to <b>refresh the App</b>. 🤞🏽</p>
        <p>I'm so sorry, this is the free app and there're no more free <a href='https://spoonacular.com/food-api/'>Spoonacular API</a> calls 😭</p>
        <p>Is it impossible to give me the chance again tomorrow? 👩🏼‍🍳</p>
        <p>All these recipes and much more can be found on the <a href='https://spoonacular.com/recipes' target="_blank" rel="noopener">Spoonacular website</a> 🥕</p>`,
    notifyText_noSearchItem: `
        <p>No recipes found for your query! 😶 </p>
        <p>Please try something else 🍽️</p>`,
    randomTrivia: '',
    apiks: [
        process.env.APIK_DEFAULT,
        process.env.APIK_1,
        process.env.APIK_2,
        process.env.APIK_3,
        process.env.APIK_4,
        process.env.APIK_5,
        process.env.APIK_6,
        process.env.APIK_7,
        process.env.APIK_8,
        process.env.APIK_9,
        process.env.APIK_10,
        process.env.APIK_11,
        process.env.APIK_12,
        process.env.APIK_13,
        process.env.APIK_14,

        process.env.APIK_15,
        process.env.APIK_16,
        process.env.APIK_17,
        process.env.APIK_18,
        process.env.APIK_19,
        process.env.APIK_20,
        process.env.APIK_21,
        process.env.APIK_22,
        process.env.APIK_23,
        process.env.APIK_24,
    ],
})

export const actions = {
    findRecipeByID({ state, commit }, recipeID) {
        if (!state.mergedRecipes[0]) return this.$router.push('/')

        let mergedArr = state.mergedRecipes
        let mergedRecLength = mergedArr.length
        let selectedRecipe

        for (let i = 0; i < mergedRecLength; i++) {
            if (+mergedArr[i].id === +recipeID) {
                selectedRecipe = mergedArr[i]
                break
            }
        }

        if (!selectedRecipe) return this.$router.push('/')

        commit('SET_RECIPE_ITEM', selectedRecipe)
    },

    async fetchSearchedRecipes(
        { state, commit, dispatch },
        { searchedTerm, isSmoothie = false }
    ) {
        let query = isSmoothie ? `${searchedTerm} smoothie` : searchedTerm

        try {
            const response = await this.$axios.get(
                `recipes/complexSearch?apiKey=${state.apik}&query=${query}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${state.recipeNum}`
            )

            if (response.status !== 200)
                throw new Error(
                    `RESPONSE STATUS IS NOT 200! IT IS: ${response.status}`
                )

            if (!response.data.results[0] && !state.err402) {
                commit('SET_NOTIFY', state.notifyText_noSearchItem)
                commit('SET_NO_REQUIRED_ITEM', true)
            }

            commit('SET_ACTIVE_RECIPES', response.data.results)
            commit('SET_CATEGORY_NAME', searchedTerm)
            dispatch('mergeRecipes')
        } catch (error) {
            //TODO ako nema trazenog recepta da vidimo sta cemo
            console.error(`💥💥💥 ${error.message} 💥💥💥`)
            commit('SET_API_ERR_MSG', error.message)

            if (state.apiErrMsg === 'Request failed with status code 402') {
                commit('SET_NOTIFY', state.notifyText_err402)
                commit('SET_402', true)
            }
        }
    },

    async promiseAllFn({ state, commit, dispatch }, apik) {
        let endpoints = [
            // [0] All Recipes
            `recipes/complexSearch?apiKey=${state.apik}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${state.recipeNum}`,

            // [1] Smoothies
            `recipes/complexSearch?apiKey=${state.apik}&query=smoothies&instructionsRequired=true&addRecipeInformation=true&ignorePantry=true&sortDirection=asc&number=${state.recipeNum}`,

            // [2] Trivia
            `food/trivia/random?apiKey=${state.apik}`,
        ]

        // [3], [4], [5], [6], [7] Categories
        state.categories.forEach((cat) => {
            endpoints.push(
                `recipes/complexSearch?apiKey=${state.apik}&query=${cat.name}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${state.recipeNum}`
            )
        })
        //! sa this.$axios.$get se dohvate podaci (data), a sa this.$axios.get (bez dollar sign ovo get) se dohvati response
        try {
            const response = await Promise.all(
                endpoints.map((endpoint) => this.$axios.get(endpoint))
            )

            commit('SET_RECIPES', response[0].data.results)
            commit('SET_ACTIVE_RECIPES', response[0].data.results)
            commit('SET_SMOOTHIES', response[1].data.results)
            commit('SET_RANDOM_TRIVIA', response[2].data.text)

            commit('SET_CATEGORIES', [
                { name: 'salad', items: response[3].data.results },
                { name: 'soup', items: response[4].data.results },
                { name: 'pasta', items: response[5].data.results },
                { name: 'pizza', items: response[6].data.results },
                { name: 'burger', items: response[7].data.results },
            ])

            commit('SET_POPULAR_RECIPES')

            dispatch('mergeRecipes')
        } catch (error) {
            commit('SET_API_ERR_MSG', error.message)
        }
    },

    async fetchAllInOnce({ commit, dispatch, state }) {
        commit('SET_APIK', process.env.APIK_DEFAULT)

        await dispatch('promiseAllFn')

        let api_keys = state.apiks
        let api_keys_length = api_keys.length

        for (let i = 0; i < api_keys_length; i++) {
            if (state.apiErrMsg === 'Request failed with status code 402') {
                // console.log(`start--${i + 1}`)
                await dispatch('ifErr402AllRecipes', api_keys[i])
                // console.log(`end--${i + 1}`)

                if (state.apiErrMsg === '') {
                    // console.log("state.apiErrMsg === ''")
                    commit('SET_402', false)
                    break
                }
            }
        }

        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--1')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_1
        //     )
        //     console.log('end--1')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--2')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_2
        //     )
        //     console.log('end--2')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--3')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_3
        //     )
        //     console.log('end--3')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--3')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_4
        //     )
        //     console.log('end--3')
        // }

        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--5')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_5_SISSY
        //     )
        //     console.log('end--5')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--6')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_6_SISSY
        //     )
        //     console.log('end--6')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--7')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_7_SISSY
        //     )
        //     console.log('end--7')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--8')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_8_SISSY
        //     )
        //     console.log('end--8')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--9')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_9_SISSY
        //     )
        //     console.log('end--9')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--10')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_10_SISSY
        //     )
        //     console.log('end--10')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--11')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_11_SISSY
        //     )
        //     console.log('end--11')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--12')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_12_SISSY
        //     )
        //     console.log('end--12')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--13')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_13_SISSY
        //     )
        //     console.log('end--13')
        // }
        // if (state.apiErrMsg === 'Request failed with status code 402') {
        //     console.log('start--14')
        //     await dispatch(
        //         'ifErr402AllRecipes',
        //         process.env.API_SECRET_RESERVE_14_SISSY
        //     )
        //     console.log('end--14')
        // }

        // if (state.apiErrMsg === '') {
        //     commit('SET_402', false)
        // }
    },

    async ifErr402AllRecipes({ state, commit, dispatch }, newApik) {
        commit('SET_NOTIFY', state.notifyText_err402)
        commit('SET_402', true)
        commit('SET_APIK', newApik)
        commit('SET_API_ERR_MSG', '')

        await dispatch('promiseAllFn')
    },

    mergeRecipes({ state, commit }) {
        let concatArrs = [
            ...state.recipeItems,
            ...state.activeRecipes,
            ...state.smoothieItems,
        ]

        state.categories.forEach((cat) => {
            concatArrs = concatArrs.concat(cat.items)
        })

        //? PRIMER 1: samo itemi sa unikatnim id, znatno najbrze
        const seen = new Set()
        const filteredArr = concatArrs.filter((el) => {
            const duplicate = seen.has(el.id)
            seen.add(el.id)
            return !duplicate
        })

        // //? PRIMER 2: samo itemi sa unikatnim id
        // console.time()
        // const unique = Array.from(
        //   new Set(concatArrs.map((concatItem) => concatItem.id))
        // ).map((id) => {
        //   return concatArrs.find((conItem) => conItem.id === id)
        // })
        // console.timeEnd()

        // //? PRIMER 3: samo itemi sa unikatnim id
        // console.time()
        // const filteredArr2 = concatArrs.reduce((acc, current) => {
        //   const x = acc.find((item) => item.id === current.id)
        //   if (!x) {
        //     return acc.concat([current])
        //   } else {
        //     return acc
        //   }
        // }, [])
        // console.timeEnd()

        commit('SET_MERGED_RECIPES', filteredArr)
    },

    navigateToRecipe(_, recipe) {
        let slug = recipe.title.trim().toLowerCase().replaceAll(' ', '-')

        this.$router.push(`/recipe/${recipe.id}/${slug}`)
    },
}

export const mutations = {
    SET_ACTIVE_RECIPES(state, activeRec) {
        state.activeRecipes = activeRec
    },
    SET_RECIPES(state, recipes) {
        state.recipeItems = recipes
    },
    SET_POPULAR_RECIPES(state) {
        let getRandomNum = (min, max) => {
            return Math.floor(Math.random() * (max - min) + min)
        }

        let random_1 = getRandomNum(1, 14)
        let random_2 = random_1 - 1
        let random_3 = random_1 + 1

        state.popularRecipeItems = [
            state.recipeItems[random_1],
            state.recipeItems[random_2],
            state.recipeItems[random_3],
        ]

        state.popularSmoothieItems = [
            state.smoothieItems[random_1],
            state.smoothieItems[random_2],
            state.smoothieItems[random_3],
        ]
    },
    SET_RECIPE_ITEM(state, selectedRecipe) {
        state.recipeItem = selectedRecipe
    },

    SET_SMOOTHIES(state, smoothies) {
        state.smoothieItems = smoothies
    },
    SET_MERGED_RECIPES(state, mergedRecipes) {
        state.mergedRecipes = mergedRecipes
    },

    SET_CATEGORY_NAME(state, categoryName) {
        state.categoryName = categoryName
    },
    SET_ACTIVE_RECIPES_BY_CATEGORY_NAME(state, categoryName) {
        let catArr = state.categories
        let catArrLength = catArr.length

        for (let i = 0; i < catArrLength; i++) {
            if (catArr[i].name === categoryName) {
                state.activeRecipes = catArr[i].items
                break
            }
        }
    },
    SET_CATEGORIES(state, categoriesArr) {
        state.categories = categoriesArr
    },
    SET_RANDOM_TRIVIA(state, randomTriviaText) {
        state.randomTrivia = randomTriviaText
    },
    SET_NOTIFY(state, notify) {
        state.notifyText = notify
    },
    SET_402(state, err402) {
        state.err402 = err402
    },
    SET_NO_REQUIRED_ITEM(state, errNoRequredItem) {
        state.errNoRequredItem = errNoRequredItem
    },
    SET_API_ERR_MSG(state, errMsg) {
        state.apiErrMsg = errMsg
    },
    SET_APIK(state, newApik) {
        state.apik = newApik
    },
}
