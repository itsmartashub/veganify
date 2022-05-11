export const state = () => ({
    theme: 'light',
    isWaiting: false,
    notifications: [],
    hideCategories: false,
})

export const mutations = {
    SET_THEME(state, theme) {
        state.theme = theme
    },
    SET_THEME_BODY_CLASSNAME(_, themeName) {
        document.body.className = themeName
    },
    SET_IS_WAITING(state, payload) {
        state.isWaiting = payload
    },

    SET_SCROLL_INTO_VIEW(_, { _selector }) {
        let elToReach = document.querySelector(_selector)

        elToReach?.scrollIntoView({
            behavior: 'smooth',
        })
    },

    SET_HIDE_CATEGORIES(state, hideCateg) {
        state.hideCategories = hideCateg
    },

    PUSH_NOTIFICATION(state, notification) {
        state.notifications.push({
            ...notification,
            id: (
                Math.random().toString(36) + Date.now().toString(36)
            ).substring(2),
        })
    },

    REMOVE_NOTIFICATION(state, notificationToRemove) {
        state.notifications = state.notifications.filter(
            (notification) => notification.id != notificationToRemove.id
        )
    },
    CLEAR_NOTIFICATIONS(state) {
        if (!state.notifications[0]) return

        // state.notifications = []

        while (state.notifications.length > 0) {
            state.notifications.pop()
        }
    },
}

export const actions = {
    addNotification({ commit }, notification) {
        commit('PUSH_NOTIFICATION', notification)
    },
    removeNotification({ commit }, notification) {
        commit('REMOVE_NOTIFICATION', notification)
    },
}
