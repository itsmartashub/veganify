<template>
  <header class="header">
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

      <!-- <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28.751"
        height="28.751"
        viewBox="0 0 28.751 28.751"
      >
        <g id="search" transform="translate(-7.338)">
          <g id="Group_4" data-name="Group 4" transform="translate(7.338)">
            <path
              id="Path_1"
              data-name="Path 1"
              d="M.175,27.728,8.924,18.98a11.424,11.424,0,1,1,.847.847L1.022,28.575a.6.6,0,1,1-.847-.847ZM17.37,21.563A10.183,10.183,0,1,0,7.188,11.381,10.194,10.194,0,0,0,17.37,21.563Z"
              transform="translate(0 0)"
            />
          </g>
        </g>
      </svg> -->

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
    }
  },

  methods: {
    submitSearch() {
      console.log(this.searchInput)
      if (this.searchInput || this.searchInput.trim() !== '') {
        // if(this.$route.name !== '')
        console.log(this.$route.name)

        if (this.$route.name === 'smoothies') {
          this.$store.dispatch('smoothies/fetchSearchedSmoothieRecipes', {
            searchedTerm: this.searchInput,
          })
        }

        //todo fetch searched term
        this.$store.dispatch('recipes/fetchSearchedRecipes', {
          searchedTerm: this.searchInput,
        })
        //todo set searched array
      }
      return
    },
  },
}
</script>
