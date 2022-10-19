import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const isModalOpen = ref<boolean>(false);

  function toggleModal(bool: boolean) {
    isModalOpen.value = bool;
  }

  return {
    isModalOpen,
    toggleModal,
  };
});
