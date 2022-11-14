import { useNotificationsStore } from "./notifications";
import type { BoardModel } from "@/models/board.model";
import { setLocalStorage } from "@/utils/local-storage.util";
import { getLocalStorage } from "@/utils/local-storage.util";
import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { TaskModel } from "@/models/task.model";

export const useKanbanStore = defineStore("kanban", () => {
  const notifications = useNotificationsStore();
  const currentBoardId = ref<string | null>(null);
  const boards = ref<BoardModel[]>([]);
  const currentBoardTitle = computed(() => {
    const board = boards.value.find(
      (board) => board.id === currentBoardId.value
    );
    return board?.title;
  });
  const currentBoardIndex = computed(() => {
    return boards.value.findIndex((board) => board.id === currentBoardId.value);
  });

  function pushNewTask(task: Partial<TaskModel>, columnId: string) {
    task.id = self.crypto.randomUUID();
    const boardIndex = boards.value.findIndex(
      (board) => board.id === currentBoardId.value
    );
    console.log(boardIndex);
    const columnIndex = boards.value[boardIndex].columns.findIndex(
      (column) => column.id === columnId
    );
    console.log(columnIndex);
    boards.value[boardIndex].columns[columnIndex].tasks?.push(
      task as TaskModel
    );
    notifications.pushNewToast("New task added");
    setBoards();
  }

  function removeTask(taskId: string, columnId: string) {
    const boardIndex = boards.value.findIndex(
      (board) => board.id === currentBoardId.value
    );
    const columnIndex = boards.value[boardIndex].columns.findIndex(
      (column) => column.id === columnId
    );
    boards.value[boardIndex].columns[columnIndex].tasks = boards.value[
      boardIndex
    ].columns[columnIndex].tasks?.filter((task) => task.id !== taskId);
    setBoards();
  }

  function pushNewBoard() {
    const newBoard = generateNewBoard("New board");
    boards.value?.push(newBoard as BoardModel);
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

  function generateNewBoard(title: string) {
    const board: BoardModel = {
      id: self.crypto.randomUUID(),
      title: title,
      columns: [
        {
          id: self.crypto.randomUUID(),
          title: "To Do",
          order: 0,
          color: "bg-red-100",
          tasks: [],
        },
        {
          id: self.crypto.randomUUID(),
          title: "In Progress",
          order: 1,
          color: "bg-yellow-100",
          tasks: [],
        },
        {
          id: self.crypto.randomUUID(),
          title: "Done",
          order: 2,
          color: "bg-green-100",
          tasks: [],
        },
      ],
    };
    return board;
  }

  function initBoards() {
    const initialBoard: BoardModel = generateNewBoard("Default Board");
    boards.value.push(initialBoard);
    setCurrentBoard(initialBoard.id);
    setLocalStorage("boards", boards.value);
  }

  function setBoards() {
    setLocalStorage("boards", boards.value);
  }

  function setCurrentBoard(boardId: string) {
    currentBoardId.value = boardId;
    setLocalStorage("currentBoardId", currentBoardId.value);
  }

  function getCurrentBoardIdFromLocalStorage() {
    const currentBoardIdFromLocalStorage = getLocalStorage("currentBoardId");
    currentBoardIdFromLocalStorage
      ? (currentBoardId.value = currentBoardIdFromLocalStorage)
      : setCurrentBoard(boards.value[0].id);
  }

  return {
    currentBoardId,
    boards,
    currentBoardTitle,
    currentBoardIndex,
    pushNewTask,
    removeTask,
    pushNewBoard,
    removeBoard,
    setCurrentBoard,
    setBoards,
    getBoardsFromLocalStorage,
    getCurrentBoardIdFromLocalStorage,
  };
});
