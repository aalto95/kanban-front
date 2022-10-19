<template>
  <div
    w:blur="xl"
    w:position="absolute"
    w:h="screen"
    w:w="screen"
    w:top="0"
    w:bg="black opacity-50"
    w:display="flex"
    w:justify="center"
    w:items="center"
  >
    <div w:bg="true-gray-600" w:w="screen md:1/2 xl:1/3">
      <header w:display="flex" w:justify="end">
        <button @click="modal.toggleModal(false)">
          <XMarkIcon class="w-6 h-6" />
        </button>
      </header>
      <h1 w:text="white">Task Creation Modal</h1>
      <input type="text" v-model="newTask.title" />
      <input type="text" v-model="newTask.description" />
      <select name="columns" id="columns" v-model="newTask.columnId">
        <option
          :value="column.id"
          v-for="column in kanban.columns"
          :key="column.id"
        >
          {{ column.title }}
        </option>
      </select>
      <button @click="addNewTask()">addNewTask</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanban";
import { useModalStore } from "@/stores/modal";
import { XMarkIcon } from "@heroicons/vue/24/solid";
import { ref } from "vue";

const modal = useModalStore();
const kanban = useKanbanStore();

const newTask = ref({
  title: "",
  description: "",
  columnId: "",
});

function addNewTask() {
  kanban.pushNewTask(newTask.value);
}
</script>

<style scoped></style>
