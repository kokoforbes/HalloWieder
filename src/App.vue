<script>
export default {
  computed: {
    currentRoute() {
      return this.$route.path;
    },
  },
};
</script>

<template>
  <div id="app">
    <header class="p-4 border-b">
      <nav
        class="flex justify-between items-center w-full max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4"
      >
        <router-link to="/">
          <img
            src="/helloagain.png"
            alt="Hello again"
            width="100"
            height="100"
          />
        </router-link>
        <router-link v-if="currentRoute != '/'" to="/">Home</router-link>
        <router-link v-if="currentRoute != '/rewards'" to="/rewards"
          >Rewards</router-link
        >
      </nav>
    </header>

    <router-view />
  </div>
</template>

<style scoped></style>
