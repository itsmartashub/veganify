// export const state = () => ({
//     veganRecipesData: [],
//     popularRecipesData: []
// });

// export const getters = {};

// export const mutations = {
//     updateVeganRecipesData: (state, data) => {
//         const formatRecipesData = data.results;
//         state.veganRecipesData = formatRecipesData;
//     }
// };

// export const actions = {
//     async getVeganRecipes({ state, commit }) {
//         const recipeNumber = 2;
//         try {
//             await fetch(
//                 `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.AK}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNumber}`,
//                 { headers: { "Content-Type": "application/json" } }
//             )
//                 .then(res => res.json())
//                 .then(data => {
//                     console.log(data.results[0]);
//                     commit("updateVeganRecipesData", data);
//                 });
//         } catch (err) {
//             console.log(err);
//         }
//     }
// };

export const state = () => {};

export const mutations = {};

export const actions = {};

export const getters = {};
