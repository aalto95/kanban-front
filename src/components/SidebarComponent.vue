<template>
  <div
    w:h="screen"
    w:text="white"
    w:bg="true-gray-800"
    w:border="r true-gray-700"
    class="fixed transition-all duration-300"
    :class="sidebar.isSidebarOpen ? 'w-60 mr-60' : 'w-16 mr-16'"
  >
    <div w:display="flex" w:h="screen" w:flex="col" w:justify="between">
      <div>
        <header w:h="16 md:24" w:display="flex" w:justify="center" w:gap="2">
          <ViewColumnsIcon class="w-9 md:w-12" />
          <h1
            w:text="white xl md:3xl"
            w:font="bold"
            w:display="flex"
            w:justify="center"
            w:items="center"
            w:gap="2"
            :class="sidebar.isSidebarOpen ? 'block' : 'hidden'"
          >
            Kanban
          </h1>
        </header>
        <div :class="sidebar.isSidebarOpen ? 'block' : 'invisible'">
          <h1>ALL BOARDS</h1>
        </div>
      </div>
      <footer w:h="60" w:display="flex" w:justify="center">
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
} from "@heroicons/vue/24/solid";
import { useSidebarStore } from "@/stores/sidebar";
import { onMounted } from "vue";

const sidebar = useSidebarStore();

function toggleSidebar() {
  sidebar.toggleSidebar();
}

onMounted(() => {
  sidebar.getSidebarStateFromLocalStorage();
});
</script>

<style scoped></style>
