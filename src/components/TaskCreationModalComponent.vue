<template>
  <input type="checkbox" id="my-modal-4" class="modal-toggle" />
  <div class="modal">
    <label class="modal-box relative">
      <label
        for="my-modal-4"
        class="btn btn-sm btn-circle absolute right-2 top-2 mb-4"
        >✕</label
      >
      <div w:display="flex" w:flex="col" w:gap="2" w:text="white" w:mt="6">
        <input
          type="text"
          placeholder="Title"
          w:border="rounded-xl"
          v-model="newTask.title"
          class="input input-primary"
        />
        <input
          type="text"
          placeholder="Description"
          w:border="rounded-xl"
          v-model="newTask.description"
          class="input input-primary"
        />
        <select
          name="columns"
          id="columns"
          w:border="rounded-xl"
          v-model="newTask.columnId"
          class="select select-primary"
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
          <button @click="addNewTask()" class="btn btn-primary">Add</button>
        </footer>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanban";
import { useModalStore } from "@/stores/modal";
import { ref } from "vue";

const modal = useModalStore();
const kanban = useKanbanStore();

const newTask = ref({
  title: "",
  description: "",
  columnId: "",
});

function addNewTask() {
  kanban.pushNewTask(
    {
      title: newTask.value.title,
      description: newTask.value.description,
    },
    newTask.value.columnId
  );
  setTimeout(() => {
    modal.toggleModal(false);
  }, 0);
}
</script>

<style scoped></style>
