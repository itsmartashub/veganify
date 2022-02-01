<template>
    <div class="ingredients">
        <div class="ingredients__pics">
            <Hooper :settings="hooperSettings">
                <template
                    v-for="(ingredient,
                    index) in recipeItem.extendedIngredients"
                >
                    <Slide :key="index">
                        <div class="ingredients__pic">
                            <figure class="ingredients__pic-imgwrapper">
                                <img
                                    :src="
                                        `https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`
                                    "
                                    :alt="ingredient.name"
                                />
                            </figure>

                            <div
                                class="ingredients__pic-iconwrapper icontainer--bgwhite"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    xmlns:xlink="http://www.w3.org/1999/xlink"
                                    viewBox="0 0 34.621 23.391"
                                >
                                    <defs>
                                        <linearGradient
                                            id="a"
                                            x1="0.5"
                                            x2="0.5"
                                            y2="1"
                                            gradientUnits="objectBoundingBox"
                                        >
                                            <stop
                                                offset="0"
                                                stop-color="var(--clr_grd_1)"
                                            />
                                            <stop
                                                offset="1"
                                                stop-color="var(--clr_grd_2)"
                                            />
                                        </linearGradient>
                                        <filter
                                            id="c"
                                            x="0"
                                            y="0"
                                            width="34.621"
                                            height="23.391"
                                            filterUnits="userSpaceOnUse"
                                        >
                                            <feOffset
                                                dy="3"
                                                input="SourceAlpha"
                                            />
                                            <feGaussianBlur
                                                stdDeviation="2.5"
                                                result="d"
                                            />
                                            <feFlood flood-opacity="0.161" />
                                            <feComposite
                                                operator="in"
                                                in2="d"
                                            />
                                            <feComposite in="SourceGraphic" />
                                        </filter>
                                    </defs>
                                    <g transform="translate(7.5 0.287)">
                                        <path
                                            d="M19.411,16.44h0l-2.692.005L9.541,4.464,2.319,16.476,0,16.481,9.736,0l9.675,16.44Z"
                                            transform="matrix(-1, 0.017, -0.017, -1, 19.696, 16.478)"
                                            fill="url(#a)"
                                        />
                                        <g
                                            transform="matrix(1, 0, 0, 1, -7.5, -0.29)"
                                            filter="url(#c)"
                                        >
                                            <path
                                                d="M19.483,8.053h-2.7L9.554,2.184,2.328,8.052H0L9.741,0l9.742,8.052Z"
                                                transform="translate(7.64 4.5) rotate(1)"
                                                fill="url(#a)"
                                            />
                                        </g>
                                    </g>
                                </svg>
                            </div>

                            <p class="ingredients__pic-name">
                                {{ ingredient.name }}
                            </p>
                            <p class="ingredients__pic-unitamount">
                                <span>
                                    {{
                                        ingredient.amount % 1 == 0
                                            ? ingredient.amount
                                            : ingredient.amount.toFixed(1)
                                    }}
                                </span>
                                {{ ingredient.unit }}
                            </p>
                        </div>
                    </Slide>
                </template>

                <hooper-navigation slot="hooper-addons"></hooper-navigation>
                <hooper-pagination slot="hooper-addons"></hooper-pagination>
            </Hooper>
        </div>

        <ul class="ingredients__items">
            <li
                class="ingredients__item"
                v-for="(ingredient, index) in recipeItem.extendedIngredients"
                :key="index"
            >
                <div class="ingredients__item--amount">
                    {{
                        ingredient.amount % 1 == 0
                            ? ingredient.amount
                            : ingredient.amount.toFixed(2)
                    }}

                    <!-- {{ typeof ingredient.amount }} -->
                </div>

                <div class="ingredients__item-unitnamewrapper">
                    <span class="ingredients__item--unit">
                        {{ ingredient.unit }}
                    </span>
                    <span class="ingredients__item--name">
                        {{ ingredient.name }}
                    </span>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import {
    Slide,
    Hooper,
    Navigation as HooperNavigation,
    Pagination as HooperPagination
} from "hooper";
import "hooper/dist/hooper.css";

export default {
    components: {
        Slide,
        Hooper,
        HooperNavigation,
        HooperPagination
    },

    data() {
        return {
            hooperSettings: {
                itemsToShow: 2.5,
                // centerMode: true,
                infiniteScroll: true
                // breakpoints: {
                //   360: {
                //     itemsToShow: 3.5,
                //   },
                //   700: {
                //     itemsToShow: 5,
                //   },
                //   760: {
                //     itemsToShow: 3,
                //   },
                //   1000: {
                //     itemsToShow: 3,
                //   },
                // 1200: {
                //   itemsToShow: 3,
                // },
                //   1400: {
                //     itemsToShow: 3,
                //   },
                // },
            }
        };
    },

    computed: {
        recipeItem() {
            return this.$store.state.recipes.recipeItem;
        }
    }
};
</script>

<style lang="scss" scoped></style>
