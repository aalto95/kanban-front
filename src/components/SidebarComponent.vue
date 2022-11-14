<template>
  <div
    w:h="screen"
    w:text="white"
    w:bg="true-gray-800"
    w:border="r true-gray-700"
    class="fixed transition-all duration-300 z-10"
    :class="sidebar.isSidebarOpen ? 'w-screen md:w-60 md:mr-60' : 'w-16 mr-16'"
  >
    <div w:display="flex" w:h="screen" w:flex="col" w:justify="between">
      <div>
        <header
          w:h="16 md:24"
          w:display="flex"
          w:items="center"
          w:gap="2"
          w:pl="2"
          class="relative"
        >
          <ViewColumnsIcon class="w-12 h-12" />
          <h1
            w:text="white 3xl"
            w:font="bold"
            w:display="flex"
            w:justify="center"
            w:items="center"
            w:gap="2"
            :class="sidebar.isSidebarOpen ? 'block absolute left-16' : 'hidden'"
          >
            Kanban
          </h1>
        </header>
        <div :class="sidebar.isSidebarOpen ? 'flex flex-col' : 'invisible'">
          <h1 :class="sidebar.isSidebarOpen ? 'pl-2 mb-2' : ''">
            ALL BOARDS ({{ kanban.boards.length }})
          </h1>
          <button
            v-for="board in kanban.boards"
            :key="board.id"
            :class="[
              kanban.currentBoardId === board.id ? 'bg-violet-500' : '',
              sidebar.isSidebarOpen ? 'pl-2' : '',
            ]"
            w:border="rounded-tr-full rounded-br-full"
            w:display="flex"
            w:items="center"
            w:gap="2"
            w:py="2"
            w:mr="2"
            @click="changeBoard(board.id)"
          >
            <DocumentIcon class="w-6 h-6" />
            {{ board.title }}
          </button>
          <button
            w:display="flex"
            w:items="center"
            w:gap="2"
            w:py="2"
            :class="sidebar.isSidebarOpen ? 'pl-2' : ''"
            @click="addNewBoard()"
          >
            <DocumentPlusIcon class="w-6 h-6" />Create New Board
          </button>
        </div>
      </div>
      <footer w:display="flex" w:justify="center" w:items="center" w:mb="12">
        <button @click="toggleSidebar()">
          <EyeSlashIcon v-if="sidebar.isSidebarOpen" class="w-6 h-6" />
          <EyeIcon v-else class="w-6 h-6" />
        </button>
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  EyeSlashIcon,
  EyeIcon,
  ViewColumnsIcon,
  DocumentPlusIcon,
  DocumentIcon,
} from "@heroicons/vue/24/solid";
import { useSidebarStore } from "@/stores/sidebar";
import { onMounted } from "vue";
import { useKanbanStore } from "@/stores/kanban";

const sidebar = useSidebarStore();
const kanban = useKanbanStore();

function toggleSidebar() {
  sidebar.toggleSidebar();
}

function addNewBoard() {
  kanban.pushNewBoard();
}

function changeBoard(boardId: string) {
  kanban.setCurrentBoard(boardId);
}

onMounted(() => {
  sidebar.getSidebarStateFromLocalStorage();
  kanban.getCurrentBoardIdFromLocalStorage();
});
</script>

<style scoped></style>
