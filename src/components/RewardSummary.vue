<script>
import { mapActions } from "vuex";

export default {
  name: "RewardSummary",
  props: {
    reward: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },

  methods: {
    ...mapActions(["addReward"]),

    claimReward(reward) {
      this.addReward(reward);
    },
  },
};
</script>

<template>
  <div
    class="container mx-auto p-9 flex flex-col justify-between bg-white max-w-sm rounded-2xl overflow-hidden border hover:shadow-2xl transition duration-300 h-[538px]"
  >
    <img
      class="rounded-xl w-80 h-80 object-contain"
      :src="reward.image ? reward.image : '/helloagain.jpeg'"
      :alt="reward.name"
    />

    <h1 class="mt-5 text-2xl font-semibold line-clamp-2">
      {{ reward.name }}
    </h1>

    <div class="flex justify-between items-center mt-5">
      <p class="mt-2 font-semibold">{{ reward.needed_points }}</p>
      <button
        @click="claimReward(reward)"
        class="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110"
      >
        Claim Reward
      </button>
    </div>
  </div>
</template>

<style scoped></style>
