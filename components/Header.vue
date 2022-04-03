<template>
  <header class="header" id="header">
    <form
      class="header__form"
      @submit.prevent="submitSearch"
      v-if="$route.name !== 'bookmarks'"
    >
      <input
        type="search"
        class="header__search"
        placeholder="Search recipe"
        aria-label="search"
        v-model="searchInput"
      />

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path
          d="M19,20.036A.73.73,0,0,0,20.036,19Zm-3.061-4.073a.73.73,0,0,0-1.03-1.034Zm.77-4.371a.73.73,0,0,0,1.43.29Zm-6.436,5.253a6.568,6.568,0,0,1-6.568-6.568H2.25A8.027,8.027,0,0,0,10.277,18.3ZM3.709,10.277a6.568,6.568,0,0,1,6.568-6.568V2.25A8.027,8.027,0,0,0,2.25,10.277Zm6.568-6.568a6.568,6.568,0,0,1,6.568,6.568H18.3A8.027,8.027,0,0,0,10.277,2.25ZM20.036,19,15.962,14.93,14.93,15.962,19,20.036Zm-5.123-4.075a6.544,6.544,0,0,1-4.636,1.916V18.3a8,8,0,0,0,5.666-2.341Zm1.932-4.652a6.606,6.606,0,0,1-.131,1.314l1.43.29a8.06,8.06,0,0,0,.161-1.6Z"
          transform="translate(-2.25 -2.25)"
        />
      </svg>
    </form>

    <h1 class="header__title">
      <span>Vegan</span>
      <span class="header__ify">ify</span>
      <span class="header__yourmeal">&nbsp;Your Meal</span>
    </h1>
  </header>
</template>

<script>
export default {
  data() {
    return {
      searchInput: null,
    };
  },

  // computed: {
  //     MSG() {
  //         return this.$store.state.apk.msg;
  //     }
  // },

  methods: {
    async submitSearch() {
      if (!this.searchInput || this.searchInput.trim() === "") return;
      this.$store.commit("app/SET_IS_WAITING", true);

      this.searchInput = this.searchInput.replaceAll(/[$.]+/g, "");

      // setTimeout(() => {

      // }, 100);

      if (this.$route.name === "smoothies") {
        await this.$store.dispatch("recipes/fetchSearchedRecipes", {
          searchedTerm: this.searchInput,
          isSmoothie: true,
        });
        this.$nextTick(() => this.$store.commit("app/SET_IS_WAITING", false));

        return;
      }

      await this.$store.dispatch("recipes/fetchSearchedRecipes", {
        searchedTerm: this.searchInput,
      });
      this.$store.commit("recipes/SET_SCROLL_INTO_VIEW", {
        _selector: ".categories > .hooper",
      });
      // this.$store.commit("app/SET_IS_WAITING", false);
      this.$nextTick(() => this.$store.commit("app/SET_IS_WAITING", false));
    },
  },
};
</script>
