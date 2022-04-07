<template>
    <article class="recipeitem__showcase showcase">
        <figure class="showcase__figure">
            <img
                :src="recipeItem.image"
                :alt="recipeItem.title | altFormatting(recipeItem.title)"
                class="showcase__img"
            />
        </figure>

        <ul class="showcase__nutritions" v-if="recipeItem.nutrition">
            <template v-for="nutrition in recipeItem.nutrition.nutrients">
                <li
                    class="showcase__nutrition"
                    :key="nutrition.name"
                    v-if="
                        nutrition.name == 'Calories' ||
                        nutrition.name == 'Protein' ||
                        nutrition.name == 'Carbohydrates' ||
                        nutrition.name == 'Fat'
                    "
                >
                    <p class="showcase__nutrition-amount">
                        {{ nutrition.amount.toFixed(0) }}
                    </p>
                    <p class="showcase__nutrition-name">
                        <span>{{
                            nutrition.name === 'Carbohydrates'
                                ? 'Carbs'
                                : nutrition.name
                        }}</span>
                        <span class="showcase__nutrition-unit">
                            {{
                                nutrition.name == 'Protein' ||
                                nutrition.name == 'Carbohydrates' ||
                                nutrition.name == 'Fat'
                                    ? nutrition.unit + 'ram'
                                    : nutrition.unit
                            }}
                        </span>
                    </p>
                </li>
            </template>
        </ul>

        <div class="showcase__trivia">
            <p v-if="randomTrivia">
                {{ randomTrivia }}
            </p>
            <p v-else>
                Airplane food isn't very tasty because our sense of smell and
                taste decrease from 20 to 50 percent.
            </p>
        </div>
    </article>
</template>

<script>
export default {
    computed: {
        recipeItem() {
            return this.$store.state.recipes.recipeItem
        },
        randomTrivia() {
            return this.$store.state.recipes.randomTrivia
        },
    },
}
</script>
