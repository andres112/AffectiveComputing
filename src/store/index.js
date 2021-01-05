import Vue from "vue";
import Vuex from "vuex";
import { getLastTest } from "@/assets/helpers.js";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    section: null,
    test_id: null,
    empathy: false,
    user: {},
    dialog: {
      q1: false,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
    },
    // Dialog Control
    isAnswer: false,
    step: 1,
    sending: false,
  },
  mutations: {
    setSection(state, payload) {
      state.section = payload;
    },
    setTestId(state, payload) {
      state.test_id = payload;
    },
    setTestMode(state, mode) {
      state.empathy = mode;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setSendStatus(state, st) {
      state.sending = st;
    },
    // Dialog Control
    changeDialogState(state, status) {
      state.isAnswer = status;
    },
    nextDialogStep(state) {
      state.step = state.step > 5 ? 5 : state.step + 1;
    },
    setCurrentAnswer(state, res) {
      state.dialog[`q${state.step}`] = res;
    },
  },
  actions: {
    getTests: async function({ commit }) {
      // first retrieve the last test empathy (true or false)
      // by default the method is get
      try {
        const res = await fetch(
          "https://empathy-74497-default-rtdb.firebaseio.com/tests.json"
        );
        const data_db = await res.json();
        return data_db;
      } catch (error) {
        console.log(error);
      }
    },
    setTest: async function({ commit, state, dispatch }) {
      if (!state.sending) {
        commit("setSendStatus", true);
        const id = Math.floor(100000 + Math.random() * 900000);
        commit("setTestId", id);

        const all_tests = await dispatch("getTests");
        const emp_mode = await !getLastTest(id, all_tests);
        commit("setTestMode", emp_mode);

        const info = {
          test_id: id,
          start_time: Date.now(),
          empathy_mode: emp_mode, // opossite mode to the previous test in DB
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
          commit("setTestId", id);
        } catch (error) {
          console.log(error);
        } finally {
          commit("setSendStatus", false);
        }
      }
    },

    updateTest: async function({ commit, state }, payload) {
      if (!state.sending) {
        commit("setSendStatus", true);
        try {
          const res = await fetch(
            `https://empathy-74497-default-rtdb.firebaseio.com/tests/${payload.id}.json`,
            {
              method: "PATCH",
              body: JSON.stringify(payload.content),
            }
          );
        } catch (error) {
          console.error(error);
        } finally {
          commit("setSendStatus", false);
        }
      }
    },
  },
  modules: {},
});
