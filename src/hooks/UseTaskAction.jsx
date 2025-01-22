import React, { useState } from "react";

const UseTaskAction = ({ tasks, setTasks, filteredTasks }) => {
  const [editingIndex, setEditingIndex] = useState(null); // Track the task being edited
  const [editText, setEditText] = useState(""); // Temporary state for edited task text

  // Delete a task
  const handleDelete = (filteredIndex) => {
    const taskId = filteredTasks[filteredIndex].id;
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // Edit a task
  const handleEdit = (filteredIndex) => {
    const taskId = filteredTasks[filteredIndex].id;
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      setEditingIndex(taskIndex); // Set the task to edit mode
      setEditText(tasks[taskIndex].title); // Set the current text as the default value
    }
  };

  // Save edited task
  const handleSaveEdit = () => {
    if (editingIndex !== null) {
      const updatedTasks = [...tasks];
      updatedTasks[editingIndex].title = editText; // Update the task title
      setTasks(updatedTasks); // Update state
      setEditingIndex(null); // Exit edit mode
      setEditText(""); // Clear temporary state
    }
  };

  // Cancel editing
  const handleCancelEdit = () => {
    setEditingIndex(null); // Exit edit mode
    setEditText(""); // Clear temporary state
  };

  // Toggle task completion
  const handleComplete = (filteredIndex) => {
    const taskId = filteredTasks[filteredIndex].id;
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed; // Toggle completion
      setTasks(updatedTasks);
    }
  };

  return {
    editingIndex,
    editText,
    setEditText,
    handleDelete,
    handleEdit,
    handleSaveEdit,
    handleCancelEdit,
    handleComplete,
  };
};

export default UseTaskAction;
