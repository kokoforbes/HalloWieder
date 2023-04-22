<script>
export default {};
</script>

<template>
  <div id="app">
    <header class="p-4 border-b">
      <nav class="flex justify-between items-center w-full">
        <router-link to="/">
          <img
            src="/helloagain.png"
            alt="Hello again"
            width="100"
            height="100"
          />
        </router-link>

        <router-link to="/rewards">Rewards</router-link>
      </nav>
    </header>

    <router-view />
  </div>
</template>

<style scoped></style>
