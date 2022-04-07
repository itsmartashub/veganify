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
    SET_NOTIFICATION(state, { display, content, className }) {
        state.notification.display = display
        state.notification.content = content
        state.notification.className = className
    },
    // SET_NOTIFICATION(state, payload) {
    //   if (payload.display) {
    //     setTimeout(() => {
    //       state.notification.display = false;
    //     }, 2500);
    //   }

    //   state.notification.display = payload.display;
    //   state.notification.content = payload.content;
    //   state.notification.className = payload.className;
    // },
}

export const actions = {
    setThemeBodyAttr({ state }) {
        state.isDark
            ? document.body.setAttribute('data-theme', 'dark')
            : document.body.removeAttribute('data-theme')
    },
    notification({ commit }, { display, content, className }) {
        if (display) {
            setTimeout(() => {
                commit('SET_NOTIFICATION', { display: false })
            }, 4000)

            commit('SET_NOTIFICATION', { display, content, className })
        }
    },
}

export const getters = {
    GET_NOTIFICATION(state) {
        return state.notification
    },
}
