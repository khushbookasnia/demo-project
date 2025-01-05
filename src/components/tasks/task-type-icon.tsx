"use client";

import { FileText, Bug, Zap, Settings2 } from "lucide-react";
import { Task } from "@/types/task";

export function TaskTypeIcon({ type }: { type: Task["type"] }) {
  switch (type) {
    case "task":
      return <FileText className="h-4 w-4 text-gray-500" />;
    case "bug":
      return <Bug className="h-4 w-4 text-gray-500" />;
    case "feature":
      return <Zap className="h-4 w-4 text-gray-500" />;
    case "improvement":
      return <Settings2 className="h-4 w-4 text-gray-500" />;
  }
}
