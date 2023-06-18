<template>
  <div class="task-wrapper">
    <div class="task-info">
      <h3>{{ task.title }}</h3>
      <p>{{ task.body }}</p>
    </div>

    <div class="task-actions">
      <button class="btn" @click="editHandler">Edit</button>
      <button class="btn" @click="deleteHandler">Delete</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { toRefs } from "vue";
import type { ITask } from "@/types";

const props = defineProps<{ task: ITask; editCallback: (task: ITask) => void }>();
const { task, editCallback } = toRefs(props);

const store = useStore();

const editHandler = () => {
  editCallback.value(task.value);
};

const deleteHandler = () => {
  store.commit("deleteTask", task.value.id);
};
</script>

<style scoped>
.task-wrapper {
  max-width: 600px;
  min-width: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0px 5px 10px 0px rgba(34, 60, 80, 0.2);
}

.task-info h3 {
  font-weight: 600;
  margin-bottom: 1rem;
}

.task-actions button {
  margin-left: 1rem;
}
</style>
