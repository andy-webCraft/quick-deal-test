<template>
  <div class="home-view-wrapper">
    <div>
      <h2 class="home-title">Task Manager Test App</h2>
      <h3>created by andy-webCraft</h3>
    </div>

    <div class="list-wrapper">
      <h3 class="list-title">Stack:</h3>
      <ul>
        <li><span>vue 2</span></li>
        <li><span>vue-router</span></li>
        <li><span>vuex</span></li>
        <li><span>typescript</span></li>
      </ul>
    </div>

    <div class="list-wrapper">
      <h3 class="list-title">Links:</h3>
      <ul>
        <li><span>email: </span><a href="mailto:">andy.webcraft@gmail.com</a></li>
        <li>
          <span>github: </span>
          <a href="https://github.com/andy-webCraft" target="_blank">andy-webCraft</a>
        </li>
        <li>
          <span>telegram: </span>
          <a href="https://t.me/andy_webCraft" target="_blank">@andy_webCraft</a>
        </li>
        <li>
          <span>hh.ru: </span>
          <a href="https://hh.ru/resume/48bd8ca2ff0aec8af40039ed1f423150527830" target="_blank">
            click
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.home-view-wrapper {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.home-title {
  font-size: 24px;
  margin-bottom: 0.5rem;
}

.list-wrapper h3 {
  font-size: 20px;
  margin-bottom: 0.5rem;
}

.list-wrapper ul {
  padding-left: 24px;
}

.list-wrapper li {
  list-style: circle;
  margin-bottom: 0.5rem;
}

.list-wrapper a {
  color: #3b5998;
}
</style>
