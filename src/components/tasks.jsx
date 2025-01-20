import React, { useState, useRef,useEffect } from "react";
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
  const [tasks, setTasks] = useState(ListOfTasks);
  const [scrollPosition, setScrollPosition] = useState(0);

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

  // Listen for scroll events and update the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (listRef.current) {
        setScrollPosition(listRef.current.scrollTop); // Update scroll position in state
      }
    };

    const currentListRef = listRef.current;
    currentListRef.addEventListener("scroll", handleScroll); // Add scroll event listener

    return () => {
      if (currentListRef) {
        currentListRef.removeEventListener("scroll", handleScroll); // Clean up the event listener
      }
    };
  }, []);


  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <Box
      component={Paper}
      sx={{
        maxWidth: 800,
        margin: "20px auto",
        padding: 2,
        position: "relative",
        height: 560,  
      }}
    >
      {tasks.length !== 0 ? (
      <List
        component={Paper}
        ref={listRef}
        sx={{
          maxHeight: 450,
          overflowY: "auto",
          overflowX: "hidden",
          padding: 1,
        }}
      >
        
          <Typography variant="h6" align="center">
            {tasks.length} tasks
          </Typography>
        
        {tasks.map((task, index) => (
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
                <IconButton onClick={handleDelete} edge="start" aria-label="delete">
                  <DeleteIcon sx={{color: "red"}} />
                </IconButton>
              </Box>
            </ListItem>
          </Box>
        ))}
      
      </List>
      ) : (
        <Typography variant="h6" align="center">
          No tasks
        </Typography> 

      )
      }
      <Button
        variant="contained"
        sx={{ backgroundColor: "#384727dc", marginTop: 2 }}
      >
        Add Task
      </Button>

      {scrollPosition === 0 ? (
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
          sx={{ backgroundColor: "#5fac07dc", borderRadius: "50%", boxShadow: 2 }}
          onClick={scrollBottom}
        >
          <KeyboardArrowDownIcon sx={{color: "black"}}  />
        </IconButton>
      </Box>
      ):(
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
          sx={{ backgroundColor: "#5fac07dc", borderRadius: "50%", boxShadow: 4  }}
          onClick={scrollTop}
        >
          <KeyboardArrowUpIcon sx={{color: "black"}} />
        </IconButton>
        
      </Box>
      )
    }
      
      
    </Box>
  );
};

export default Task;
