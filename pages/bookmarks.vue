<template>
    <div class="bookmarks">
        <Navigation />

        <main class="middle">
            <section class="bookmarked" v-if="bookmarks[0]">
                <Header />

                <div class="scroll-to" id="scroll-to">
                    <LazyRecipeCards />
                </div>

                <LazyNotificationList />
            </section>

            <transition name="page">
                <section class="nobookmarked" v-if="!bookmarks[0]">
                    <div class="nobookmarked__svgwrapper icontainer--bggreen">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px"
                            y="0px"
                            viewBox="0 0 212.045 212.045"
                            style="enable-background: new 0 0 212.045 212.045"
                            xml:space="preserve"
                        >
                            <path
                                d="M167.871,0H44.84C34.82,0,26.022,8.243,26.022,18v182c0,3.266,0.909,5.988,2.374,8.091c1.752,2.514,4.573,3.955,7.598,3.954
	c2.86,0,5.905-1.273,8.717-3.675l55.044-46.735c1.7-1.452,4.142-2.284,6.681-2.284c2.538,0,4.975,0.832,6.68,2.288l54.86,46.724
	c2.822,2.409,5.657,3.683,8.512,3.683c4.828,0,9.534-3.724,9.534-12.045V18C186.022,8.243,177.891,0,167.871,0z"
                            />
                        </svg>
                    </div>

                    <div>
                        <h1 class="nobookmarked__title">
                            Such empty! <span class="plate">🍽️</span>
                        </h1>
                        <h2 class="nobookmarked__subtitle">
                            No bookmarks yet.
                            <br />
                            Find a nice recipe and bookmark it.
                        </h2>
                    </div>
                </section>
            </transition>
        </main>

        <Sidebar />
    </div>
</template>

<script>
import SEO from '~/mixins/SEO.js'

export default {
    mixins: [SEO],

    data() {
        return {
            seo: {
                title: 'Veganify | Bookmarks',
                description:
                    'This is a Veganify webpage with your vegetarian-friendly bookmarked recipes',
                image: 'https://veganify.vercel.app/veganify-og.png',
            },
            isMounted: false,
        }
    },

    computed: {
        bookmarks() {
            return this.$store.state.bookmarks.bookmarksRecipes
        },
    },

    created() {
        if (process.client) {
            this.$store.commit('pagination/SET_CURR_PAGE', 1)
        }
    },
    mounted() {
        this.$store.dispatch('bookmarks/setBookmarkRecipesArray')
        this.$store.commit('recipes/SET_ACTIVE_RECIPES', this.bookmarks)
        this.$nextTick(() => (this.isMounted = true))
    },
}
</script>
