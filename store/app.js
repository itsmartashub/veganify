export const state = () => ({
    isDark: false,
    isWaiting: false,
    notification: {
        display: false,
        content: 'This is default notification placeholder',
        className: 'notification--green',
    },
})

export const mutations = {
    GET_THEME_FROM_LS(state) {
        // if (window.localStorage) {
        //     let isColorSchemeDark = window.matchMedia(
        //         '(prefers-color-scheme: dark)'
        //     ).matched

        //     console.log(window.localStorage.veganify_isdark)
        //     console.log(
        //         window.matchMedia('(prefers-color-scheme: dark)').matched
        //     )
        // }

        // if (!window.localStorage.getItem('veganify_isdark')) {
        //     window.localStorage.setItem(
        //         'veganify_isdark',
        //         JSON.stringify(isColorSchemeDark)
        //     )
        // }
        state.isDark =
            JSON.parse(window.localStorage.getItem('veganify_isdark')) || false
    },

    SET_THEME(state, payload) {
        state.isDark = payload
    },

    SET_THEME_BODY_ATTR(state) {
        state.isDark
            ? document.body.setAttribute('data-theme', 'dark')
            : document.body.removeAttribute('data-theme')
    },

    SET_IS_WAITING(state, payload) {
        state.isWaiting = payload
    },
}

export const actions = {
    setThemeBodyAttr({ state }) {
        state.isDark
            ? document.body.setAttribute('data-theme', 'dark')
            : document.body.removeAttribute('data-theme')
    },
}
