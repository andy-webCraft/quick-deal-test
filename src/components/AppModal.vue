<template>
  <div v-show="isShow" class="overlay" @mousedown="clickOutsideHanlder">
    <div class="content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs, watch } from "vue";

const props = defineProps<{ isShow: boolean; closeCallback: () => void }>();
const { isShow, closeCallback } = toRefs(props);

watch(isShow, () => {
  if (isShow.value) document.body.classList.add("lock");
  else document.body.classList.remove("lock");
});

const clickOutsideHanlder = (e: MouseEvent) => {
  if ((e.target as Element).classList.contains("overlay")) closeCallback.value();
};
</script>

<style scoped>
.overlay {
  display: flex;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 1rem;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 9999;
}

.content {
  background-color: #f7f7f7;
  border-radius: 1rem;
  padding: 1rem;
  margin: auto;
}
</style>
