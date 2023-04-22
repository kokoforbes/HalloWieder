<script>
import { mapState } from "vuex";
export default {
  data() {
    return {};
  },

  computed: mapState({
    // arrow functions can make the code very succinct!
    count: (state) => state.count,
  }),
};
</script>

<template>
  <div>Rewards</div>
</template>

<style scoped></style>
