<template>
  <form @submit.prevent="subminHandler">
    <div class="input-wrapper">
      <input class="input" type="text" v-model="title" placeholder="enter task title..." />
    </div>

    <div class="input-wrapper">
      <input class="input" type="text" v-model="body" placeholder="enter task body..." />
    </div>

    <button class="btn" type="submit" :disabled="Boolean(!title || !body)">Save</button>
  </form>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { ref, toRefs } from "vue";
import type { ITask } from "@/types";

const props = defineProps<{ task: ITask; submitCallback?: () => void }>();
const { task, submitCallback } = toRefs(props);

const store = useStore();

const title = ref<string>(task.value.title);
const body = ref<string>(task.value.body);

const subminHandler = () => {
  store.commit("updateTask", { ...task.value, title: title.value, body: body.value });

  if (submitCallback?.value) submitCallback.value();
};
</script>

<style scoped></style>
