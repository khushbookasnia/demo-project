import { MOCK_TASKS } from "./helper";
import KanbanBoard from "./task-list-kanban";
import { TaskTable } from "./task-table";

interface TaskListContentProps {
  view: "list" | "grid";
}

export function TaskListContent({ view }: TaskListContentProps) {
  return (
    <div className="mt-4">
      {view === "list" ? (
        <div>
          <TaskTable tasks={MOCK_TASKS} />
        </div>
      ) : (
        <div>
          <KanbanBoard />
        </div>
      )}
    </div>
  );
}
