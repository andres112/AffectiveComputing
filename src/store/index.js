import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    section: null,
    test_id: null,
  },
  mutations: {
    setSection(state, payload) {
      state.section = payload;
    },
    setTestId(state, payload) {
      state.test_id = payload;
    },
  },
  actions: {
    setTest: async function({ commit }) {
      const id = Math.floor(100000 + Math.random() * 900000);
      const startTime = Date.now();
      const info = {
        test_id: id,
        start_time: startTime,
        end_time: null,
        user: null,
        dialog: null,
      };
      try {
        // this is better the remote storage is seen as rest service
        const res = await fetch(
          `https://empathy-74497-default-rtdb.firebaseio.com/tests/${id}.json`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(info),
          }
        );
        const dataDB = await res.json();
        commit("setTestId", id);
      } catch (error) {
        console.error(error);
      }
    },
  },
  modules: {},
});
