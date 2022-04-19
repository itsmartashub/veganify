<template>
    <button
        class="themetoggle"
        :class="{ 'themetoggle--dark': IS_DARK }"
        @click="darkToggle"
        aria-label="Change Website Theme"
    >
        <svg
            class="themetoggle__svg themetoggle__svg--moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20.18 20.174"
        >
            <path
                d="M12.412,22.218h-.1a10.423,10.423,0,0,1-7.42-3.184A10.574,10.574,0,0,1,4.628,4.881a10.241,10.241,0,0,1,4.044-2.77A1,1,0,0,1,9.986,3.344a8.492,8.492,0,0,0,1.961,8.906,8.563,8.563,0,0,0,8.926,1.961,1.011,1.011,0,0,1,1.284,1.3,10.271,10.271,0,0,1-2.366,3.67,10.392,10.392,0,0,1-7.38,3.033Z"
                transform="translate(-2.04 -2.043)"
            />
        </svg>

        <svg
            class="themetoggle__svg themetoggle__svg--sun"
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
    </button>
</template>

<script>
export default {
    computed: {
        darkTheme() {
            return this.$store.state.app.isDark
        },

        IS_DARK: {
            get: function () {
                return this.$store.state.app.isDark
            },
            set: function (newValue) {
                window.localStorage.setItem(
                    'veganify_isdark',
                    JSON.stringify(newValue)
                )
                this.$store.commit('app/SET_THEME', newValue)
            },
        },
    },

    methods: {
        darkToggle() {
            this.IS_DARK = !this.IS_DARK
            this.$store.dispatch('app/setThemeBodyAttr')
        },
    },

    // created() {
    // if (process.client) {
    //     console.log(process)
    // if (window.matchMedia('(prefers-color-scheme: dark)').matched)
    //     console.log('DARK')
    // this.IS_DARK = window.matchMedia(
    //     '(prefers-color-scheme: dark)'
    // ).matched
    // this.$store.dispatch('app/setThemeBodyAttr')
    // }
    // },
}
</script>
