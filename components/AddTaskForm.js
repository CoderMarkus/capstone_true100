import { useState } from "react";

function AddTaskForm({ onAddTask }) {
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description.trim()) {
      onAddTask(description);
      setDescription("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Neue Aufgabe hinzufügen..."
      />
      <button type="submit">Hinzufügen</button>
    </form>
  );
}

export default AddTaskForm;
