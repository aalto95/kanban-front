<script setup lang="ts">
import { useModalStore } from "@/stores/modal";
import { PlusIcon, ViewColumnsIcon } from "@heroicons/vue/24/solid";

const modal = useModalStore();

function handleAdd() {
  modal.toggleModal(true);
}
</script>

<template>
  <header
    w:display="flex"
    w:justify="end"
    w:items="center"
    w:bg="true-gray-800"
    w:h="16 md:24"
    w:px="4 md:8"
    w:border="b true-gray-700"
    w:mb="4"
  >
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
