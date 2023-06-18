<template>
  <div id="app">
    <app-header />

    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from "@/components/AppHeader.vue";
import { useStore } from "@/store";

const store = useStore();
store.dispatch("getStateFromLocal");
</script>

<style scoped>
main {
  min-height: 100vh;
  padding-top: calc(64px + 2rem);
  padding-bottom: 2rem;
}
</style>
