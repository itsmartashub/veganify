export const state = () => ({
    recipeItems: [
        {
            id: 1,
            title: "Instant Pot Crack Chicken ChiliChiliChiliChiliChiliChili",
            image: "/img/img-1.jpg",
            glutenFree: true,
            kcal: 120,
            review: 4.8,
            time: 20
        },
        {
            id: 2,
            title: "Instant Pot Crack Chicken Chili",
            image: "/img/img-2.jpg",
            glutenFree: false,
            kcal: 320,
            review: 4.1,
            time: 60
        },
        {
            id: 3,
            title: "Instant Pot Crack Chicken Chili",
            image: "/img/img-3.jpg",
            glutenFree: true,
            kcal: 120,
            review: 4.5,
            time: "15-30"
        },
        {
            id: 4,
            title: "Instant Pot Crack Chicken Chili",
            image: "/img/img-4.jpg",
            glutenFree: false,
            kcal: 90,
            review: 3.5,
            time: 55
        }
    ],
    popularRecipeItems: [],
    recipeItem: {},
    winePairingItems: [],
    categoryName: ""
    // bookmarkedItems: []
});

export const actions = {
    fetchRecipes({ commit }, recipeNum) {
        return this.$axios
            .$get(
                `recipes/complexSearch?apiKey=${process.env.AK}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`
            )
            .then(data => {
                let recipes = data.results;

                commit("setRecipes", recipes);
                return recipes;
            })
            .catch(err => Promise.reject(err));
    },

    fetchPopularRecipes({ commit }, recipeNum) {
        return this.$axios
            .$get(
                `recipes/complexSearch?apiKey=${process.env.AK}&query=the most popular&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNum}`
            )
            .then(data => {
                let popularRecipes = data.results;

                commit("setPopularRecipes", popularRecipes);
                return popularRecipes;
            })
            .catch(err => Promise.reject(err));
    },

    fetchRecipesByCategoryName({ commit }, categoryName) {
        return this.$axios
            .$get(
                `recipes/complexSearch?apiKey=${process.env.AK}&query=${categoryName}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc`
            )
            .then(data => {
                let recipes = data.results;

                commit("setRecipes", recipes);
                return recipes;
            })
            .catch(err => Promise.reject(err));
    },

    fetchWinePairingByCategoryName({ commit }, categoryName) {
        return this.$axios
            .$get(
                `food/wine/pairing?apiKey=${process.env.AK}&food=${categoryName}`
            )
            .then(data => {
                console.log(data);
                // let winePairing = data.results;

                // commit("setWinePairing", winePairing);
                // return winePairing;
            })
            .catch(err => Promise.reject(err));
    },

    fetchRandomTrivia() {
        return this.$axios
            .$get(`apiKey=${process.env.AK}/food/trivia/random`)
            .then(data => {
                console.log(data);
            });
    },
    fetchRandomJokes() {
        return this.$axios
            .$get(`apiKey=${process.env.AK}/food/jokes/random`)
            .then(data => {
                console.log(data);
            })
            .catch(err => Promise.reject(err));
    },

    fetchRecipeByID({ commit }, recipeID) {
        const selectedRecipe = state.recipeItems.find(
            recipe => recipe.id == recipeID
        );

        commit("setRecipeItem", selectedRecipe);
        return selectedRecipe;
    }

    // getBookmarkedItems({ commit }) {
    //     const bookmarkedItems = localStorage.getItem("bookmarked_items");

    //     if (bookmarkedItems) {
    //         commit("setBookmarkedItems", JSON.parse(bookmarkedItems));
    //         return bookmarkedItems;
    //     } else {
    //         localStorage.setItem("bookmarked_items", JSON.stringify([]));
    //         return [];
    //     }
    // },

    // toggleBookmark({ state, commit, dispatch }, recipeID) {
    //     if (state.bookmarkedItems.includes(recipeID)) {
    //         // remove post id
    //         const index = state.bookmarkedItems.findIndex(
    //             bid => bid === recipeID
    //         );
    //         commit("removeBookmarkedItem", index);
    //         dispatch("LSpersistBookmarkedRecipes");
    //         return recipeID;
    //     } else {
    //         // add recipeID
    //         commit("addBookmarkedItem", recipeID);
    //         dispatch("LSpersistBookmarkedRecipes");

    //         return recipeID;
    //     }
    // },

    // LSpersistBookmarkedRecipes({ state }) {
    //     localStorage.setItem(
    //         "bookmarked_items",
    //         JSON.stringify(state.bookmarkedItems)
    //     );
    // }
};

export const mutations = {
    setRecipes(state, recipes) {
        // console.log("Title: " + recipes[0].title);
        // console.log("Gluten free: " + recipes[0].glutenFree);
        // console.log("Likes: " + recipes[0].likes);
        // console.log("Image: " + recipes[0].image);
        // console.log("Ready time: " + recipes[0].readyInMinutes);
        // console.log("Spoonacular score: " + recipes[0].spoonacularScore);
        // // console.log("Kcal: " + recipes[0].nutrition.nutrients);

        // console.log("Kcal: " + recipes[0].nutrition.nutrients[0].amount);
        // console.log("steps: " + recipes[0].analyzedInstructions.steps);

        state.recipeItems = recipes;
    },
    setPopularRecipes(state, popularRecipes) {
        state.popularRecipeItems = popularRecipes;
    },

    // setRecipeItem(state, selectedRecipe) {
    setRecipeItem(state, recipeID) {
        const selectedRecipe = state.recipeItems.find(
            recipe => recipe.id == recipeID
        );
        state.recipeItem = selectedRecipe;

        // console.log(state.recipeItem.analyzedInstructions[0].steps);
    },
    setWinePairing(state, winePairing) {
        state.winePairingItems = winePairing;
    },

    setCategoryName(state, categoryName) {
        state.categoryName = categoryName;
    }

    // setBookmarkedItems(state, bookmarkedItems) {
    //     state.bookmarkedItems = bookmarkedItems;
    // },
    // addBookmarkedItem(state, recipeID) {
    //     state.bookmarkedItems.push(recipeID);
    // },
    // removeBookmarkedItem(state, index) {
    //     state.bookmarkedItems.splice(index, 1);
    // }
};
