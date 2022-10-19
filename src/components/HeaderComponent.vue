<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanban";
import { PlusIcon, ViewColumnsIcon } from "@heroicons/vue/24/solid";

const kanban = useKanbanStore();

function handleAdd() {
  console.log("do");
  kanban.pushNewTask({
    id: self.crypto.randomUUID(),
    title: "New Todo",
    description: "New Todo Description",
    status: "todo",
  });
}
</script>

<template>
  <header
    w:display="flex"
    w:justify="between"
    w:items="center"
    w:bg="true-gray-800"
    w:h="16 md:24"
    w:px="4 md:8"
    w:border="b true-gray-700"
    w:mb="2"
  >
    <h1
      w:text="white xl md:3xl"
      w:font="bold"
      w:display="flex"
      w:justify="center"
      w:items="center"
      w:gap="2"
    >
      <ViewColumnsIcon class="w-9 md:w-12" />
      Kanban
    </h1>
    <div>
      <button
        w:bg="indigo-500"
        w:border="rounded-full"
        w:p="2 md:3"
        w:text="white"
        w:display="flex"
        w:justify="center"
        w:items="center"
        w:gap="2"
        @click="handleAdd()"
      >
        <PlusIcon class="w-6 h-6" />
        <p w:display="hidden md:block">Add New Task</p>
      </button>
    </div>
  </header>
</template>

<style scoped></style>
