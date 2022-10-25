<template>
  <div
    w:blur="xl"
    w:position="fixed"
    w:h="full"
    w:w="full"
    w:top="0"
    w:bg="black opacity-50"
    w:display="flex"
    w:justify="center"
    w:items="center"
  >
    <div
      w:bg="true-gray-800"
      w:w="5/6 md:1/2 xl:1/3"
      w:border="x y true-gray-900 opacity-100 rounded-lg"
      w:p="3"
    >
      <header w:display="flex" w:justify="between" w:mb="3">
        <h1 w:text="white 2xl">Create New Task</h1>
        <button @click="modal.toggleModal(false)" class="text-white">
          <XMarkIcon class="w-6 h-6" />
        </button>
      </header>
      <div w:display="flex" w:flex="col" w:gap="2" w:text="white">
        <input
          type="text"
          placeholder="Title"
          w:border="rounded-xl"
          w:bg="true-gray-900"
          v-model="newTask.title"
        />
        <input
          type="text"
          placeholder="Description"
          w:border="rounded-xl"
          w:bg="true-gray-900"
          v-model="newTask.description"
        />
        <select
          name="columns"
          id="columns"
          w:py="2"
          w:px="2.5"
          w:border="rounded-xl"
          w:bg="true-gray-900"
          v-model="newTask.columnId"
        >
          <option
            :value="column.id"
            v-for="column in kanban.boards[0].columns"
            :key="column.id"
          >
            {{ column.title }}
          </option>
        </select>
        <footer w:display="flex" w:justify="end">
          <button
            @click="addNewTask()"
            w:bg="indigo-500"
            w:py="2"
            w:px="4"
            w:border="rounded-xl"
            w:text="white"
            class="focus:shadow-md"
          >
            Add
          </button>
        </footer>
      </div>
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

function addNewTask(boardId, columnId) {
  kanban.pushNewTask(newTask.value);
  setTimeout(() => {
    modal.toggleModal(false);
  }, 0);
}
</script>

<style scoped></style>
