<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import router from "./router";
import { useKanbanStore } from "./stores/kanban";

const kanban = useKanbanStore();

onMounted(() => {
  kanban.getBoardsFromLocalStorage();
  kanban.getTasksFromLocalStorage();
  kanban.getColumnsFromLocalStorage();
  router.push({ name: "board", params: { id: kanban.currentBoardId } });
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
