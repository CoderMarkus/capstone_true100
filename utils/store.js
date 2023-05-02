import create from "zustand";
import { persist } from "zustand/middleware";

export const useStore = create(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (description) =>
        set((state) => ({
          tasks: [
            ...state.tasks,
            { id: Date.now(), description, isChecked: false },
          ],
        })),
      toggleTask: (taskId, isChecked) =>
        set((state) => ({
          tasks: state.tasks.map((task) =>
            task.id === taskId ? { ...task, isChecked } : task
          ),
        })),
    }),
    {
      name: "dj-todo-list",
      getStorage: () => sessionStorage,
    }
  )
);
