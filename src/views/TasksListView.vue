<template>
  <div class="task-list-view-wrapper">
    <add-task-form />
    <task-list />
  </div>
</template>

<script setup lang="ts">
import AddTaskForm from "@/components/AddTaskForm.vue";
import TaskList from "@/components/TaskList.vue";
</script>

<style scoped>
.task-list-view-wrapper {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>
