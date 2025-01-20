import React, { useState, useRef } from "react";
import ListOfTasks from "../taskLists";
import { Box, Paper, List, ListItem, Typography, Button } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Task = () => {
  const listRef = useRef(null);

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
  
  return (
    <Box
      component={Paper}
      sx={{
        maxWidth: 800,
        margin: "20px auto",
        padding: 2,
        position: "relative",
      }}
    >
      <List
        component={Paper}
        ref={listRef}
        sx={{
          maxHeight: 400,
          overflowY: "auto",
          overflowX: "hidden",
          padding: 1,
        }}
      >
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
                  <DeleteIcon sx={{color: "red"}} />
                </IconButton>
              </Box>
            </ListItem>
          </Box>
        ))}
      </List>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          // marginTop: 2,
          position: "absolute",
          alignItems: "center", 
          left: "50%",
          
        }}
      >
        <IconButton
          sx={{ backgroundColor: "#84f504dc", borderRadius: "50%", boxShadow: 4  }}
          onClick={scrollTop}
        >
          <KeyboardArrowUpIcon sx={{color: "black"}} />
        </IconButton>
        <IconButton
          sx={{ backgroundColor: "#84f504dc", borderRadius: "50%", boxShadow: 2 }}
          onClick={scrollBottom}
        >
          <KeyboardArrowDownIcon sx={{color: "black"}}  />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Task;
