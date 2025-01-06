import { Task } from "@/types/task";

export const MOCK_TASKS: Task[] = [
  {
    id: 1,
    type: "task",
    key: "MFD-2530",
    name: "Rahul Khann SIP",
    summary: "Complete SIP task for Rahul Khann",
    status: "done",
    labels: ["stp"],
    assignees: [
      {
        id: 1,
        name: "John Doe",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: 2,
        name: "Jane Smith",
        avatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    dueDate: null,
    priority: "low",
    created: "",
    updated: "Sep 20, 2024",
  },
  {
    id: 2,
    type: "feature",
    key: "MFD-2531",
    name: "Reinvestment Post Redemption",
    summary: "Design reinvestment process post-redemption for Rahul Khann",
    status: "to-do",
    labels: ["fresh-investment"],
    assignees: [
      {
        id: 1,
        name: "John Doe",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
    ],
    dueDate: "Sep 27, 2024",
    priority: "low",
    created: "Sep 27, 2024",
    updated: "Sep 27, 2024",
  },
  {
    id: 3,
    type: "bug",
    key: "MFD-2532",
    name: "Login page crashing",
    summary: "Fix login page crash when invalid credentials are entered",
    status: "in-progress",
    labels: ["frontend", "urgent"],
    assignees: [
      {
        id: 3,
        name: "Sam Green",
        avatar:
          "https://images.unsplash.com/photo-1517917632382-b7cf073e18c1?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MjF8fGZyYW5rZW5yaXxlbnwwfHx8fDE2NTI3NzI5Mjk&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: "Sep 30, 2024",
    priority: "high",
    created: "Sep 25, 2024",
    updated: "Sep 27, 2024",
  },
  {
    id: 4,
    type: "improvement",
    key: "MFD-2533",
    name: "Improve mobile responsiveness",
    summary: "Enhance the responsiveness of the mobile dashboard view",
    status: "backlog",
    labels: ["ui", "frontend"],
    assignees: [
      {
        id: 4,
        name: "Alice Miller",
        avatar:
          "https://images.unsplash.com/photo-1506904565766-5c04e5a2fd3d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8NXx8aW5mbyUyQ3Bvc3R8ZW58fHx8fDE2NTI3NzM4Mjg&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: "Oct 5, 2024",
    priority: "medium",
    created: "Sep 30, 2024",
    updated: "Sep 30, 2024",
  },
  {
    id: 5,
    type: "task",
    key: "MFD-2534",
    name: "Create user onboarding",
    summary: "Design the onboarding process for new app users",
    status: "to-do",
    labels: ["ux", "ui"],
    assignees: [
      {
        id: 5,
        name: "Michael Johnson",
        avatar:
          "https://images.unsplash.com/photo-1488413448711-c6033777ca2d?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8OHx8dXNlciUyQ3Bvc3R8ZW58fHx8fDE2NTI3NzM4Mjg&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: "Oct 12, 2024",
    priority: "high",
    created: "Oct 1, 2024",
    updated: "Oct 1, 2024",
  },
  {
    id: 6,
    type: "task",
    key: "MFD-2535",
    name: "Fix broken image",
    summary: "Repair broken links to images in the app documentation",
    status: "done",
    labels: ["documentation"],
    assignees: [
      {
        id: 6,
        name: "Emily Brown",
        avatar:
          "https://images.unsplash.com/photo-1530841798236-c768616d37d5?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8ZG9jdW1lbnRhdGlvbnxlbnwwfHx8fDE2NTI3NzM4Mjg&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: "Oct 1, 2024",
    priority: "low",
    created: "Sep 20, 2024",
    updated: "Sep 25, 2024",
  },
  {
    id: 7,
    type: "bug",
    key: "MFD-2536",
    name: "Fix UI issue",
    summary: "Resolve UI glitch in the sidebar menu on mobile",
    status: "in-progress",
    labels: ["ui", "mobile"],
    assignees: [
      {
        id: 7,
        name: "David Lee",
        avatar:
          "https://images.unsplash.com/photo-1501594907354-829f0f8f77d5?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8M3x8YmlndWlzc3xlbnwwfHx8fDE2NTI3NzI5Mjk&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: "Oct 3, 2024",
    priority: "high",
    created: "Sep 26, 2024",
    updated: "Sep 27, 2024",
  },
  {
    id: 8,
    type: "feature",
    key: "MFD-2537",
    name: "Implement new dashboard",
    summary: "Introduce new layout and features for the dashboard",
    status: "to-do",
    labels: ["frontend", "ui"],
    assignees: [
      {
        id: 8,
        name: "Sarah Moore",
        avatar:
          "https://images.unsplash.com/photo-1563350421-e2b89b2904f0?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8M3x8ZmVhdHVyZXxlbnwwfHx8fDE2NTI3NzI5Mjk&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: "Oct 7, 2024",
    priority: "medium",
    created: "Oct 3, 2024",
    updated: "Oct 3, 2024",
  },
  {
    id: 9,
    type: "improvement",
    key: "MFD-2538",
    name: "Improve loading speed",
    summary: "Optimize homepage performance and load times",
    status: "backlog",
    labels: ["performance", "frontend"],
    assignees: [
      {
        id: 9,
        name: "Daniel Clark",
        avatar:
          "https://images.unsplash.com/photo-1556742087-4e3f8b5ba301?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MTl8fGZlYXR1cmV8ZW58fHx8fDE2NTI3NzI5Mjk&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: "Oct 10, 2024",
    priority: "low",
    created: "Oct 5, 2024",
    updated: "Oct 5, 2024",
  },
];
