// const employees = [
//   {
//     "id": 1,
//     "firstName": "Aman",
//     "email": "e@e.com",
//     "password": "123",

//     "taskCounts": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 2,
//       "failed": 1
//     },

//     "tasks": [
//       {
//         "taskNumber": 1,
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Design Login Page",
//         "taskDescription": "Create a responsive login page for the employee management application.",
//         "taskDate": "2026-09-17",
//         "category": "Development"
//       },
//       {
//         "taskNumber": 2,
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Fix Navbar Bug",
//         "taskDescription": "Fix the navigation bar issue on smaller screen sizes.",
//         "taskDate": "2026-09-18",
//         "category": "Bug Fixing"
//       },
//       {
//         "taskNumber": 3,
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Create Dashboard Layout",
//         "taskDescription": "Build the basic dashboard layout with sidebar and main content sections.",
//         "taskDate": "2026-09-15",
//         "category": "Development"
//       },
//       {
//         "taskNumber": 4,
//         "active": false,
//         "newTask": false,
//         "completed": false,
//         "failed": true,
//         "taskTitle": "Update User Profile",
//         "taskDescription": "Add functionality for users to update their profile information.",
//         "taskDate": "2026-09-14",
//         "category": "Feature"
//       },
//       {
//         "taskNumber": 5,
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Setup Project Structure",
//         "taskDescription": "Organize the project into components, context, data, and utility folders.",
//         "taskDate": "2026-09-12",
//         "category": "Setup"
//       }
//     ]
//   },

//   {
//     "id": 2,
//     "firstName": "Rahul",
//     "email": "e2@e.com",
//     "password": "123",

//     "taskCounts": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 2,
//       "failed": 1
//     },

//     "tasks": [
//       {
//         "taskNumber": 1,
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Build Employee Card",
//         "taskDescription": "Create a reusable employee card component to display employee information.",
//         "taskDate": "2026-09-17",
//         "category": "Development"
//       },
//       {
//         "taskNumber": 2,
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Implement Search",
//         "taskDescription": "Add search functionality to find employees by name or email.",
//         "taskDate": "2026-09-19",
//         "category": "Feature"
//       },
//       {
//         "taskNumber": 3,
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Create Employee List",
//         "taskDescription": "Display all employees in a responsive list on the dashboard.",
//         "taskDate": "2026-09-13",
//         "category": "Development"
//       },
//       {
//         "taskNumber": 4,
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Add Form Validation",
//         "taskDescription": "Add validation for email and password fields in the login form.",
//         "taskDate": "2026-09-11",
//         "category": "Validation"
//       },
//       {
//         "taskNumber": 5,
//         "active": false,
//         "newTask": false,
//         "completed": false,
//         "failed": true,
//         "taskTitle": "Optimize Dashboard",
//         "taskDescription": "Improve dashboard performance and reduce unnecessary component rendering.",
//         "taskDate": "2026-09-10",
//         "category": "Optimization"
//       }
//     ]
//   },

//   {
//     "id": 3,
//     "firstName": "Priya",
//     "email": "employee3@example.com",
//     "password": "123",

//     "taskCounts": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 2,
//       "failed": 1
//     },

//     "tasks": [
//       {
//         "taskNumber": 1,
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Create Task Component",
//         "taskDescription": "Build a reusable task component to display task details and status.",
//         "taskDate": "2026-09-17",
//         "category": "Development"
//       },
//       {
//         "taskNumber": 2,
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Add Task Filters",
//         "taskDescription": "Allow users to filter tasks based on active, completed, and failed status.",
//         "taskDate": "2026-09-20",
//         "category": "Feature"
//       },
//       {
//         "taskNumber": 3,
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Design Task Cards",
//         "taskDescription": "Create a clean and responsive UI for displaying individual tasks.",
//         "taskDate": "2026-09-14",
//         "category": "UI Design"
//       },
//       {
//         "taskNumber": 4,
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Setup Context API",
//         "taskDescription": "Create the authentication context and provide it to the application.",
//         "taskDate": "2026-09-12",
//         "category": "React"
//       },
//       {
//         "taskNumber": 5,
//         "active": false,
//         "newTask": false,
//         "completed": false,
//         "failed": true,
//         "taskTitle": "Fix Task Counter",
//         "taskDescription": "Resolve the issue where task counters were showing incorrect values.",
//         "taskDate": "2026-09-09",
//         "category": "Bug Fixing"
//       }
//     ]
//   },

//   {
//     "id": 4,
//     "firstName": "Neha",
//     "email": "employee4@example.com",
//     "password": "123",

//     "taskCounts": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 2,
//       "failed": 1
//     },

//     "tasks": [
//       {
//         "taskNumber": 1,
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Create Admin Panel",
//         "taskDescription": "Build the initial admin dashboard for managing employees and tasks.",
//         "taskDate": "2026-09-17",
//         "category": "Development"
//       },
//       {
//         "taskNumber": 2,
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Add Employee Management",
//         "taskDescription": "Allow administrators to view and manage employee information.",
//         "taskDate": "2026-09-21",
//         "category": "Feature"
//       },
//       {
//         "taskNumber": 3,
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Create Admin Login",
//         "taskDescription": "Implement login functionality for the administrator account.",
//         "taskDate": "2026-09-13",
//         "category": "Authentication"
//       },
//       {
//         "taskNumber": 4,
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Create Sidebar",
//         "taskDescription": "Build a responsive sidebar for navigating the admin dashboard.",
//         "taskDate": "2026-09-11",
//         "category": "UI Design"
//       },
//       {
//         "taskNumber": 5,
//         "active": false,
//         "newTask": false,
//         "completed": false,
//         "failed": true,
//         "taskTitle": "Add Employee Delete",
//         "taskDescription": "Implement the functionality to remove an employee from the system.",
//         "taskDate": "2026-09-08",
//         "category": "Feature"
//       }
//     ]
//   },

