"use client";

import { Button } from "@/components/ui/button";
import { Filter, Plus, Search, List, SortAsc } from "lucide-react";
import { Input } from "../ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TaskListHeader() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-between py-3 space-y-3 sm:space-y-0 sm:space-x-3">
      <div className="flex items-center space-x-2 sm:space-x-3">
        <h2 className="text-sm font-medium">Task List</h2>
        <div className="flex -space-x-1">
          <Avatar className="h-5 w-5 ">
            <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Avatar className="h-5 w-5">
            <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="flex items-center space-x-2 sm:space-x-3 w-full sm:w-auto justify-between sm:justify-start ml-auto">
        <div className="relative w-full sm:w-auto">
          <Input
            className="h-8 rounded-full pl-8   pr-3 w-[150px] text-xs"
            placeholder="Search"
          />
          <Search className="absolute  h-4 w-4  left-2 top-1/2 transform -translate-y-1/2" />
        </div>

        <Button
          variant="outline"
          className="h-8  rounded-full w-auto flex items-center justify-center text-xs px-2"
        >
          <Filter className="mr-1 h-3 w-3  " />
          <span className="hidden sm:inline">Filter</span>
        </Button>

        <Button
          variant="outline"
          className="h-8 rounded-full   w-auto flex items-center justify-center text-xs px-2"
        >
          <SortAsc className="mr-1 h-3 w-3  " />
          <span className="hidden sm:inline">Sort</span>
        </Button>

        <Button
          variant="outline"
          className="h-8 rounded-full   w-auto flex items-center justify-center text-xs px-2"
        >
          <List className="mr-1 h-3 w-3  " />
          <span className="hidden sm:inline">List</span>
        </Button>

        <Button
          variant="outline"
          className="h-8 rounded-full w-auto   flex items-center justify-center text-xs px-2"
        >
          <Plus className="mr-1 h-3 w-3  " />
          <span className="hidden sm:inline">Create</span>
        </Button>
      </div>
    </div>
  );
}
