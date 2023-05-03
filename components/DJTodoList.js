import { useState } from "react";
import create from "zustand";
import { persist } from "zustand/middleware";
import { Wrapper, Uber, Orderli, Lila } from "../components/styles";
import LinkComponent from "../components/NavItem.js";

function TaskList({ tasks, onToggle, onDelete }) {
  return (
    <ol style={{ listStyleType: "none" }}>
      {tasks.map((task) => (
        <Lila key={task.id} style={{ display: "flex", alignItems: "center" }}>
          <input
            type="checkbox"
            checked={task.isChecked}
            onChange={() => onToggle(task.id, !task.isChecked)}
          />
          <span
            style={{
              color: "hotpink",
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            {task.description}
          </span>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </Lila>
      ))}
    </ol>
  );
}

function TaskForm({ onAdd }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      return;
    }
    onAdd(description);
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

const useDJTodoListStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (description) => {
        const newTask = { id: Date.now(), description, isChecked: false };
        set((state) => ({ tasks: [...state.tasks, newTask] }));
      },
      toggleTask: (taskId, isChecked) => {
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, isChecked } : task
          ),
        }));
      },
      deleteTask: (taskId) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        }));
      },
    }),
    {
      name: "dj-todo-list",
      version: 1,
    }
  )
);

function DJTodoList() {
  const { tasks, addTask, toggleTask, deleteTask } = useDJTodoListStore();

  return (
    <Wrapper>
      <div>
        <Uber>DJ To Do Liste</Uber>
        <TaskList tasks={tasks} onToggle={toggleTask} onDelete={deleteTask} />
        <TaskForm onAdd={addTask} />
      </div>
      <div>
        <LinkComponent />
      </div>
    </Wrapper>
  );
}

export default DJTodoList;
