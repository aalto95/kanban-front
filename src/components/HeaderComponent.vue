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
  <header class="navbar bg-true-gray-800 mb-2">
    <div class="flex-1">
      <h1 w:text="3xl white" w:font="bold">
        {{ kanban.currentBoardTitle }}
      </h1>
    </div>
    <div class="flex-none">
      <button class="btn modal-button gap-2" @click="handleAdd()">
        <PlusIcon class="w-6 h-6" />
        <p w:display="hidden md:block">Add New Task</p>
      </button>
    </div>
  </header>
</template>

<style scoped></style>
