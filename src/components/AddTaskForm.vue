<template>
  <form @submit.prevent="subminHandler">
    <div class="input-wrapper">
      <input class="input" type="text" v-model="title" placeholder="enter task title..." />
    </div>

    <div class="input-wrapper">
      <input class="input" type="text" v-model="body" placeholder="enter task body..." />
    </div>

    <button class="btn" type="submit" :disabled="Boolean(!title || !body)">Add</button>
  </form>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { ref } from "vue";

const store = useStore();

const title = ref<string>("");
const body = ref<string>("");

const subminHandler = () => {
  store.commit("addTask", { title: title.value, body: body.value });
  title.value = "";
  body.value = "";
};
</script>

<style scoped></style>
