import React from "react";
import {PropTypes} from "prop-types";
import { Box, CssBaseline, Fab, Typography, Paper, AppBar, Toolbar, Container } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Fade from "@mui/material/Fade";
import Task from "./components/tasks";
import ScrollTop from "./components/scrollTop";


function App(props) {
  return (
    <>
    <CssBaseline />
    {/* AppBar at the top */}

    {/* Main To-Do List Section */}
    <Container>
      <Box
        component={Paper}
        sx={{
          width: "100%",
          height: 550,
          maxWidth: 800,
          margin: "100px auto",
          padding: 2,
          backgroundColor: "#384727dc",
        }}
      >
        <Typography variant="h4" align="center">
          To Do
        </Typography>
        <Task />
        
      </Box>
    </Container>

    {/* Scroll to Top Button */}
    {/* <ScrollTop {...props}>
      <Fab size="small" aria-label="scroll back to top">
        <KeyboardArrowUpIcon />
      </Fab>
    </ScrollTop> */}
  </>

  );
}

export default App;