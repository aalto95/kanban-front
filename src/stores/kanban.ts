import type { BoardModel } from "@/models/board.model";
import { setLocalStorage } from "@/utils/local-storage.util";
import { getLocalStorage } from "@/utils/local-storage.util";
import { ref } from "vue";
import { defineStore } from "pinia";
import type { TaskModel } from "@/models/task.model";

export const useKanbanStore = defineStore("kanban", () => {
  const currentBoard = ref<BoardModel | null>(null);
  const boards = ref<BoardModel[]>([]);

  function pushNewTask(
    task: Partial<TaskModel>,
    columnId: string,
    boardId: string
  ) {
    task.id = self.crypto.randomUUID();
    setBoards();
  }

  function removeTask(task: TaskModel, columnId: string, boardId: string) {
    setBoards();
  }

  function pushNewBoard(board: Partial<BoardModel>) {
    board.id = self.crypto.randomUUID();
    boards.value?.push(board as BoardModel);
    setBoards();
  }

  function removeBoard(board: BoardModel) {
    boards.value?.filter((b) => b.id !== board.id);
    setBoards();
  }

  function getBoardsFromLocalStorage() {
    const boardsFromLocalStorage = getLocalStorage("boards");
    boardsFromLocalStorage
      ? (boards.value = boardsFromLocalStorage)
      : initBoards();
  }

  function initBoards() {
    const initialBoards: BoardModel[] = [
      {
        id: self.crypto.randomUUID(),
        title: "Default Board",
        columns: [
          {
            id: self.crypto.randomUUID(),
            title: "To Do",
            order: 0,
            color: "bg-red-100",
          },
          {
            id: self.crypto.randomUUID(),
            title: "In Progress",
            order: 1,
            color: "bg-yellow-100",
          },
          {
            id: self.crypto.randomUUID(),
            title: "Done",
            order: 2,
            color: "bg-green-100",
          },
        ],
      },
    ];

    boards.value = initialBoards;
    setLocalStorage("boards", boards.value);
  }

  function setBoards() {
    setLocalStorage("boards", boards.value);
  }

  function setCurrentBoard(board: BoardModel) {
    currentBoard.value = board;
    setLocalStorage("currentBoard", currentBoard.value);
  }

  return {
    currentBoard,
    boards,
    pushNewTask,
    removeTask,
    pushNewBoard,
    removeBoard,
    setCurrentBoard,
    setBoards,
    getBoardsFromLocalStorage,
  };
});
