import React, { useState } from "react";
import TaskList from "./TaskList";
import "../styles/KanbanBoard.css";

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Design UI", description: "Create wireframes", assignedUser: "Alice", status: "todo" },
    { id: 2, title: "Develop API", description: "Build REST API", assignedUser: "Bob", status: "inprogress" },
    { id: 3, title: "Deploy App", description: "Deploy to Render", assignedUser: "Charlie", status: "done" },
  ]);

  const handleEdit = (task) => {
    alert(`Edit task: ${task.title}`);
  };

  const handleDelete = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="kanban-board">
      <div className="kanban-column">
        <h2>To Do</h2>
        <TaskList tasks={tasks.filter((task) => task.status === "todo")} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

      <div className="kanban-column">
        <h2>In Progress</h2>
        <TaskList tasks={tasks.filter((task) => task.status === "inprogress")} onEdit={handleEdit} onDelete={handleDelete} />
      </div>

      <div className="kanban-column">
        <h2>Done</h2>
        <TaskList tasks={tasks.filter((task) => task.status === "done")} onEdit={handleEdit} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default KanbanBoard;



