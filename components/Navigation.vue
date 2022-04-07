<template>
  <aside class="navigation">
    <a href="/" class="navigation__logowrapper">
      <Logo />
      <p class="logo__veganify">
        vegan
        <span>ify</span>
      </p>
    </a>

    <nav class="navigation__links">
      <NuxtLink
        to="/"
        class="navigation__link"
        @click.prevent="$nuxt.refresh()"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19.5 19.806">
          <path
            d="M13,3l9,7.412V21H16.375m0-4.235a3.085,3.085,0,0,0-.989-2.246,3.526,3.526,0,0,0-4.773,0,3.085,3.085,0,0,0-.989,2.246V21H4V10.412L8.5,6.706"
            transform="translate(-3.25 -1.944)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </svg>
      </NuxtLink>
      <NuxtLink to="/smoothies" class="navigation__link">
        <svg
          id="blender-svgrepo-com_1_"
          data-name="blender-svgrepo-com (1)"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 18.553 23.623"
        >
          <g id="Group_25" data-name="Group 25" transform="translate(0 2.238)">
            <path
              id="Path_36"
              data-name="Path 36"
              d="M346.137,137.128a.633.633,0,0,1-.633-.633v-3.409a.655.655,0,0,0-.654-.654h-1.512a.633.633,0,1,1,0-1.267h1.512a1.923,1.923,0,0,1,1.921,1.921v3.409A.633.633,0,0,1,346.137,137.128Z"
              transform="translate(-328.217 -127.569)"
            />
            <path
              id="Path_37"
              data-name="Path 37"
              d="M344.849,166.444h-1.512a.633.633,0,1,1,0-1.267h1.512a.655.655,0,0,0,.654-.654v-3.409a.633.633,0,1,1,1.267,0v3.409A1.923,1.923,0,0,1,344.849,166.444Z"
              transform="translate(-328.217 -155.581)"
            />
            <path
              id="Path_38"
              data-name="Path 38"
              d="M100.808,65.9a.631.631,0,0,1-.448-.186l-1.38-1.38a3.972,3.972,0,0,1-1.171-2.827V50.942a.633.633,0,1,1,1.267,0V61.511a2.713,2.713,0,0,0,.8,1.931l1.38,1.38a.633.633,0,0,1-.448,1.081Z"
              transform="translate(-96.922 -50.309)"
            />
            <path
              id="Path_39"
              data-name="Path 39"
              d="M290.145,143.154a.633.633,0,0,1-.448-1.081l1.38-1.38a2.713,2.713,0,0,0,.8-1.931v-6.973a.633.633,0,0,1,1.267,0v6.973a3.972,3.972,0,0,1-1.171,2.827l-1.38,1.38A.632.632,0,0,1,290.145,143.154Z"
              transform="translate(-278.012 -127.559)"
            />
            <path
              id="Path_40"
              data-name="Path 40"
              d="M93.755,51.576H78.627a.643.643,0,1,1,0-1.267H93.755a.643.643,0,1,1,0,1.267Z"
              transform="translate(-77.871 -50.309)"
            />
          </g>
          <path
            id="Path_42"
            data-name="Path 42"
            d="M172.244,3.5h-4.75a.633.633,0,0,1-.633-.633V1.636A1.638,1.638,0,0,1,168.5,0h2.744a1.638,1.638,0,0,1,1.636,1.636V2.871A.633.633,0,0,1,172.244,3.5Zm-4.116-1.267h3.483v-.6a.37.37,0,0,0-.369-.369H168.5a.37.37,0,0,0-.369.369v.6h0Z"
            transform="translate(-161.813)"
          />
          <path
            id="Path_44"
            data-name="Path 44"
            d="M121.736,352.034H109.431a.739.739,0,0,1-.785-.682v-1.337c0-3.323,3.112-6.027,6.938-6.027s6.938,2.7,6.938,6.027v1.337A.739.739,0,0,1,121.736,352.034Zm-11.52-1.364h10.736v-.655c0-2.571-2.408-4.663-5.368-4.663s-5.368,2.092-5.368,4.663v.655Z"
            transform="translate(-107.527 -328.41)"
          />
        </svg>
      </NuxtLink>
      <NuxtLink to="/bookmarks" class="navigation__link">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14.206 19.5">
          <path
            id="bookmark-svgrepo-com_2_"
            d="M18.706,12.471V22l-6.353-6.353L6,22V17.765M18.706,8.235V6.118A2.118,2.118,0,0,0,16.588,4H8.118A2.118,2.118,0,0,0,6,6.118v7.412"
            transform="translate(-5.25 -3.25)"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
          />
        </svg>
      </NuxtLink>
    </nav>

    <div
      class="navigation__themes"
      :class="{ 'navigation__themes--dark': IS_DARK }"
      @click="darkToggle"
    >
      <svg
        class="navigation__svg--moon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20.18 20.174"
      >
        <path
          d="M12.412,22.218h-.1a10.423,10.423,0,0,1-7.42-3.184A10.574,10.574,0,0,1,4.628,4.881a10.241,10.241,0,0,1,4.044-2.77A1,1,0,0,1,9.986,3.344a8.492,8.492,0,0,0,1.961,8.906,8.563,8.563,0,0,0,8.926,1.961,1.011,1.011,0,0,1,1.284,1.3,10.271,10.271,0,0,1-2.366,3.67,10.392,10.392,0,0,1-7.38,3.033Z"
          transform="translate(-2.04 -2.043)"
        />
      </svg>

      <svg
        class="navigation__svg--sun"
        data-name="sun-svgrepo-com (1)"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20.119 20.119"
      >
        <g id="Group_13" data-name="Group 13">
          <g id="Group_12" data-name="Group 12">
            <path
              class="svgSunCircle"
              d="M132.874,129.374a3.5,3.5,0,1,0,3.5,3.5A3.5,3.5,0,0,0,132.874,129.374Z"
              transform="translate(-122.814 -122.814)"
            />
            <path
              class="svgSunRay"
              data-name="Path 15"
              d="M237.225,3.755a.768.768,0,0,0,.768-.768V.768a.768.768,0,0,0-1.536,0V2.987A.768.768,0,0,0,237.225,3.755Z"
              transform="translate(-227.165 0)"
            />
            <path
              class="svgSunRay"
              data-name="Path 16"
              d="M364.5,72.361a.766.766,0,0,0,.543-.225l1.569-1.569a.768.768,0,0,0-1.086-1.086l-1.569,1.569a.768.768,0,0,0,.543,1.311Z"
              transform="translate(-349.435 -66.535)"
            />
            <path
              class="svgSunRay"
              data-name="Path 17"
              d="M419.434,236.457h-2.219a.768.768,0,0,0,0,1.536h2.219a.768.768,0,0,0,0-1.536Z"
              transform="translate(-400.083 -227.165)"
            />
            <path
              class="svgSunRay"
              data-name="Path 18"
              d="M365.04,363.954a.768.768,0,1,0-1.086,1.086l1.569,1.569a.768.768,0,0,0,1.086-1.086Z"
              transform="translate(-349.436 -349.436)"
            />
            <path
              class="svgSunRay"
              data-name="Path 19"
              d="M237.225,416.447a.768.768,0,0,0-.768.768v2.219a.768.768,0,0,0,1.536,0v-2.219A.768.768,0,0,0,237.225,416.447Z"
              transform="translate(-227.165 -400.083)"
            />
            <path
              class="svgSunRay"
              data-name="Path 20"
              d="M71.051,363.955l-1.569,1.569a.768.768,0,1,0,1.086,1.086l1.569-1.569a.768.768,0,0,0-1.086-1.086Z"
              transform="translate(-66.536 -349.437)"
            />
            <path
              class="svgSunRay"
              data-name="Path 21"
              d="M3.755,237.225a.768.768,0,0,0-.768-.768H.768a.768.768,0,0,0,0,1.536H2.987A.768.768,0,0,0,3.755,237.225Z"
              transform="translate(0 -227.165)"
            />
            <path
              class="svgSunRay"
              data-name="Path 22"
              d="M71.053,72.137a.768.768,0,1,0,1.086-1.086L70.57,69.482a.768.768,0,0,0-1.086,1.086Z"
              transform="translate(-66.537 -66.536)"
            />
          </g>
        </g>
      </svg>
    </div>
  </aside>
</template>

<script>
export default {
  computed: {
    darkTheme() {
      return this.$store.state.app.isDark;
    },

    IS_DARK: {
      get: function () {
        return this.$store.state.app.isDark;
      },
      set: function (newValue) {
        window.localStorage.setItem(
          "veganify_isdark",
          JSON.stringify(newValue)
        );
        this.$store.commit("app/SET_THEME", newValue);
      },
    },
  },

  methods: {
    darkToggle() {
      this.IS_DARK = !this.IS_DARK;
      this.$store.dispatch("app/setThemeBodyAttr");
    },
  },
};
</script>
