"use client";

import * as React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Task } from "@/types/task";
import { TaskTypeIcon } from "./task-type-icon";
import { Calendar, ChevronDownIcon } from "lucide-react";
export function TaskTable({ tasks }: { tasks: Task[] }) {
  return (
    <div className="rounded-md border border-l-0 border-r-0 bg-background">
      <Table className="border-collapse">
        <TableHeader>
          <TableRow className="hover:bg-transparent">
            <TableHead className="h-8 w-[60px] text-center  px-0 text-[12px] border-x ">
              <Checkbox className="w-4 h-4 mx-3" />
            </TableHead>
            <TableHead className="h-8 w-[40px] px-2 text-[12px] border-x "></TableHead>
            <TableHead className="h-8 w-[100px] text-[12px] border-x ">
              Key
            </TableHead>
            <TableHead className="h-8 w-[300px] text-[12px] border-x ">
              Summary
            </TableHead>
            <TableHead className="h-8 w-[100px] text-[12px] border-x ">
              Status
            </TableHead>
            <TableHead className="h-8 w-[120px] text-[12px] border-x ">
              Labels
            </TableHead>
            <TableHead className="h-8 w-[160px] text-[12px] border-x ">
              Assignee
            </TableHead>
            <TableHead className="h-8 w-[100px] text-[12px] border-x ">
              Due Date
            </TableHead>
            <TableHead className="h-8 w-[80px] text-[12px] border-x ">
              Priority
            </TableHead>
            <TableHead className="h-8 w-[100px] text-[12px] border-x ">
              Created
            </TableHead>
            <TableHead className="h-8 w-[100px] text-[12px] border-x ">
              Updated
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tasks.map((task) => (
            <TableRow key={task.id} className="h-8 hover:bg-muted/50">
              <TableCell className="px-0 w-[60px] text-center mx-2 text-[12px] border-x ">
                <Checkbox className="h-4 w-4 mx-3" />
              </TableCell>
              <TableCell className="px-2 text-[12px] border-x ">
                <TaskTypeIcon type={task.type} />
              </TableCell>
              <TableCell className=" whitespace-nowrap text-[12px] border-x ">
                {task.key}
              </TableCell>
              <TableCell className="truncate max-w-[300px] text-[12px] border-x ">
                {task.summary}
              </TableCell>
              <TableCell className="border-x  ">
                <Badge
                  className="h-5 px-2 rounded-full text-[10px] whitespace-nowrap"
                  variant="secondary"
                >
                  {task.status}
                  <ChevronDownIcon className="h-3 w-3 ml-1" />
                </Badge>
              </TableCell>
              <TableCell className="border-x ">
                <div className="flex gap-1 overflow-hidden">
                  {task.labels.map((label) => (
                    <Badge
                      key={label}
                      variant="secondary"
                      className="h-5 px-2 rounded-full text-[10px] whitespace-nowrap"
                    >
                      {label} <ChevronDownIcon className="h-3 w-3 ml-1" />
                    </Badge>
                  ))}
                </div>
              </TableCell>
              <TableCell className="border-x ">
                <div className="flex -space-x-2">
                  {task.assignees.slice(0, 3).map((assignee) => (
                    <Avatar key={assignee.id} className="h-6 w-6 ">
                      <AvatarImage src={assignee.avatar} />
                      <AvatarFallback>
                        {assignee.name.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  ))}
                  {task.assignees.length > 3 && (
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-xxs">
                      +{task.assignees.length - 3}
                    </div>
                  )}
                </div>
              </TableCell>
              <TableCell className="text-[10px] whitespace-nowrap border-x ">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  {task.dueDate || "---"}
                </div>
              </TableCell>
              <TableCell className="border-x ">
                <Badge
                  variant="secondary"
                  className={cn(
                    "h-5 rounded-full px-2 w-fit text-[10px] whitespace-nowrap flex items-center justify-center"
                  )}
                >
                  {task.priority}
                  <ChevronDownIcon className="h-3 w-3 ml-1" />
                </Badge>
              </TableCell>
              <TableCell className="text-[10px] whitespace-nowrap border-x ">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3 " />
                  {task.created || "---"}
                </div>
              </TableCell>
              <TableCell className="text-[10px] whitespace-nowrap border-x ">
                <div className="flex items-center">
                  <Calendar className="mr-1 h-3 w-3" />
                  {task.updated || "---"}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
