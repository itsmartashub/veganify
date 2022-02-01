export const state = () => ({
    apik: "",
    isDark: false
});

export const actions = {
    setApik({ commit }, apik) {
        commit("SET_APIK", apik);
    }
};

export const mutations = {
    SET_APIK(state, apik) {
        state.apik = apik;
    },

    SET_THEME(state) {
        state.isDark =
            JSON.parse(window.localStorage.getItem("veganify_isdark")) || false;
    }
};
