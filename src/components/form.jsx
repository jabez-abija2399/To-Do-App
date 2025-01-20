import React, { useState } from "react";
import { Box, Button, TextField, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddTaskForm = ({ tasks, setTasks }) => {
  const [task, setTask] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setTask(event.target.value); // Update task input value
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    if (task.trim() !== "") {
        const newTask = { title: task, completed: false };
        setTasks([...tasks, newTask]); // Add new task to the tasks array
        navigate("/"); // Navigate back to task list
    }
  };

  return (
    <Box
      component={Paper}
      sx={{
        maxWidth: 600,
        margin: "20px auto",
        boxShadow: 3,
        borderRadius: 10,
        padding: 3,
      }}
    >
      <Typography variant="h5" align="center" gutterBottom>
        Add New Task
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ display: "flex", maxWidth: 400, margin: "20px auto" }}>
          <TextField
            label="Task"
            variant="outlined"
            fullWidth
            helperText="Enter a new task"
            value={task}
            onChange={handleInputChange}
            sx={{ marginBottom: 2}}

          />
        </Box>

        <Box sx={{ display: "flex", maxWidth: 200, margin: "20px auto" }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ backgroundColor: "#4caf50" }}
          >
            Add Task
          </Button>
          <Button
          variant="outlined"
          sx={{ marginLeft: 2 }}
          onClick={() => navigate("/")}
        >
          Cancel
        </Button>
        </Box>
      </form>
    </Box>
  );
};

export default AddTaskForm;
