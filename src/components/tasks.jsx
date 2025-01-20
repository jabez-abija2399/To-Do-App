// import React, { useState } from "react";
// import ListOfTasks from "./components/taskLists";
// import { Box, Paper, List, ListItem } from "@mui/material";
// import ListItemIcon from '@mui/material/ListItemIcon';
// import Checkbox from '@mui/material/Checkbox';

// const Task = () => {
//   return (
// <Box
//   component={Paper}
//   sx={{ maxWidth: 800, margin: "20px auto", padding: 2 }}
// >
// <List component={Paper}>
//   {ListOfTasks.map((task, index) => (
//     <Box
//       key={index}
//       sx={{
//         backgroundColor: "#f4c0e5",
//         padding: 1,
//         margin: 1,
//         borderRadius: 5,
//       }}
//     >
//       <ListItem>
//       <ListItemIcon>
//           <Checkbox
//             edge="start"
//           //   checked={checked.includes(value)}
//             tabIndex={-1}
//             disableRipple
//           //   inputProps={{ 'aria-labelledby': labelId }}
//           />
//         </ListItemIcon>

//           {task.text}
//       </ListItem>
//     </Box>
//   ))}
// </List>
//     </Box>
//   );
// };

// export default Task;

// src/components/TaskRow.js
import React from "react";
import {
  Box,
  Checkbox,
  ListItem,
  ListItemIcon,
  Typography,
  List,
  Paper,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import { Edit } from "@mui/icons-material";

const TaskRow = ({ task }) => {
  return (
    // <Box style={style} sx={{ padding: 1, backgroundColor: "#fff", margin: "5px 0", borderRadius: 5 }}>
    <Box
      component={Paper}
      sx={{ maxWidth: 800, margin: "20px auto", padding: 2 }}
    >
      <List component={Paper}>
        {/* {ListOfTasks.map((task, index) => ( */}
        <Box
          // key={index}
          sx={{
            backgroundColor: "#f4c0e5",
            padding: 1,
            margin: 1,
            borderRadius: 5,
          }}
        >
          <ListItem sx={{
              display: "flex",
              justifyContent: "space-between", // Align content to both ends
              alignItems: "center", // Vertically center the content
            }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center", // Vertically center the checkbox and text
              }}
            >
              <ListItemIcon>
                <Checkbox edge="start" tabIndex={-1} disableRipple />
              </ListItemIcon>
              <Typography>{task.text}</Typography>
            </Box>
            <IconButton edge="start" aria-label="delete">
              <Edit  />
            </IconButton>
            <IconButton edge="start" aria-label="delete">
              <DeleteIcon />
            </IconButton>

          </ListItem>
        </Box>
        {/* ))} */}
      </List>
    </Box>
  );
};

export default TaskRow;
