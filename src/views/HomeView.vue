<script setup lang="ts">
import { useKanbanStore } from "@/stores/kanban";
import { useModalStore } from "@/stores/modal";
import HeaderComponent from "../components/HeaderComponent.vue";
import TaskCreationModalComponent from "../components/TaskCreationModalComponent.vue";
import SidebarComponent from "../components/SidebarComponent.vue";
import { useSidebarStore } from "@/stores/sidebar";

const kanban = useKanbanStore();
const modal = useModalStore();
const sidebar = useSidebarStore();
</script>

<template>
  <main w:min-h="screen" w:w="screen" w:bg="true-gray-900" w:display="flex">
    <SidebarComponent />
    <div
      w:w="full"
      class="transition-all duration-300 ml-16"
      :class="sidebar.isSidebarOpen ? 'md:ml-60' : ''"
    >
      <HeaderComponent />
      <div w:display="flex" w:mx="2" w:gap="2" w:flex="col md:row">
        <section
          w:w="full md:1/3"
          w:display="flex"
          w:flex="col"
          w:gap="2"
          w:pb="2"
          v-for="column in kanban?.boards[kanban.currentBoardIndex]?.columns"
          :key="column.id"
        >
          <header w:display="flex" w:gap="2" w:items="center" w:mb="4" w:bt="2">
            <div
              w:border="rounded-full"
              w:w="6"
              w:h="6"
              :class="column.color"
            ></div>
            <h1 class="uppercase" w:text="true-gray-500">
              {{ column.title }} ({{ column.tasks?.length || 0 }})
            </h1>
          </header>
          <div
            v-for="task in column.tasks"
            :key="task.id"
            w:bg="true-gray-800"
            w:border="x y rounded-xl true-gray-700"
            w:text="white"
            w:p="2"
          >
            <h1>
              {{ task.title }}
            </h1>
            <p>
              {{ task.description }}
            </p>
          </div>
        </section>
      </div>
    </div>
    <TaskCreationModalComponent v-if="modal.isModalOpen" />
  </main>
</template>
