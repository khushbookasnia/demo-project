import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  Calendar,
  Folder,
  Users,
  MessageSquare,
  Headphones,
  Settings,
  LogOut,
  Plus,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const mainNavItems = [
  { icon: Calendar, label: "Calendar" },
  { icon: Folder, label: "Files" },
  { icon: Users, label: "Team" },
  { icon: MessageSquare, label: "Messages" },
];

const bottomNavItems = [
  { icon: Headphones, label: "Support" },
  { icon: Settings, label: "Settings" },
  { icon: LogOut, label: "Logout" },
];

const teamMembers = [
  {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
  },
  {
    name: "Jane Smith",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
  },
  {
    name: "Mike Johnson",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
  },
];

interface SidebarProps {
  className?: string;
}

export function Sidebar({ className }: SidebarProps) {
  return (
    <TooltipProvider>
      <div
        className={cn(
          "flex flex-col justify-between h-screen w-16 border-r bg-background p-3 overflow-y-auto",
          className
        )}
      >
        <div className="space-y-4">
          {/* Logo or Header */}
          <div className="flex h-12 items-center justify-center">
            <Button variant="ghost" size="icon" className="h-12 w-12">
              <LayoutGrid className="h-6 w-6" />
            </Button>
          </div>

          <Separator className="my-3" />

          {/* Main Navigation */}
          <nav className="space-y-3">
            {mainNavItems.map((item, index) => (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-12 w-12">
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.label}</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="ml-2">
                  {item.label}
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>

          <Separator className="my-3" />

          {/* Team Members */}
          <div className="space-y-3">
            {teamMembers.map((member, index) => (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-12 w-12 relative"
                  >
                    <Avatar className="h-9 w-9">
                      <AvatarImage src={member.image} alt={member.name} />
                      <AvatarFallback>{member.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="absolute bottom-2 right-2 h-2 w-2 rounded-full bg-green-500" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right" className="ml-2">
                  {member.name}
                </TooltipContent>
              </Tooltip>
            ))}

            <Tooltip delayDuration={0}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-12 w-12">
                  <Plus className="h-5 w-5" />
                  <span className="sr-only">Add team member</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="ml-2">
                Add team member
              </TooltipContent>
            </Tooltip>
          </div>
        </div>

        <Separator className="my-3" />
        <nav className="space-y-3">
          {bottomNavItems.map((item, index) => (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" className="h-12 w-12">
                  <item.icon className="h-5 w-5" />
                  <span className="sr-only">{item.label}</span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right" className="ml-2">
                {item.label}
              </TooltipContent>
            </Tooltip>
          ))}
        </nav>
      </div>
    </TooltipProvider>
  );
}
