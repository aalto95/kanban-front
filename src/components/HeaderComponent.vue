<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanban";
import { useModalStore } from "@/stores/modal";
import { PlusIcon } from "@heroicons/vue/24/solid";

const modal = useModalStore();
const kanban = useKanbanStore();

function handleAdd() {
  modal.toggleModal(true);
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
    w:mb="4"
  >
    <h1 w:text="3xl white" w:font="bold">
      {{ kanban.currentBoard?.title }}
    </h1>
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
  </header>
</template>

<style scoped></style>
