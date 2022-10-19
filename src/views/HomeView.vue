<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanban";
import { onMounted } from "vue";
import HeaderComponent from "../components/HeaderComponent.vue";

const kanban = useKanbanStore();

onMounted(() => {
  kanban.getTasksFromLocalStorage();
  kanban.getColumnsFromLocalStorage();
});
</script>

<template>
  <main w:h="screen" w:bg="true-gray-900">
    <HeaderComponent />
    <div w:display="flex" w:mx="2" w:gap="2">
      <section
        w:w="1/3"
        w:bg="true-gray-800"
        w:border="x y rounded-xl true-gray-700"
        v-for="column in kanban.columns"
        :key="column.id"
      >
        <h1>{{ column.title }}</h1>
        <h1 v-for="todo in kanban.tasks" :key="todo.id">{{ todo.id }}</h1>
      </section>
    </div>
  </main>
</template>
