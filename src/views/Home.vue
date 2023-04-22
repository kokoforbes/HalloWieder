<script>
import { mapState } from "vuex";
import RewardSummary from "../components/RewardSummary.vue";
export default {
  components: { RewardSummary },
  data() {
    return {
      isLoading: false,
      rewards: [],
    };
  },

  computed: mapState({
    // arrow functions can make the code very succinct!
    count: (state) => state.count,
  }),

  async mounted() {
    this.isLoading = true;
    await fetch("https://staging.helloagain.at/api/v1/clients/5189/bounties/")
      .then((res) => res.json())
      .then((json) => {
        this.rewards = json;
        console.log(json);
      });
    this.isLoading = false;
  },
};
</script>

<template>
  <div class="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
    <RewardSummary
      v-for="reward in rewards"
      :key="reward.id"
      :reward="reward"
    />
  </div>
</template>

<style scoped></style>
