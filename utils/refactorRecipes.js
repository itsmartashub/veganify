export default ({ arrRecipes }) => {
    arrRecipes.map((recipe) => {
        return {
            id: recipe.id,
            title: recipe.title,
            image: recipe.image,
            readyInMinutes: recipe.readyInMinutes,
            servings: recipe.servings,
            glutenFree: recipe.glutenFree,
            nutrition: recipe.nutrition,
            extendedIngredients: recipe.extendedIngredients,
            analyzedInstructions: recipe.analyzedInstructions,
            summary: recipe.summary,
        }
    })
}
