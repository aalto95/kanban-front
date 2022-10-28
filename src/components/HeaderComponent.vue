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
      {{ kanban.currentBoardTitle }}
    </h1>
    <label class="btn modal-button gap-2" for="my-modal-4">
      <PlusIcon class="w-6 h-6" />
      <p w:display="hidden md:block">Add New Task</p>
    </label>
  </header>
</template>

<style scoped></style>
