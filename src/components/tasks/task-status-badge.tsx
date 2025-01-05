import { cn } from "@/lib/utils";
import { TaskStatus } from "@/types/task";

const statusConfig: Record<TaskStatus, { label: string; className: string }> = {
  done: {
    label: "Done",
    className: "bg-green-500/10 text-green-500",
  },
  "to-do": {
    label: "To Do",
    className: "bg-blue-500/10 text-blue-500",
  },
  backlog: {
    label: "Backlog",
    className: "bg-orange-500/10 text-orange-500",
  },
  "in-progress": {
    label: "In Progress",
    className: "bg-purple-500/10 text-purple-500",
  },
};

export function TaskStatusBadge({ status }: { status: TaskStatus }) {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "inline-flex h-5 w-[80px] items-center justify-center rounded-full px-2 text-xs font-medium whitespace-nowrap",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}