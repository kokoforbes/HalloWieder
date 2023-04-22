<script>
import { mapState } from "vuex";
import RewardSummary from "../components/RewardSummary.vue";
export default {
  components: { RewardSummary },

  data() {
    return {};
  },

  computed: mapState({
    rewards: (state) => state.rewards,
  }),
};
</script>

<template>
  <div class="max-w-[2520px] mx-auto xl:p-20 md:p-10 sm:p-2 p-4">
    <div v-if="rewards.length" class="flex gap-8 flex-wrap">
      <RewardSummary
        v-for="reward in rewards"
        :key="reward.id"
        :reward="reward"
        :disabled="true"
      />
    </div>
    <p v-else class="text-center">You have not claimed any reward.</p>
  </div>
</template>

<style scoped></style>
