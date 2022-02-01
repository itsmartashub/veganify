export const state = () => ({
    recipeItems: [],
    popularRecipeItems: [],
    recipeItem: {},
    // searchedRecipeItems: [],
    categoryName: "ALL RECIPES",
    recipeNotifySubtitle: `
        <span>There is no required item 😶 </span>
        <span>Please, try something else 🍽️</span>`,
    randomTriviaItem: "",
    randomJokeItem: ""
    // apik:
    //   process.env.API_SECRET_RESERVE ||
    //   process.env.API_SECRET_DEFAULT ||
    //   this.$config.apiReserve ||
    //   this.$config.apiDefault,
    // // apik: '',
});

export const actions = {
    async fetchRecipes({ commit, rootState }, { recipeNum }) {
        return await this.$axios
            .$get(
                `recipes/complexSearch?apiKey=${rootState.apk.apik}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`
            )
            .then(data => {
                let recipes = data.results;

                commit("SET_RECIPES", recipes);
                return recipes;
            })
            .catch(err => Promise.reject(err));
    },

    findRecipeByID({ state, commit, rootState }, recipeID) {
        let selectedRecipe = state.recipeItems.find(
            recipe => recipe.id == recipeID
        );

        if (selectedRecipe) {
            commit("SET_RECIPE_ITEM", selectedRecipe);
            return selectedRecipe;
        } else {
            selectedRecipe = rootState.smoothies.smoothieItems.find(
                smoothie => smoothie.id == recipeID
            );
            commit("SET_RECIPE_ITEM", selectedRecipe);
        }
    },

    async fetchPopularRecipes({ commit, rootState }, { recipeNum }) {
        return await this.$axios
            .$get(
                `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=the most popular&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`
            )
            .then(data => {
                let popularRecipes = data.results;

                commit("SET_POPULAR_RECIPES", popularRecipes);
                return popularRecipes;
            })
            .catch(err => {
                console.log(err.response.data.code);

                Promise.reject(err);
            });
    },

    findPopularRecipeByID({ state, commit }, recipeID) {
        let selectedRecipe = state.popularRecipeItems.find(
            recipe => recipe.id == recipeID
        );

        if (selectedRecipe) {
            commit("SET_RECIPE_ITEM", selectedRecipe);
            return selectedRecipe;
        }
    },

    async fetchSearchedRecipes({ commit, rootState }, { searchedTerm }) {
        return await this.$axios
            .$get(
                `recipes/complexSearch?apiKey=${
                    rootState.apk.apik
                }&query=${searchedTerm}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${30}`
            )
            .then(data => {
                // commit('SET_SEARCHED_RECIPES', data.results)
                console.log(data.results);
                commit("SET_RECIPES", data.results);
                commit("SET_CATEGORY_NAME", searchedTerm);
                commit("SET_SCROLL_INTO_VIEW", { _selector: ".recipecards" });

                return data.results;
            })
            .catch(err => {
                //TODO ako nema trazenog recepta da vidimo sta cemo
                console.log(err.response.data.message);
                Promise.reject(err);
            });
    },

    async fetchRecipesByCategoryName({ commit, rootState }, { categoryName }) {
        return await this.$axios
            .$get(
                `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=${categoryName}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc`
            )
            .then(data => {
                let recipes = data.results;

                commit("SET_RECIPES", recipes);
                commit("SET_CATEGORY_NAME", categoryName);
                commit("SET_SCROLL_INTO_VIEW", {
                    _selector: ".categories > .hooper"
                });
                // document
                //   .querySelector('.categories > .hooper')
                //   .scrollIntoView({ behavior: 'smooth' })

                return recipes;
            })
            .catch(err => Promise.reject(err));
    },

    async fetchRandomTrivia({ commit, rootState }) {
        return await this.$axios
            .$get(`food/trivia/random?apiKey=${rootState.apk.apik}`)
            .then(data => {
                commit("SET_RANDOM_TRIVIA_ITEM", data.text);
            })
            .catch(err => Promise.reject(err));
    }

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
};

export const mutations = {
    // SET_APIK(state) {
    //   state.apik =
    //     process.env.API_SECRET_RESERVE ||
    //     process.env.API_SECRET_DEFAULT ||
    //     this.$config.apiReserve ||
    //     this.$config.apiDefault
    // },

    SET_RECIPES(state, recipes) {
        state.recipeItems = recipes;
    },
    SET_POPULAR_RECIPES(state, popularRecipes) {
        state.popularRecipeItems = popularRecipes;
    },
    SET_RECIPE_ITEM(state, selectedRecipe) {
        state.recipeItem = selectedRecipe;
    },

    // SET_SEARCHED_RECIPES(state, searchedRecipes) {
    //   state.searchedRecipeItems = searchedRecipes
    // },

    // setWinePairing(state, winePairing) {
    //   state.winePairingItems = winePairing
    // },

    SET_CATEGORY_NAME(state, categoryName) {
        state.categoryName = categoryName;
    },

    SET_RANDOM_TRIVIA_ITEM(state, randomTriviaText) {
        state.randomTriviaItem = randomTriviaText;
    },

    SET_SCROLL_INTO_VIEW(state, { _selector }) {
        document
            .querySelector(_selector)
            .scrollIntoView({ behavior: "smooth" });
    }
    // setRandomJokeItem(state, randomJoke) {
    //   state.randomJokeItem = randomJoke
    // },
};
