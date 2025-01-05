// Import necessary dependencies
"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { MOCK_TASKS } from "./helper";
import { Badge } from "../ui/badge";
import { MoreHorizontalIcon, PlusCircle } from "lucide-react";

export default function KanbanBoard() {
  const statuses: string[] = ["to-do", "in-progress", "done", "backlog"];

  const getTasksByStatus = (status: string) =>
    MOCK_TASKS.filter((task) => task.status === status);

  return (
    <div className="grid grid-cols-4 gap-5 p-4 bg-background rounded-md border">
      {statuses.map((status) => (
        <div key={status} className="space-y-3">
          <div className="flex justify-between">
            <div className=" rounded-full px-2 py-1 w-fit text-xs text-neutral-500 font-md text-foreground bg-[#F2F2F2] dark:bg-zinc-800 capitalize">
              {status}
            </div>
            <div className="flex space-x-2">
              <PlusCircle className="w-4 h-4" />
              <MoreHorizontalIcon className="w-4 h-4" />
            </div>
          </div>
          {getTasksByStatus(status).map((task) => (
            <Card
              key={task.id}
              className=" p-3 rounded-md shadow-none dark:bg-zinc-800"
            >
              <CardContent className="p-0">
                <div className="flex justify-between ">
                  <h5 className="text-[13px] font-[600] text-foreground  line-height-[12px]">
                    {task.name}
                  </h5>
                </div>
                <div className="flex justify-between items-center ">
                  <span className="text-[12px] text-foreground line-height-[12px]">
                    {task.summary}
                  </span>
                </div>
                {task.dueDate && (
                  <Badge
                    className={`mt-2 text-xs font-[400] ${
                      task.priority === "high"
                        ? "text-[#FF6161] bg-red-50 dark:bg-opacity-30 hover:text-[#FF6161] hover:bg-red-100 dark:hover:bg-opacity-40"
                        : "text-yellow-600 bg-yellow-50 dark:bg-opacity-30 hover:text-[#yellow-600] hover:bg-yellow-50 dark:hover:bg-opacity-40"
                    }`}
                  >
                    Due:{" "}
                    {new Date(task.dueDate).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                    })}
                  </Badge>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}
