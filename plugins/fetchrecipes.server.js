//* ======================== DEFINITIVNO =======================
// export default async ({ store }) => {
// ! kao mogli bismo ovo da radimo u index page na klajentu, ali zasto da teretimo klajent sajd, kad lkepo mozemo ovo da odradimo na serveru. zato kreiramo u plugin js fajl sa SERVER imenom u sebi. i sad moramo u nuxt.config.js da mu damo do znanja da taj fajl/plugin postoji
// await store.dispatch('apk/setApik', { apik: process.env.API_SECRET_RESERVE })
//   await store.dispatch('apk/setApik', { apik: process.env.API_SECRET_DEFAULT })
//   // await store.dispatch('recipes/fetchRecipes', { recipeNum: 35 })
//   await store.dispatch('recipes/fetchPopularRecipes', { recipeNum: 3 })
//   await store.dispatch('smoothies/fetchSmoothies', { recipeNum: 20 })
//   await store.dispatch('smoothies/fetchPopularSmoothies', { recipeNum: 3 })
// }

//* OVO
// export default async ({ store, $axios }) => {
//     await $axios
//         .get(
//             `recipes/complexSearch?apiKey=${process.env.API_SECRET_DEFAULT}&query=the most popular&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=3`
//         )
//         .then(response => {
//             let { results } = response.data.results;
//             store.commit("recipes/SET_POPULAR_RECIPES", results);

//             store.dispatch("apk/setApik", process.env.API_SECRET_DEFAULT);
//         })
//         .catch(err => {
//             console.log(err.response.data.code);

//             if (
//                 err.response.data.code == 402 ||
//                 err.response.data.code == 401
//             ) {
//                 store.dispatch("apk/setApik", process.env.API_SECRET_RESERVE);
//                 store.dispatch("recipes/fetchPopularRecipes", { recipeNum: 3 });
//             }
//         });
// };

export default async ({ store, $axios }) => {
    await store.dispatch("recipes/fetchAllInOnce");
};
