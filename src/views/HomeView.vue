<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanban";
import { onMounted } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";

const kanban = useKanbanStore();

onMounted(() => {
  kanban.getTasksFromLocalStorage();
});
</script>

<template>
  <main w:h="screen" w:bg="true-gray-900">
    <HeaderComponent />
    <h1 v-for="todo in kanban.tasks" :key="todo.id">{{ todo.id }}</h1>
  </main>
</template>
