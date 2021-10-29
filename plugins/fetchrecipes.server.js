// export default async ({ store }) => {
//     await store.dispatch("getVeganRecipes");
// };

// export default function(context, inject) {
//     const headers = { "Content-Type": "application/json" };

//     inject("getveganrecipes", {
//         getVeganRecipes
//     });

//     async function getVeganRecipes() {
//         const recipeNumber = 2;
//         try {
//             return unWrap(
//                 await fetch(
//                     `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.AK}&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=${recipeNumber}`
//                 ),
//                 { headers }
//             );
//         } catch (error) {
//             return getErrorResponse(error);
//         }
//     }

//     async function unWrap(response) {
//         const json = await response.json();
//         const { ok, status, statusText } = response;
//         return {
//             json,
//             ok,
//             status,
//             statusText
//         };
//     }

//     function getErrorResponse(error) {
//         return {
//             ok: false,
//             status: 500,
//             statusText: error.message,
//             json: {}
//         };
//     }
// }

//* ======================== DEFINITIVNO =======================
// export default async ({ store }) => {
//   // ! kao mogli bismo ovo da radimo u index page na klajentu, ali zasto da teretimo klajent sajd, kad lkepo mozemo ovo da odradimo na serveru. zato kreiramo u plugin js fajl sa SERVER imenom u sebi. i sad moramo u nuxt.config.js da mu damo do znanja da taj fajl/plugin postoji
//   // await store.dispatch('apk/setApik', { apik: process.env.API_SECRET_RESERVE })
//   await store.dispatch('apk/setApik', { apik: process.env.API_SECRET_DEFAULT })
//   // await store.dispatch('recipes/fetchRecipes', { recipeNum: 35 })
//   await store.dispatch('recipes/fetchPopularRecipes', { recipeNum: 3 })
//   await store.dispatch('smoothies/fetchSmoothies', { recipeNum: 20 })
//   await store.dispatch('smoothies/fetchPopularSmoothies', { recipeNum: 3 })
// }
export default async ({ store, $axios }) => {
  await $axios
    .$get(
      `recipes/complexSearch?apiKey=${process.env.API_SECRET_DEFAULT}&query=the most popular&diet=vegetarian&instructionsRequired=true&fillIngredients=true&addRecipeInformation=true&addRecipeNutrition=true&ignorePantry=true&sortDirection=asc&number=3`,
    )
    .then((data) => {
      let popularRecipes = data.results

      store.commit('recipes/setPopularRecipes', popularRecipes)

      store.dispatch('apk/setApik', { apik: process.env.API_SECRET_DEFAULT })

      // store.dispatch('smoothies/fetchSmoothies', { recipeNum: 20 })
      // store.dispatch('smoothies/fetchPopularSmoothies', { recipeNum: 3 })
    })
    .then((response) => {
      store.dispatch('smoothies/fetchSmoothies', { recipeNum: 20 })
      store.dispatch('smoothies/fetchPopularSmoothies', { recipeNum: 3 })
    })
    .catch((err) => {
      console.log(err.response.data.code)

      if (err.response.data.code == 402 || err.response.data.code == 401) {
        store.dispatch('apk/setApik', {
          apik: process.env.API_SECRET_RESERVE,
        })

        store.dispatch('recipes/fetchPopularRecipes', { recipeNum: 3 })
        store.dispatch('smoothies/fetchSmoothies', { recipeNum: 20 })
        store.dispatch('smoothies/fetchPopularSmoothies', { recipeNum: 3 })
      }
    })
}
