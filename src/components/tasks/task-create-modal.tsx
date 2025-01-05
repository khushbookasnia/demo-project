import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Eye, Fullscreen, X } from "lucide-react";

interface TaskCreateModalProps {
  onClose: () => void;
}

export function TaskCreateModal({ onClose }: TaskCreateModalProps) {
  const [taskName, setTaskName] = useState("");

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ taskName });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 m-5">
      <div className="overflow-y-auto max-h-[85vh] bg-white dark:bg-zinc-800 text-black dark:text-white p-6 rounded-lg w-full max-w-lg shadow-lg">
        {/* Header */}
        <div className="flex justify-between items-center ">
          <h2 className="text-lg font-semibold">Create Issue</h2>
          <div className="flex items-center space-x-2">
            {/* Eye Button for visibility */}
            <button
              onClick={() => {}}
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              <Eye className="h-5 w-5" />
            </button>
            <button
              onClick={() => {}}
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              <Fullscreen className="h-5 w-5" />
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
        <h6 className="text-xs text-gray-500 dark:text-gray-400">
          Required fields are marked with an asterisk{" "}
          <span className="text-red-500">*</span>
        </h6>
        <div className="mb-4 mt-4 border-b border-gray-300 dark:border-zinc-600"></div>

        <form onSubmit={handleFormSubmit} className="space-y-4">
          <div className="mb-2">
            <label className="block text-sm font-medium mb-2">
              Project <span className="text-red-500">*</span>
            </label>
            <Select>
              <SelectTrigger className="w-full border dark:border-zinc-600 dark:bg-zinc-700">
                Select Project
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="mfd">
                  Mutual Funds Daily Tasks (MFD)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Issue Type and Status */}
          <div className="grid grid-cols-2 gap-4 mb-2">
            <div>
              <label className="block text-sm font-medium mb-2">
                Issue Type <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="w-full border dark:border-zinc-600 dark:bg-zinc-700">
                  Select Type
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="task">Task</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="mb-2">
              <label className="block text-sm font-medium mb-2">
                Status <span className="text-red-500">*</span>
              </label>
              <Select>
                <SelectTrigger className="w-full border dark:border-zinc-600 dark:bg-zinc-700">
                  Select Status
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="todo">To Do</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="general">
            <TabsList className="mb-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="hubspot">HubSpot</TabsTrigger>
            </TabsList>
            <TabsContent value="general">
              {/* Template and Labels */}
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Template
                  </label>
                  <Select>
                    <SelectTrigger className="w-full border dark:border-zinc-600 dark:bg-zinc-700">
                      Select Template
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="mb-2">
                  <label className="block text-sm font-medium mb-2">
                    Labels
                  </label>
                  <Select>
                    <SelectTrigger className="w-full border dark:border-zinc-600 dark:bg-zinc-700">
                      Select Label
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="none">None</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Summary */}
              <div className="mb-2">
                <label className="block text-sm font-medium mb-2">
                  Summary <span className="text-red-500">*</span>
                </label>
                <Input
                  value={taskName}
                  onChange={(e) => setTaskName(e.target.value)}
                  placeholder="Enter summary"
                  required
                  className="border dark:border-zinc-600 dark:bg-zinc-700"
                />
              </div>

              {/* Attachments */}
              <div className="mb-2">
                <label className="block text-sm font-medium mb-2">
                  Attachment
                </label>
                <div className="p-3 bg-gray-50 dark:bg-zinc-700 border border-dashed border-gray-300 dark:border-zinc-600 rounded text-center text-sm text-gray-500 dark:text-gray-400">
                  Click here to upload or drop files here
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 gap-4 mb-2">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Start Date
                  </label>
                  <Input
                    type="date"
                    className="border dark:border-zinc-600 dark:bg-zinc-700"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Due Date
                  </label>
                  <Input
                    type="date"
                    className="border dark:border-zinc-600 dark:bg-zinc-700"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* Create Another Issue */}
          <div className="flex items-center">
            <Checkbox id="create-another" />
            <label htmlFor="create-another" className="ml-2 text-sm">
              Create another issue
            </label>
          </div>

          {/* Buttons */}
          <div className="flex justify-end space-x-2">
            <Button
              variant="outline"
              onClick={onClose}
              className="text-sm rounded-full"
            >
              Cancel
            </Button>
            <Button type="submit" className="text-sm rounded-full">
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
