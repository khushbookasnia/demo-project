"use client";

import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
  return (
    <header className="border-b h-14 px-4 flex items-center justify-between bg-background">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-semibold">Mutual Funds Daily tasks</h1>
      </div>
      <div className="flex items-center space-x-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
