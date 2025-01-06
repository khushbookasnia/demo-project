"use client";

import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { MoreHorizontalIcon, PlusCircle } from "lucide-react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

import { MOCK_TASKS } from "./helper";
import { Task, TaskStatus } from "@/types/task";

const statuses: TaskStatus[] = ["to-do", "in-progress", "done", "backlog"];

export default function KanbanBoard() {
  const [tasks, setTasks] = useState<Task[]>(MOCK_TASKS);

  const getTasksByStatus = (status: string): Task[] =>
    tasks.filter((task) => task.status === status);

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(source.index, 1);
    movedTask.status = destination.droppableId as TaskStatus;
    updatedTasks.splice(destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="grid grid-cols-4 gap-5 p-4 bg-background rounded-md border">
        {statuses.map((status) => (
          <DroppableColumn
            key={status}
            status={status}
            tasks={getTasksByStatus(status)}
          />
        ))}
      </div>
    </DragDropContext>
  );
}

type DroppableColumnProps = {
  status: string;
  tasks: Task[];
};

function DroppableColumn({ status, tasks }: DroppableColumnProps) {
  return (
    <Droppable droppableId={status}>
      {(provided, snapshot) => (
        <div
          className="space-y-3"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          <ColumnHeader status={status} />
          {tasks.length > 0 ? (
            tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))
          ) : (
            <p className="text-sm text-gray-500">No tasks here</p>
          )}
          {snapshot.isDraggingOver && <div className="h-[300px] w-full"></div>}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

type ColumnHeaderProps = {
  status: string;
};

function ColumnHeader({ status }: ColumnHeaderProps) {
  return (
    <div className="flex justify-between">
      <div className="rounded-full px-2 py-1 w-fit text-xs text-neutral-500 font-md text-foreground bg-[#F2F2F2] dark:bg-zinc-800 capitalize">
        {status}
      </div>
      <div className="flex space-x-2">
        <PlusCircle className="w-4 h-4" />
        <MoreHorizontalIcon className="w-4 h-4" />
      </div>
    </div>
  );
}

type TaskCardProps = {
  task: Task;
  index: number;
};

function TaskCard({ task, index }: TaskCardProps) {
  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided, snapshot) => {
        const isDragging = snapshot.isDragging;

        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={{
              ...provided.draggableProps.style,
            }}
          >
            <div
              className={` p-3 rounded-md border shadow-none dark:bg-zinc-800
 transform transition-transform duration-200 ${
   isDragging ? "rotate-2 bg-gray-100 shadow-md" : ""
 }`}
              style={{
                transform: isDragging ? "rotate(-5deg)" : "rotate(0deg)",
              }}
            >
              <div className="flex justify-between">
                <h5 className="text-[13px] font-[600] text-foreground line-height-[12px]">
                  {task.name}
                </h5>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[12px] text-foreground line-height-[12px]">
                  {task.summary}
                </span>
              </div>
              {task.dueDate && (
                <Badge
                  className={`mt-2 text-xs font-[400] ${
                    task.priority === "high"
                      ? "text-[#FF6161] bg-red-50 dark:bg-opacity-30 hover:text-[#FF6161] hover:bg-red-100 dark:hover:bg-opacity-40"
                      : "text-yellow-600 bg-yellow-50 dark:bg-opacity-30 hover:text-yellow-600 hover:bg-yellow-100 dark:hover:bg-opacity-40"
                  }`}
                >
                  Due:{" "}
                  {new Date(task.dueDate).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                  })}
                </Badge>
              )}
            </div>
          </div>
        );
      }}
    </Draggable>
  );
}
