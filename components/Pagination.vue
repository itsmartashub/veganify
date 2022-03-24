<template>
  <div class="pagination" v-if="activeRecipes.length > resultsPerPage">
    <ul class="pagination__items">
      <li class="pagination__item" title="Previous Page">
        <button
          class="pagination__btn pagination__btn--previous btn"
          @click="goToPreviousPage"
          :disabled="isFirstPage"
          :class="{ 'pagination__btn--disabled': isFirstPage }"
        >
          Prev
        </button>
      </li>

      <li
        class="pagination__item"
        v-for="(page, index) in pages"
        :key="index"
        :title="`Page ${page.number}`"
      >
        <button
          class="pagination__btn btn"
          @click="goToPage(page.number)"
          :class="{ 'pagination__btn--active': isPageActive(page.number) }"
          :disabled="page.isDisabled"
        >
          {{ page.number }}
        </button>
      </li>

      <li class="pagination__item" title="Next Page">
        <button
          class="pagination__btn pagination__btn--next btn"
          :class="{ 'pagination__btn--disabled': isLastPage }"
          @click="goToNextPage"
          :disabled="isLastPage"
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
    };
  },

  computed: {
    currentPage: {
      get() {
        return this.$store.state.pagination.currPage;
      },
      set(newValue) {
        this.$store.commit("pagination/SET_CURR_PAGE", newValue);
      },
    },

    resultsPerPage() {
      return this.$store.state.pagination.resultsPerPage;
    },

    numberOfPages() {
      return this.$store.getters["pagination/getNumberOfPages"];
    },

    pages() {
      let range = [];
      for (let i = 1; i <= this.numberOfPages; i += 1) {
        range.push({
          number: i,
          isDisabled: i === this.currentPage,
        });
      }
      return range;
    },

    isFirstPage() {
      return this.currentPage === 1;
    },

    isLastPage() {
      return this.currentPage === this.numberOfPages;
    },

    activeRecipes() {
      return this.$store.state.recipes.activeRecipes;
    },
  },

  methods: {
    goToPreviousPage() {
      if (this.isFirstPage) return;
      this.currentPage = this.currentPage - 1;
      this.$store.commit("recipes/SET_SCROLL_INTO_VIEW", {
        _selector: ".recipecards",
      });
    },
    goToPage(page) {
      this.currentPage = page;
      this.$store.commit("recipes/SET_SCROLL_INTO_VIEW", {
        _selector: ".recipecards",
      });
    },
    goToNextPage() {
      if (this.isLastPage) return;
      this.currentPage = this.currentPage + 1;
      this.$store.commit("recipes/SET_SCROLL_INTO_VIEW", {
        _selector: ".recipecards",
      });
    },
    isPageActive(page) {
      return this.currentPage === page;
    },
  },
};
</script>
