import React, { useState } from "react";
import ListOfTasks from "../taskLists";
import { Box, Paper, List, ListItem, Typography } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";

const Task = () => {
  return (
    <Box
      component={Paper}
      sx={{
        maxWidth: 800,
        margin: "20px auto",
        padding: 2,
        maxHeight: 450, // Set the maximum height for the list container.
        overflowY: "auto", // Enable vertical scrolling when content exceeds max height.
      }}
    >
      <List component={Paper}>
        {ListOfTasks.map((task, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#dbf3bfdc",
              padding: 1,
              margin: 1,
              borderRadius: 5,
            }}
          >
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <ListItemIcon>
                  <Checkbox
                    edge="start"
                    //   checked={checked.includes(value)}
                    tabIndex={-1}
                    disableRipple
                    //   inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>

                <Typography>{task.text}</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <IconButton edge="start" aria-label="edit">
                  <EditIcon />
                </IconButton>
                <IconButton edge="start" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </ListItem>
          </Box>
        ))}
      </List>
    </Box>
  );
};

export default Task;
