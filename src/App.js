import React, { useState } from "react";
import { CssBaseline, Box, Paper, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Task from "./components/tasks";
import AddTaskForm from "./components/form";
import ListOfTasks from "./taskLists";

function App() {
  const [tasks, setTasks] = useState(ListOfTasks);

  return (
    <>
      <CssBaseline />
      <Box
        component={Paper}
        sx={{
          width: "100%",
          height: 650,
          maxWidth: 800,
          margin: "10px auto",
          backgroundColor: "#384727dc",
          borderRadius: 10,
        }}
      >
        <Typography variant="h4" align="center">
          To Do List
        </Typography>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Task tasks={tasks} setTasks={setTasks} />}
            />
            <Route
              path="/add"
              element={<AddTaskForm tasks={tasks} setTasks={setTasks} />}
            />
          </Routes>
        </Router>
      </Box>
    </>
  );
}

export default App;
