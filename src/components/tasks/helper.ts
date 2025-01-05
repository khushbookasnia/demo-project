import { Task } from "@/types/task";

export const MOCK_TASKS: Task[] = [
  {
    id: "1",
    type: "task",
    key: "MFD-2530",
    summary: "Rahul Khann SIP",
    status: "done",
    labels: ["stp"],
    assignees: [
      {
        id: "1",
        name: "John Doe",
        avatar:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      },
      {
        id: "2",
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
    id: "2",
    type: "feature",
    key: "MFD-2531",
    summary: "Rahul Khann Reinvestment Post Redemption",
    status: "to-do",
    labels: ["fresh-investment"],
    assignees: [
      {
        id: "1",
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
    id: "3",
    type: "bug",
    key: "MFD-2532",
    summary: "Login page crashing on invalid credentials",
    status: "in-progress",
    labels: ["frontend", "urgent"],
    assignees: [
      {
        id: "3",
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
    id: "4",
    type: "improvement",
    key: "MFD-2533",
    summary: "Improve mobile responsiveness for dashboard",
    status: "backlog",
    labels: ["ui", "frontend"],
    assignees: [
      {
        id: "4",
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
    id: "5",
    type: "task",
    key: "MFD-2534",
    summary: "Create user onboarding flow for new users",
    status: "to-do",
    labels: ["ux", "ui"],
    assignees: [
      {
        id: "5",
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
    id: "6",
    type: "bug",
    key: "MFD-2535",
    summary: "Fix payment gateway integration",
    status: "in-progress",
    labels: ["backend", "critical"],
    assignees: [
      {
        id: "6",
        name: "Emma Watson",
        avatar:
          "https://images.unsplash.com/photo-1492541124205-3cf98e6487e4?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MjZ8fGZyYW5rZW5yaXxlbnwwfHx8fDE2NTI3NzI5Mjk&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: "Oct 15, 2024",
    priority: "high",
    created: "Oct 5, 2024",
    updated: "Oct 8, 2024",
  },
  {
    id: "7",
    type: "task",
    key: "MFD-2536",
    summary: "Design new logo for the website",
    status: "done",
    labels: ["design", "branding"],
    assignees: [
      {
        id: "7",
        name: "Olivia Brown",
        avatar:
          "https://images.unsplash.com/photo-1488412672325-bcf7f5f42b92?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Nnx8bG9nbyUyQ3Bvc3R8ZW58fHx8fDE2NTI3NzM4Mjg&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: null,
    priority: "medium",
    created: "Sep 10, 2024",
    updated: "Sep 12, 2024",
  },
  {
    id: "8",
    type: "feature",
    key: "MFD-2537",
    summary: "Add dark mode toggle to the app",
    status: "to-do",
    labels: ["ux", "frontend"],
    assignees: [
      {
        id: "8",
        name: "Luke Perry",
        avatar:
          "https://images.unsplash.com/photo-1494941550968-fc2b17a3e0ba?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8Mnx8ZG9uJTIwbW9kZSUyQ3Bvc3R8ZW58fHx8fDE2NTI3NzM4Mjg&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: "Oct 20, 2024",
    priority: "low",
    created: "Oct 1, 2024",
    updated: "Oct 5, 2024",
  },
  {
    id: "9",
    type: "bug",
    key: "MFD-2538",
    summary: "Fix broken link in footer",
    status: "done",
    labels: ["ui", "frontend"],
    assignees: [
      {
        id: "9",
        name: "Sophia Taylor",
        avatar:
          "https://images.unsplash.com/photo-1499081073845-6b42d66d8f4e?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8MjZ8fGZyYW5rZW5yaXxlbnwwfHx8fDE2NTI3NzI5Mjk&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: null,
    priority: "low",
    created: "Oct 10, 2024",
    updated: "Oct 12, 2024",
  },
  {
    id: "10",
    type: "improvement",
    key: "MFD-2539",
    summary: "Update the app logo to reflect new branding",
    status: "backlog",
    labels: ["branding", "ui"],
    assignees: [
      {
        id: "10",
        name: "David Beckham",
        avatar:
          "https://images.unsplash.com/photo-1532002111-30f84917d6c7?crop=entropy&cs=tinysrgb&fit=max&ixid=MnwzNjUyOXwwfDF8c2VhY2h8M3x8bG9nbyUyQ3Bvc3R8ZW58fHx8fDE2NTI3NzM4Mjg&ixlib=rb-1.2.1&q=80&w=256",
      },
    ],
    dueDate: "Nov 1, 2024",
    priority: "medium",
    created: "Oct 15, 2024",
    updated: "Oct 18, 2024",
  },
];
