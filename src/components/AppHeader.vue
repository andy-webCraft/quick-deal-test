<template>
  <header>
    <div class="container">
      <div class="header-wrapper">
        <router-link to="/" exact-active-class="">
          <h1 class="logo">Quick Deal Test</h1>
        </router-link>

        <nav>
          <router-link to="/">Home</router-link>
          <router-link to="/tasks">Tasks</router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped>
header {
  width: 100%;
  height: 64px;
  color: #ffffff;
  background-color: #8b9dc3;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
}

.header-wrapper {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 4rem;
}

.logo {
  font-size: 24px;
  cursor: pointer;
}

nav a {
  margin-right: 1rem;
}
</style>
