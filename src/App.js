import { Box, Paper, Typography } from "@mui/material";
import Task from "./components/tasks";

function App() {
  return (
    <>
      <Box
        component={Paper}
        sx={{
          width: "100%",
          height: 550,
          maxWidth: 800,
          margin: "100px auto",
          padding: 2,
          backgroundColor: "#f4c0e5",
        }}
      >
        <Typography variant="h4" align="center">
          To Do
        </Typography>

        <Task />
      </Box>
    </>
  );
}

export default App;