<template>
    <article
        class="maincard"
        v-if="recipe"
        @click="navigateToRecipeItem(recipe.id)"
    >
        <figure class="maincard__figure">
            <img
                :src="recipe.image"
                :alt="recipe.title"
                class="maincard__img"
            />
            <figcaption class="maincard__figcaption" v-if="recipe.glutenFree">
                gluten free
            </figcaption>
        </figure>

        <div class="maincard__main">
            <h4 class="maincard__title">
                {{ recipe.title | truncateTxt(35) }}
            </h4>
            <div class="maincard__icons">
                <div class="maincard__icon maincard__icon--kcal">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        height="22.135"
                        viewBox="0 0 19.531 22.135"
                    >
                        <defs>
                            <linearGradient
                                id="linear-gradient"
                                x1="0.5"
                                x2="0.5"
                                y2="1"
                                gradientUnits="objectBoundingBox"
                            >
                                <stop
                                    offset="0"
                                    stop-color="var(--clr_gradient_svg_1)"
                                />
                                <stop
                                    offset="1"
                                    stop-color="var(--clr_gradient_svg_1)"
                                />
                            </linearGradient>
                            <linearGradient
                                id="linear-gradient-3"
                                x1="-0.033"
                                y1="0.5"
                                x2="0.98"
                                y2="0.5"
                                xlink:href="#linear-gradient"
                            />
                            <linearGradient
                                id="linear-gradient-5"
                                x1="-0.047"
                                y1="0.5"
                                x2="1.095"
                                y2="0.5"
                                xlink:href="#linear-gradient"
                            />
                            <linearGradient
                                id="linear-gradient-8"
                                x1="-6.969"
                                y1="0.5"
                                x2="-2.071"
                                y2="0.5"
                                xlink:href="#linear-gradient"
                            />
                        </defs>
                        <g id="calories" transform="translate(-30)">
                            <g
                                id="Group_87"
                                data-name="Group 87"
                                transform="translate(30)"
                            >
                                <path
                                    id="Path_49"
                                    data-name="Path 49"
                                    d="M48.555,10.354a.43.43,0,0,0-.795.09l-.009.025a.44.44,0,0,1-.862-.11C46.088,4.112,43.2,0,39.765,0h-.018a1.259,1.259,0,0,0-1.08,1.655,4.428,4.428,0,0,1,.159,1.189A3.822,3.822,0,0,1,35.3,6.83a3.231,3.231,0,0,1-.969-.134.893.893,0,0,0-1.1.676,22.7,22.7,0,0,0-.58,2.986.44.44,0,0,1-.862.111l-.009-.025a.43.43,0,0,0-.795-.09A7.111,7.111,0,0,0,30,13.931c0,4.531,4.372,8.2,9.765,8.2h.05c5.37-.023,9.716-3.686,9.716-8.2a7.112,7.112,0,0,0-.975-3.577Z"
                                    transform="translate(-30 0)"
                                    fill="url(#linear-gradient)"
                                />
                                <path
                                    id="Path_50"
                                    data-name="Path 50"
                                    d="M127.137,33.172a1.254,1.254,0,0,0,1.254-1.254c0-.693-.561-2.76-1.254-2.76s-1.254,2.068-1.254,2.76A1.254,1.254,0,0,0,127.137,33.172Z"
                                    transform="translate(-121.722 -27.892)"
                                    fill="url(#linear-gradient)"
                                />
                            </g>
                            <path
                                id="Path_51"
                                data-name="Path 51"
                                d="M118.8,162.47a6.473,6.473,0,0,1-12.946,0c0-3.575,2.822-8.47,6.4-8.47s6.549,4.895,6.549,8.47Z"
                                transform="translate(-72.563 -147.316)"
                                fill="url(#linear-gradient-3)"
                            />
                            <path
                                id="Path_52"
                                data-name="Path 52"
                                d="M234.135,154a3.984,3.984,0,0,0-.867.1c3.175.7,5.679,5.093,5.679,8.373a6.474,6.474,0,0,1-5.6,6.415,6.476,6.476,0,0,0,7.342-6.415C240.684,158.895,237.71,154,234.135,154Z"
                                transform="translate(-194.446 -147.316)"
                                fill="url(#linear-gradient)"
                            />
                            <path
                                id="Path_53"
                                data-name="Path 53"
                                d="M145.09,230.907a5.224,5.224,0,1,1-10.447,0c0-2.885,2.339-6.066,5.224-6.066S145.09,228.022,145.09,230.907Z"
                                transform="translate(-100.101 -215.083)"
                                fill="url(#linear-gradient-5)"
                            />
                            <g
                                id="Group_88"
                                data-name="Group 88"
                                transform="translate(38.895)"
                            >
                                <path
                                    id="Path_54"
                                    data-name="Path 54"
                                    d="M244.6,10.354a.43.43,0,0,0-.795.09l-.009.025a.44.44,0,0,1-.862-.11C242.137,4.112,239.251,0,235.813,0H235.8a1.031,1.031,0,0,0-.551.163c2.909.818,5.247,4.672,5.956,10.2a.44.44,0,0,0,.862.11l.009-.025a.43.43,0,0,1,.795-.09,7.111,7.111,0,0,1,.975,3.577c0,4.285-3.912,7.8-8.9,8.171.287.021.577.033.871.033h.05c5.37-.023,9.716-3.686,9.716-8.2a7.111,7.111,0,0,0-.975-3.577Z"
                                    transform="translate(-234.943 0)"
                                    fill="url(#linear-gradient)"
                                />
                            </g>
                            <path
                                id="Path_55"
                                data-name="Path 55"
                                d="M287.8,293.371a6.529,6.529,0,0,0-.918-3.232,8.573,8.573,0,0,1,.431,2.561,6.472,6.472,0,0,1-3.485,5.743A5.226,5.226,0,0,0,287.8,293.371Z"
                                transform="translate(-242.811 -277.546)"
                                opacity="0.27"
                                fill="url(#linear-gradient)"
                            />
                            <g
                                id="Group_89"
                                data-name="Group 89"
                                transform="translate(35.318 13.705)"
                            >
                                <path
                                    id="Path_56"
                                    data-name="Path 56"
                                    d="M154.25,318.379l.593-.548a.209.209,0,0,0,.067-.151.486.486,0,0,0-.419-.414.237.237,0,0,0-.168.067l-.928.9v-2.192c0-.157-.2-.263-.442-.263s-.425.106-.425.263v3.651c0,.134.179.268.425.268s.442-.134.442-.268v-.52l.285-.263.676,1a.24.24,0,0,0,.207.106c.207,0,.5-.229.5-.43a.255.255,0,0,0-.045-.134Z"
                                    transform="translate(-152.528 -315.779)"
                                    fill="var(--clr_small_icon_bg)"
                                />
                                <path
                                    id="Path_57"
                                    data-name="Path 57"
                                    d="M216.744,351.887c-.151,0-.229.151-.531.151-.341,0-.47-.157-.47-.431v-.38c0-.274.129-.43.464-.43.3,0,.4.134.537.134.2,0,.335-.263.335-.425,0-.246-.4-.464-.945-.464a1.117,1.117,0,0,0-1.258,1.185v.38a1.115,1.115,0,0,0,1.269,1.185c.542,0,.967-.24.967-.492A.411.411,0,0,0,216.744,351.887Z"
                                    transform="translate(-212.171 -348.555)"
                                    fill="var(--clr_small_icon_bg)"
                                />
                                <path
                                    id="Path_58"
                                    data-name="Path 58"
                                    d="M271.624,350.043c-.414,0-.956.185-.956.447,0,.2.1.43.291.43.151,0,.2-.184.654-.184a.386.386,0,0,1,.419.414v.056h-.2c-.772,0-1.308.184-1.308.844a.679.679,0,0,0,.716.744,1.091,1.091,0,0,0,.85-.447v.123c0,.151.168.268.386.268.246,0,.425-.117.425-.268v-1.331C272.9,350.574,272.541,350.043,271.624,350.043Zm.408,1.6a.52.52,0,0,1-.419.514.205.205,0,0,1-.218-.235c0-.268.3-.3.615-.3h.022Z"
                                    transform="translate(-265.402 -348.556)"
                                    fill="var(--clr_small_icon_bg)"
                                />
                                <path
                                    id="Path_59"
                                    data-name="Path 59"
                                    d="M337.937,315.779c-.252,0-.43.106-.43.263v3.651c0,.134.179.268.43.268s.436-.134.436-.268v-3.651C338.373,315.885,338.178,315.779,337.937,315.779Z"
                                    transform="translate(-329.479 -315.779)"
                                    fill="var(--clr_small_icon_bg)"
                                />
                            </g>
                            <path
                                id="Path_60"
                                data-name="Path 60"
                                d="M350.633,393.806v-.551a6.422,6.422,0,0,1-.31.807C350.5,394.025,350.633,393.916,350.633,393.806Z"
                                transform="translate(-306.42 -376.187)"
                                fill="url(#linear-gradient-8)"
                            />
                        </g>
                    </svg>
                    <p>{{ recipe.kcal }} kcal</p>
                    <!-- <p>{{ recipe.nutrition.nutrients[0].amount }} kcal</p> -->
                </div>
                <div class="maincard__icon maincard__icon--review">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        height="18.859"
                        viewBox="0 0 19.679 18.859"
                    >
                        <defs>
                            <linearGradient
                                id="linear-gradient"
                                x1="0.5"
                                x2="0.5"
                                y2="1"
                                gradientUnits="objectBoundingBox"
                            >
                                <stop
                                    offset="0"
                                    stop-color="var(--clr_gradient_svg_1)"
                                />
                                <stop
                                    offset="1"
                                    stop-color="var(--clr_gradient_svg_1)"
                                />
                            </linearGradient>
                        </defs>
                        <path
                            id="star"
                            d="M19.628,7.618a1.044,1.044,0,0,0-.9-.719l-5.68-.516L10.8,1.126a1.046,1.046,0,0,0-1.924,0L6.632,6.383.951,6.9a1.047,1.047,0,0,0-.594,1.83l4.293,3.765L3.385,18.071A1.044,1.044,0,0,0,4.94,19.2l4.9-2.928,4.9,2.928a1.046,1.046,0,0,0,1.556-1.13l-1.266-5.577L19.322,8.73a1.046,1.046,0,0,0,.307-1.112Zm0,0"
                            transform="translate(0 -0.491)"
                            fill="url(#linear-gradient)"
                        />
                    </svg>
                    <!-- <p>{{ recipe.review }}</p> -->
                    <p>
                        {{ randomLikes() }}
                    </p>
                </div>
                <div class="maincard__icon maincard__icon--time">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        height="19.567"
                        viewBox="0 0 19.567 19.567"
                    >
                        <defs>
                            <linearGradient
                                id="linear-gradient"
                                x1="0.5"
                                x2="0.5"
                                y2="1"
                                gradientUnits="objectBoundingBox"
                            >
                                <stop
                                    offset="0"
                                    stop-color="var(--clr_gradient_svg_1)"
                                />
                                <stop
                                    offset="1"
                                    stop-color="var(--clr_gradient_svg_1)"
                                />
                            </linearGradient>
                        </defs>
                        <g
                            id="Layer_2"
                            data-name="Layer 2"
                            transform="translate(-1)"
                        >
                            <g id="Clock" transform="translate(1)">
                                <path
                                    id="Path_61"
                                    data-name="Path 61"
                                    d="M24.489,21.834l3.522-1.914a.978.978,0,0,0-1.037-1.659l-3.522,1.914a.978.978,0,1,0,1.037,1.659Z"
                                    transform="translate(-13.993 -11.025)"
                                    fill="url(#linear-gradient)"
                                />
                                <path
                                    id="Path_62"
                                    data-name="Path 62"
                                    d="M9.784,0a9.784,9.784,0,1,0,9.784,9.784A9.784,9.784,0,0,0,9.784,0Zm0,17.61A7.827,7.827,0,1,1,17.61,9.784,7.827,7.827,0,0,1,9.784,17.61Z"
                                    fill="url(#linear-gradient)"
                                />
                                <path
                                    id="Path_63"
                                    data-name="Path 63"
                                    d="M14.311,13.336a.978.978,0,0,0-1.323,1.44l4.058,3.913a.978.978,0,1,0,1.323-1.44Z"
                                    transform="translate(-7.728 -7.974)"
                                    fill="url(#linear-gradient)"
                                />
                            </g>
                        </g>
                    </svg>
                    <p>{{ recipe.time }} min</p>
                    <!-- <p>{{ recipe.readyInMinutes }} min</p> -->
                </div>
            </div>
        </div>
    </article>
</template>

<script>
import randomLikes from "~/utils/randomLikes.js";
// import shared from "~/mixins/shared";

export default {
    props: {
        recipe: {
            type: Object,
            required: true
        }
        // items: {
        //     type: Object,
        //     required: true
        // }
    },
    //  mixins: [shared],

    methods: {
        randomLikes,

        navigateToRecipeItem(recipeID) {
            // this.$store.commit("recipes/setRecipeItem", recipeID);
            this.$router.push(`/recipe/${recipeID}`);
        }
    }
};
</script>

<style></style>
