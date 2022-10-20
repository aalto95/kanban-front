import {
  getLocalStorage,
  setLocalStorage,
} from "./../utils/local-storage.util";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useSidebarStore = defineStore("sidebar", () => {
  const isSidebarOpen = ref<boolean>(false);

  function getSidebarStateFromLocalStorage() {
    const sidebarState = getLocalStorage("sidebarState");
    console.log(sidebarState);
    sidebarState && (isSidebarOpen.value = true);
  }

  function toggleSidebar() {
    isSidebarOpen.value = !isSidebarOpen.value;
    setLocalStorage("sidebarState", isSidebarOpen.value);
  }

  return {
    isSidebarOpen,
    toggleSidebar,
    getSidebarStateFromLocalStorage,
  };
});
