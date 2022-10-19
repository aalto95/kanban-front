import { setLocalStorage } from "./../utils/local-storage.util";
import { getLocalStorage } from "../utils/local-storage.util";
import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { TaskModel } from "@/models/task.model";
import type { ColumnModel } from "@/models/column.model";

export const useKanbanStore = defineStore("kanban", () => {
  const tasks = ref<TaskModel[]>([]);
  const columns = ref<ColumnModel[]>([]);
  const todo = computed(() => tasks.value.filter((t) => t.status === "todo"));

  function pushNewTask(task: Partial<TaskModel>) {
    task.id = self.crypto.randomUUID();
    tasks.value.push(task as TaskModel);
    setLocalStorage("tasks", tasks.value);
  }

  function removeTask(task: TaskModel) {
    tasks.value = tasks.value.filter((t) => t.id !== task.id);
    setLocalStorage("tasks", tasks.value);
  }

  function getTasksFromLocalStorage() {
    const tasksFromLocalStorage = getLocalStorage("tasks");
    tasksFromLocalStorage && (tasks.value = tasksFromLocalStorage);
  }

  function initColumns() {
    columns.value = [
      {
        id: self.crypto.randomUUID(),
        title: "To Do",
        order: 0,
      },
      {
        id: self.crypto.randomUUID(),
        title: "In Progress",
        order: 1,
      },
      {
        id: self.crypto.randomUUID(),
        title: "Done",
        order: 2,
      },
    ];
  }

  function getColumnsFromLocalStorage() {
    const gottenColumns = getLocalStorage("columns");
    gottenColumns ? (columns.value = gottenColumns) : initColumns();
  }

  function pushNewColumn(column: Partial<ColumnModel>) {
    column.id = self.crypto.randomUUID();
    columns.value.push(column as ColumnModel);
    setLocalStorage("columns", columns.value);
  }

  function removeColumn(column: ColumnModel) {
    columns.value = columns.value.filter((c) => c !== column);
    setLocalStorage("columns", columns.value);
  }

  return {
    tasks,
    todo,
    columns,
    pushNewTask,
    getTasksFromLocalStorage,
    getColumnsFromLocalStorage,
    pushNewColumn,
    removeTask,
    removeColumn,
  };
});
