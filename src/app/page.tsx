"use client";

import { Header } from "@/components/layout/header";
import { TaskListHeader } from "@/components/tasks/task-list-header";
import { useState } from "react";
import { TaskListContent } from "@/components/tasks/task-list-content";
import { TaskCreateModal } from "@/components/tasks/task-create-modal";

export default function Home() {
  const [view, setView] = useState<"list" | "grid">("list");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewChange = (newView: "list" | "grid") => {
    setView(newView);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="m-4 bg-background">
      <Header />
      <main className="container mx-auto py-4">
        <TaskListHeader
          view={view}
          onViewChange={handleViewChange}
          onCreateClick={toggleModal}
        />
        <TaskListContent view={view} />
      </main>
      {isModalOpen && <TaskCreateModal onClose={toggleModal} />}
    </div>
  );
}
