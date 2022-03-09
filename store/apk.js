export const state = () => ({
    apik: "",
    isDark: false,
    loading: true
});

export const actions = {
    setApik({ commit }, apik) {
        commit("SET_APIK", apik);
    },

    setLoading(state, isLoading) {
        state.loading = isLoading;
    }
};

export const mutations = {
    SET_APIK(state, apik) {
        state.apik = apik;
    },

    SET_THEME(state) {
        state.isDark =
            JSON.parse(window.localStorage.getItem("veganify_isdark")) || false;
    },
    SET_LOADING(state, isLoading) {
        state.loading = isLoading;
    }
};
