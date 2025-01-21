import React, { useState } from "react";
import { CssBaseline, Box, Paper, Typography } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Task from "./components/tasks";
import AddTaskForm from "./components/form";
import ListOfTasks from "./taskLists";
import HomePage from "./pages/HomePage";

function App() {
  const [tasks, setTasks] = useState(ListOfTasks);

  return (
    <>
      <CssBaseline />
      <Box
        component={Paper}
        sx={{
          width: "100%",
          height: 630,
          // maxHeight: "100vh",
          maxWidth: 820,
          margin: "10px auto",
          backgroundColor: "#f5f5f5",
          borderRadius: 10,
        }}
      >
        <Typography variant="h6" align="center">
          Task Manager
        </Typography>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<HomePage tasks={tasks} setTasks={setTasks} />}
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
