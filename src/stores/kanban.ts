import { setLocalStorage } from "./../utils/local-storage.util";
import { getLocalStorage } from "../utils/local-storage.util";
import { ref } from "vue";
import { defineStore } from "pinia";
import type { TaskModel } from "@/models/task.model";

export const useKanbanStore = defineStore("kanban", () => {
  const tasks = ref<TaskModel[]>([]);

  function pushNewTask(task: TaskModel) {
    tasks.value.push(task);
    setLocalStorage("tasks", tasks.value);
  }

  function getTasksFromLocalStorage() {
    tasks.value = getLocalStorage("tasks");
  }

  return { tasks, pushNewTask, getTasksFromLocalStorage };
});
