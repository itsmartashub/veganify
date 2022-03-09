export const state = () => ({
    smoothieItems: [],
    smoothieBookmarks: [],
    popularSmoothieItems: []
});

export const actions = {
    async fetchSmoothies({ commit, rootState }, { recipeNum }) {
        return await this.$axios
            .$get(
                `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=smoothies&instructionsRequired=true&addRecipeInformation=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`
            )
            .then(data => {
                let smoothies = data.results;

                commit("SET_SMOOTHIES", smoothies);
                return smoothies;
            })
            .catch(err => Promise.reject(err));

        // try {
        //     const data = await this.$axios.$get(
        //         `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=smoothies&instructionsRequired=true&addRecipeInformation=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`
        //     );

        //     const smoothies = data.results;
        //     commit("SET_SMOOTHIES", smoothies);
        //     return smoothies;
        // } catch (error) {
        //     console.error(`${error} 💥💥💥`);
        //     throw error;
        // }
    },

    async fetchPopularSmoothies({ commit, rootState }, { recipeNum }) {
        return await this.$axios
            .$get(
                `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=popular smoothies&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`
            )
            .then(data => {
                let popularSmoothies = data.results;

                commit("SET_POPULAR_SMOOTHIES", popularSmoothies);
                return popularSmoothies;
            })
            .catch(err => Promise.reject(err));

        // try {
        //     const data = await this.$axios.$get(
        //         `recipes/complexSearch?apiKey=${rootState.apk.apik}&query=popular smoothies&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`
        //     );

        //     const popularSmoothies = data.results;

        //     commit("SET_POPULAR_SMOOTHIES", popularSmoothies);
        //     return popularSmoothies;
        // } catch (error) {
        //     console.error(`${error} 💥💥💥`);
        //     throw error;
        // }
    },

    async fetchSearchedSmoothieRecipes(
        { commit, rootState },
        { searchedTerm }
    ) {
        try {
            const data = await this.$axios.$get(
                `recipes/complexSearch?apiKey=${
                    rootState.apk.apik
                }&query=${searchedTerm} smoothie&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${30}`
            );

            commit("SET_SMOOTHIES", data.results);
            return data.results;
        } catch (error) {
            console.error(`${error} 💥💥💥`);
            throw error;
            // //TODO ako nema trazenog recepta da vidimo sta cemo
            // console.log(err.response.data.message);
            // Promise.reject(err);
        }
    }
};

export const mutations = {
    SET_SMOOTHIES(state, smoothies) {
        state.smoothieItems = smoothies;
    },
    SET_POPULAR_SMOOTHIES(state, popularSmoothies) {
        state.popularSmoothieItems = popularSmoothies;
    }
};
