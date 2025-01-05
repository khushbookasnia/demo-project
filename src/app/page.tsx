"use client";

import { Header } from "@/components/layout/header";
import { TaskTable } from "@/components/tasks/task-table";
import { TaskListHeader } from "@/components/tasks/task-list-header";
import { MOCK_TASKS } from "@/components/tasks/helper";

// Define the Task interface

// Ensure MOCK_TASKS aligns with Task[]

// Main component
export default function Home() {
  return (
    <div className="m-4 bg-background">
      <Header />
      <main className="container mx-auto py-4">
        <TaskListHeader />
        <TaskTable tasks={MOCK_TASKS} />
      </main>
    </div>
  );
}
