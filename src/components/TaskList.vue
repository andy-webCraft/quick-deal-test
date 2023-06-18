<template>
  <h2 v-if="!tasks.length" class="empty-title">right now you don't have any tasks...</h2>

  <div v-else class="task-list-wrapper">
    <ul class="task-list">
      <li v-for="task in tasks" :key="task.id">
        <task-list-item :task="task" :editCallback="openModalHanlder" />
      </li>
    </ul>

    <app-modal :isShow="isShowModal" :closeCallback="closeModalHanlder">
      <edit-task-form
        v-if="editableTask"
        :task="editableTask"
        :submitCallback="closeModalHanlder"
      />
    </app-modal>
  </div>
</template>

<script setup lang="ts">
import { useStore } from "@/store";
import { computed, ref } from "vue";
import type { ITask } from "@/types";
import TaskListItem from "./TaskListItem.vue";
import AppModal from "./AppModal.vue";
import EditTaskForm from "./EditTaskForm.vue";

const store = useStore();
const tasks = computed(() => store.state.tasks);

const editableTask = ref<ITask | null>(null);
const isShowModal = ref<boolean>(false);

const openModalHanlder = (task: ITask) => {
  editableTask.value = task;
  isShowModal.value = true;
};

const closeModalHanlder = () => {
  isShowModal.value = false;
  editableTask.value = null;
};
</script>

<style scoped>
.empty-title {
  margin-top: 1.5rem;
}

.task-list li {
  margin-top: 1.5rem;
}
</style>
