import React, { useState } from "react";
import ListOfTasks from "./components/taskLists";
import { Box, Paper, List, ListItem } from "@mui/material";
import ListItemIcon from '@mui/material/ListItemIcon';
import Checkbox from '@mui/material/Checkbox';

const Task = () => {
  return (
    <Box
      component={Paper}
      sx={{ maxWidth: 800, margin: "20px auto", padding: 2 }}
    >
      <List component={Paper}>
        {ListOfTasks.map((task, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#f4c0e5",
              padding: 1,
              margin: 1,
              borderRadius: 5,
            }}
          >
            <ListItem>
            <ListItemIcon>
                <Checkbox
                  edge="start"
                //   checked={checked.includes(value)}
                  tabIndex={-1}
                  disableRipple
                //   inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
                
                {task.text}
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Task;
