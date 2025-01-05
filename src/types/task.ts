export type TaskStatus = "done" | "to-do" | "backlog" | "in-progress";
export type TaskPriority = "low" | "medium" | "high";

export interface Task {
  id: string;
  type: "task" | "bug" | "feature" | "improvement";
  key: string;
  summary: string;
  status: TaskStatus;
  labels: string[];
  name: string;
  assignees: {
    id: string;
    name: string;
    avatar: string;
  }[];
  dueDate: string | null;
  priority: TaskPriority;
  created: string; // Change this line to just `string`
  updated: string;
}
