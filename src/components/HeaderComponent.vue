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
    w:h="24"
    w:px="8"
    class="3 border-b border-true-gray-700"
  >
    <h1
      w:text="white 3xl"
      w:font="bold"
      w:display="flex"
      w:justify="center"
      w:items="center"
      w:gap="2"
    >
      Kanban
      <ViewColumnsIcon class="w-12 h-12" />
    </h1>
    <div>
      <button
        w:bg="indigo-500"
        w:border="rounded-full"
        w:p="3"
        w:text="white"
        w:display="flex"
        w:justify="center"
        w:items="center"
        w:gap="2"
        @click="handleAdd()"
      >
        <PlusIcon class="w-6 h-6" />
        Add New Task
      </button>
    </div>
  </header>
</template>

<style scoped></style>
