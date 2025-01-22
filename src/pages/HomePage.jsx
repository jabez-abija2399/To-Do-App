import React, { useState, useRef, useEffect } from "react";
import { Box, Paper, List, ListItem, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import TaskItem from "../components/TaskItemDisplay";
import EditTaskForm from "../components/EditTaskForm";
import FilterDropDown from "./../components/FilterDropDown";
import ScrollableButton from "../components/ScrollableButton";
import TaskItemList from "../components/TaskItemList";

const HomePage = ({ tasks, setTasks }) => {
  const listRef = useRef(null);
  const navigate = useNavigate();

  const [scrollPosition, setScrollPosition] = useState(0);
  const [editingIndex, setEditingIndex] = useState(null); // Track the task being edited
  const [editText, setEditText] = useState(""); // Temporary state for edited task text
  const [filter, setFilter] = useState("all"); // Filter state

  // fuction to handle the scrooll to the Top of the list
  const scrollTop = () => {
    if (listRef.current) {
      listRef.current.scrollTop = 0;
    }
  };

  // function to handle the scrooll to the Bottom of the list
  const scrollBottom = () => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  };

  // Listen for scroll events and update the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        setScrollPosition(listRef.current.scrollTop); // Update scroll position in state
      }
    };

    const currentListRef = listRef.current;
    currentListRef.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      if (currentListRef) {
        currentListRef.removeEventListener("scroll", handleScroll); // Clean up the event listener
      }
    };
  }, []);

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  // const handleAddTask = (newTask) => {
  //   setTasks((prevTasks) => [...prevTasks, { title: newTask, completed: false }]);
  // };

  const handleEdit = (index) => {
    setEditingIndex(index); // Set the task to edit mode
    setEditText(tasks[index].title); // Set the current text as the default value
  };

  const handleSaveEdit = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex].title = editText; // Update the task title
    setTasks(updatedTasks); // Update state
    setEditingIndex(null); // Exit edit mode
    setEditText(""); // Clear temporary state
  };

  const handleCancelEdit = () => {
    setEditingIndex(null); // Exit edit mode
    setEditText(""); // Clear temporary state
  };

  const handleComplete = (filteredIndex) => {
    // Find the task's index in the original tasks array
    const taskIndex = tasks.findIndex(
      (task) => task === filteredTasks[filteredIndex]
    );

    // Toggle completion status
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].completed = !updatedTasks[taskIndex].completed;

    // Update tasks state
    setTasks(updatedTasks);
  };

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === "completed") return task.completed;
    if (filter === "incomplete") return !task.completed;
    return true; // "all"
  });

  return (
    <Box
      component={Paper}
      sx={{
        maxWidth: 800,
        margin: "20px auto",
        padding: 2,
        position: "relative",
        // height: "100%",
        maxHeight: "100vh",
        // overflow: "hidden",
        borderRadius: 10,
      }}
    >
      <Typography variant="h6" align="center">
        {filteredTasks.length} Tasks
      </Typography>
      {/* Dropdown for Filtering */}
      <FilterDropDown filter={filter} setFilter={setFilter} />

      {filteredTasks.length !== 0 ? (
        <TaskItemList
          filteredTasks={filteredTasks}
          editText={editText}
          editingIndex={editingIndex}
          setEditText={setEditText}
          listRef={listRef}
          handleCancelEdit={handleCancelEdit}
          handleComplete={handleComplete}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
          handleSaveEdit={handleSaveEdit}
        />
      ) : (
        <Typography variant="h6" align="center">
          No tasks
        </Typography>
      )}
      <Button
        variant="contained"
        sx={{ backgroundColor: "#384727dc", marginTop: 2 }}
        onClick={() => navigate("/add")}
      >
        Add Task
      </Button>

      {/* scroll  */}
      <ScrollableButton
        scrollBottom={scrollBottom}
        scrollTop={scrollTop}
        scrollPosition={scrollPosition}
      />
    </Box>
  );
};

export default HomePage;
