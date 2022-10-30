import type { ToastModel } from "@/models/toast.model";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotificationsStore = defineStore("notifications", () => {
  const toastStack = ref<ToastModel[]>([]);

  function pushNewToast(toastTitle: string) {
    const id = self.crypto.randomUUID();
    toastStack.value.push({
      id,
      title: toastTitle,
    });
    setTimeout(() => {
      removeToast(id);
    }, 3000);
  }

  function removeToast(id: string) {
    toastStack.value = toastStack.value.filter((toast) => toast.id !== id);
  }

  return {
    toastStack,
    pushNewToast,
  };
});
