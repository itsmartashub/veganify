export const state = () => ({
  bookmarksIDs: [],
  bookmarksRecipes: [],
})

export const mutations = {
  setBookmarksIDS: (state, bids) => {
    state.bookmarksIDs = bids
  },
  addBookmarkID: (state, { recipeID, recipe }) => {
    state.bookmarksIDs.push(recipeID)
    state.bookmarksRecipes.push(recipe)
  },
  removeBookmarkID: (state, { indexOfID, recipeID }) => {
    state.bookmarksIDs.splice(indexOfID, 1)

    state.bookmarksRecipes = state.bookmarksRecipes.filter(
      (recipe) => recipe.id !== recipeID,
    )
  },
  setBookmarksRecipes: (state, recipes) => {
    state.bookmarksRecipes = recipes
  },
}

export const actions = {
  setBookmarkRecipesArray({ commit, dispatch }) {
    const LSbookmarks = localStorage.getItem('bookmarks_ids')

    if (LSbookmarks) {
      commit('setBookmarksIDS', JSON.parse(LSbookmarks))
      dispatch('matchingBookmarkRecipes')
    } else {
      localStorage.setItem('bookmarks_ids', JSON.stringify([]))
    }
  },

  matchingBookmarkRecipes: ({ state, rootState, commit }) => {
    const matchingRecipes = rootState.recipes.recipeItems.filter((recipe) =>
      state.bookmarksIDs.includes(recipe.id),
    )
    commit('setBookmarksRecipes', matchingRecipes)
  },

  toggleBookmarkID({ state, commit, dispatch }, { recipeID, recipe }) {
    //? 1. vidim da li item postoji vec u bookmarksIDS
    if (!state.bookmarksIDs.includes(recipeID)) {
      //? 2. ako ne postoji dodajem ga u bookmarksIDS i u LS
      commit('addBookmarkID', { recipeID, recipe })
      dispatch('LSsetBookmarksIDS')
    } else {
      //? 3. ako postoji onda ga brisem iz bookmarksIDS i iz LS-a => tj trazim index id-a u bookmarksIDs koji ima vrednost recipeID-a.
      let indexOfID = state.bookmarksIDs.findIndex((bid) => bid == recipeID)
      commit('removeBookmarkID', { indexOfID, recipeID })
      dispatch('LSsetBookmarksIDS')
    }
  },

  LSsetBookmarksIDS({ state }) {
    localStorage.setItem('bookmarks_ids', JSON.stringify(state.bookmarksIDs))
  },
}
