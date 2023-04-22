import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      rewards: [],
    };
  },
  mutations: {
    ADD_REWARD(state, payload) {
      state.rewards.push(payload);
    },

    REMOVE_REWARD(state, payload) {
      state.rewards = state.rewards.filter((rewardItem) => {
        return rewardItem.id != payload.id;
      });
    },
  },
  actions: {
    addReward({ commit }, payload) {
      commit("ADD_REWARD", payload);
    },
  },

  getters: {
    getRewards(state) {
      return state.rewards;
    },
  },
});

export default store;
