<script setup lang="ts">
import { onMounted } from "vue";
import { RouterView } from "vue-router";
import { useKanbanStore } from "./stores/kanban";

const kanban = useKanbanStore();

onMounted(() => {
  kanban.getBoardsFromLocalStorage();
  kanban.getTasksFromLocalStorage();
  kanban.getColumnsFromLocalStorage();
});
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
