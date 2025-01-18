import { Box, Paper, Typography } from "@mui/material";

function App() {
  return (
    <>
    <Box component={Paper} sx={{ maxWidth: 400, margin: '20px auto', padding: 2, backgroundColor: 'lightblue'}}>
      <Typography variant="h4" align="center">To Do</Typography>
    </Box>
    </>
  );
}

export default App;
