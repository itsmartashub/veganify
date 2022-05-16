<template>
    <div class="pagination" v-if="activeRecipes.length > resultsPerPage">
        <ul class="pagination__items">
            <li
                class="pagination__item pagination__item--prev"
                title="Previous Page"
            >
                <button
                    class="pagination__btn pagination__btn--prev btn"
                    @click="goToPreviousPage"
                    :disabled="isFirstPage"
                    :class="{ 'pagination__btn--disabled': isFirstPage }"
                    aria-label="Go To Next Page"
                >
                    Prev
                </button>
            </li>

            <li class="pagination__item pagination__item--pages">
                <ul>
                    <li
                        v-for="(page, index) in pages"
                        :key="index"
                        :title="`Page ${page.number}`"
                    >
                        <button
                            class="pagination__btn btn"
                            @click="goToPage(page.number)"
                            :class="{
                                'pagination__btn--active': isPageActive(
                                    page.number
                                ),
                            }"
                            :disabled="page.isDisabled"
                            :aria-label="`Go To Page ${page.number}`"
                        >
                            {{ page.number }}
                        </button>
                    </li>
                </ul>
            </li>

            <li
                class="pagination__item pagination__item--next"
                title="Next Page"
            >
                <button
                    class="pagination__btn pagination__btn--next btn"
                    :class="{ 'pagination__btn--disabled': isLastPage }"
                    @click="goToNextPage"
                    :disabled="isLastPage"
                    aria-label="Go To Previous Page"
                >
                    Next
                </button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            maxVisibleBtns: 6,
        }
    },

    props: {
        recipes: {
            type: Array,
            // default: function () {
            //   return this.$store.state.recipes.activeRecipes;
            // },
        },
    },

    computed: {
        currentPage: {
            get() {
                return this.$store.state.pagination.currPage
            },
            set(newValue) {
                this.$store.commit('pagination/SET_CURR_PAGE', newValue)
                // this.$store.commit("pagination/SET_PAGINATED_RECIPES", this.recipes);
            },
        },

        resultsPerPage() {
            return this.$store.state.pagination.resultsPerPage
        },

        numberOfPages() {
            return this.$store.getters['pagination/getNumberOfPages']
        },

        pages() {
            let range = []
            for (let i = 1; i <= this.numberOfPages; i += 1) {
                range.push({
                    number: i,
                    isDisabled: i === this.currentPage,
                })
            }
            return range
        },

        isFirstPage() {
            return this.currentPage === 1
        },

        isLastPage() {
            return this.currentPage === this.numberOfPages
        },

        activeRecipes() {
            return this.$store.state.recipes.activeRecipes
        },
    },

    methods: {
        goToPreviousPage() {
            if (this.isFirstPage) return
            this.currentPage = this.currentPage - 1
            // this.$store.commit("pagination/SET_PAGINATED_RECIPES", this.recipes);
            this.$store.commit('app/SET_SCROLL_INTO_VIEW', {
                _selector: '#scroll-to',
            })
        },
        goToPage(page) {
            this.currentPage = page
            // this.$store.commit("pagination/SET_PAGINATED_RECIPES", this.recipes);
            this.$store.commit('app/SET_SCROLL_INTO_VIEW', {
                _selector: '#scroll-to',
            })
        },
        goToNextPage() {
            if (this.isLastPage) return
            this.currentPage = this.currentPage + 1
            // this.$store.commit("pagination/SET_PAGINATED_RECIPES", this.recipes);
            this.$store.commit('app/SET_SCROLL_INTO_VIEW', {
                _selector: '#scroll-to',
            })
        },
        isPageActive(page) {
            return this.currentPage === page
        },
    },

    // created() {
    //   // this.$store.dispatch("pagination/setPaginatedRecipes", this.recipes);
    //   this.$store.commit("pagination/SET_PAGINATED_RECIPES", this.recipes);
    // },
}
</script>
