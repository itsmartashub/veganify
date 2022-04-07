export const state = () => ({
  bookmarksIDs: [],
  bookmarksRecipes: [],
});

export const mutations = {
  SET_BOOKMARKS_IDS(state, bids) {
    state.bookmarksIDs = bids;
  },
  ADD_BOOKMARK_ID(state, { recipe }) {
    state.bookmarksIDs.push(recipe.id);
    state.bookmarksRecipes.push(recipe);
  },
  REMOVE_BOOKMARK_ID(state, { indexOfID, recipeID }) {
    state.bookmarksIDs.splice(indexOfID, 1);

    console.time();
    state.bookmarksRecipes = state.bookmarksRecipes.filter(
      (recipe) => recipe.id !== recipeID
    );
    console.timeEnd();
  },
  SET_BOOKMARKS_RECIPES(state, recipes) {
    state.bookmarksRecipes = recipes;
  },

  LS_SET_BOOKMARKS_IDS(state) {
    localStorage.setItem("bookmarks_ids", JSON.stringify(state.bookmarksIDs));
  },
};

export const actions = {
  setBookmarkRecipesArray({ commit, dispatch }) {
    const LSbookmarks = localStorage.getItem("bookmarks_ids");

    if (LSbookmarks) {
      commit("SET_BOOKMARKS_IDS", JSON.parse(LSbookmarks));
      dispatch("matchingBookmarkRecipes");
      return;
    }
    localStorage.setItem("bookmarks_ids", JSON.stringify([]));
  },

  matchingBookmarkRecipes({ state, rootState, commit }) {
    const matchingRecipes = rootState.recipes.mergedRecipes.filter((recipe) =>
      state.bookmarksIDs.includes(recipe.id)
    );
    commit("SET_BOOKMARKS_RECIPES", matchingRecipes);
  },

  toggleBookmarkID({ state, commit, dispatch }, { recipe }) {
    //? 1. vidim da li item postoji vec u bookmarksIDS
    let isBookmarked = state.bookmarksIDs.includes(recipe.id);
    if (!isBookmarked) {
      //? 2. ako ne postoji dodajem ga u bookmarksIDS i u LS
      commit("ADD_BOOKMARK_ID", { recipe });
      commit("LS_SET_BOOKMARKS_IDS");
    } else {
      //? 3. ako postoji onda ga brisem iz bookmarksIDS i iz LS-a => tj trazim index id-a u bookmarksIDs koji ima vrednost recipe.id-a.
      let indexOfID = state.bookmarksIDs.findIndex((bid) => bid === recipe.id);
      commit("REMOVE_BOOKMARK_ID", { indexOfID, recipeID: recipe.id });
      dispatch("LSsetBookmarksIDS");
    }
  },

  LSsetBookmarksIDS({ state }) {
    localStorage.setItem("bookmarks_ids", JSON.stringify(state.bookmarksIDs));
  },
};
