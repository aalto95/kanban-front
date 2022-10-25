import type { TaskModel } from "./task.model";

export interface ColumnModel {
  id: string;
  title: string;
  order: number;
  color: string;
  tasks?: TaskModel[];
}