//   {
//     "id": 5,
//     "firstName": "Rohit",
//     "email": "employee5@example.com",
//     "password": "123",

//     "taskCounts": {
//       "active": 2,
//       "newTask": 1,
//       "completed": 2,
//       "failed": 1
//     },

//     "tasks": [
//       {
//         "taskNumber": 1,
//         "active": true,
//         "newTask": true,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Create Reports Page",
//         "taskDescription": "Build a reports page showing employee task statistics.",
//         "taskDate": "2026-09-17",
//         "category": "Development"
//       },
//       {
//         "taskNumber": 2,
//         "active": true,
//         "newTask": false,
//         "completed": false,
//         "failed": false,
//         "taskTitle": "Add Task Statistics",
//         "taskDescription": "Display total, active, completed, and failed task counts.",
//         "taskDate": "2026-09-19",
//         "category": "Analytics"
//       },
//       {
//         "taskNumber": 3,
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Build Progress Bar",
//         "taskDescription": "Create a progress bar showing the completion percentage of tasks.",
//         "taskDate": "2026-09-14",
//         "category": "UI Design"
//       },
//       {
//         "taskNumber": 4,
//         "active": false,
//         "newTask": false,
//         "completed": true,
//         "failed": false,
//         "taskTitle": "Test Login System",
//         "taskDescription": "Test employee and admin login functionality with different credentials.",
//         "taskDate": "2026-09-12",
//         "category": "Testing"
//       },
//       {
//         "taskNumber": 5,
//         "active": false,
//         "newTask": false,
//         "completed": false,
//         "failed": true,
//         "taskTitle": "Fix Report Data",
//         "taskDescription": "Fix incorrect task statistics displayed on the reports page.",
//         "taskDate": "2026-09-10",
//         "category": "Bug Fixing"
//       }
//     ]
//   }
// ];

// const admin = [
//   {
//     "id": 1,
//     "firstName": "Admin",
//     "email": "admin@example.com",
//     "password": "123"
//   }
// ];

// export const setLocalStorage = () => {
//   localStorage.setItem("employees", JSON.stringify(employees));
//   localStorage.setItem("admin", JSON.stringify(admin));
// };

// export const getLocalStorage = () => {
//   const employees = JSON.parse(localStorage.getItem("employees"));
//   const admin = JSON.parse(localStorage.getItem("admin"));

//   return {
//     employees,
//     admin
//   };
// };



const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "amit@example.com",
    password: "123",

    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 2,
      failed: 1
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create Login Page",
        taskDescription: "Create responsive login page",
        taskDate: "2026-10-10",
        category: "Development"
      },
      {
        taskNumber: 2,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Fix Navbar",
        taskDescription: "Fix navbar responsiveness",
        taskDate: "2026-10-11",
        category: "Development"
      },
      {
        taskNumber: 3,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Dashboard",
        taskDescription: "Create employee dashboard",
        taskDate: "2026-10-12",
        category: "UI"
      }
    ]
  },

  {
    id: 2,
    firstName: "Rahul",
    email: "rahul@example.com",
    password: "123",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "API Integration",
        taskDescription: "Integrate backend APIs",
        taskDate: "2026-10-10",
        category: "Backend"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "MongoDB Setup",
        taskDescription: "Setup MongoDB database",
        taskDate: "2026-10-12",
        category: "Database"
      }
    ]
  },

  {
    id: 3,
    firstName: "Priya",
    email: "priya@example.com",
    password: "123",

    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 0
    },

    tasks: [
      {
        taskNumber: 1,
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "React Components",
        taskDescription: "Create reusable components",
        taskDate: "2026-10-10",
        category: "React"
      },
      {
        taskNumber: 2,
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI Design",
        taskDescription: "Create UI design",
        taskDate: "2026-10-13",
        category: "Design"
      }
    ]
  }
]

const admin = [
  {
    id: 1,
    email: "admin@me.com",
    password: "123"
  }
]


// Initial data localStorage mein save karna
export const setLocalStorage = () => {

  if (!localStorage.getItem("employees")) {
    localStorage.setItem(
      "employees",
      JSON.stringify(employees)
    )
  }

  if (!localStorage.getItem("admin")) {
    localStorage.setItem(
      "admin",
      JSON.stringify(admin)
    )
  }
}


// localStorage se data lena
export const getLocalStorage = () => {

  const employees =
    JSON.parse(localStorage.getItem("employees")) || []

  const admin =
    JSON.parse(localStorage.getItem("admin")) || []

  return {
    employees,
    admin
  }
}


// Updated employees ko localStorage mein save karna
export const updateLocalStorage = (employees) => {

  localStorage.setItem(
    "employees",
    JSON.stringify(employees)
  )
}