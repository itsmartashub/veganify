export const state = () => ({
    smoothieItems: [],
    smoothieBookmarks: []
});

export const actions = {
    fetchSmoothies({ commit }, recipeNum) {
        return this.$axios
            .$get(
                `recipes/complexSearch?apiKey=${process.env.AK}&query=smoothies&instructionsRequired=true&addRecipeInformation=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`
            )
            .then(data => {
                let smoothies = data.results;

                commit("setRecipes", smoothies);
                return smoothies;
            })
            .catch(err => Promise.reject(err));
    }
};

export const mutations = {
    setSmoothies(state, smoothies) {
        state.smoothieItems = smoothies;
    },
    setBookmarks(state, bookmark) {
        state.smoothieBookmarks.push(bookmark);
    }
};
