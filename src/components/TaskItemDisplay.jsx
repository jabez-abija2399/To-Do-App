import React from "react";
import { Box, Typography } from "@mui/material";
import ListItemIcon from "@mui/material/ListItemIcon";
import Checkbox from "@mui/material/Checkbox";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";  

const TaskItem = ({task, handleComplete, handleDelete, handleEdit}) => {
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={task.completed}
            onChange={handleComplete}
            tabIndex={-1}
            disableRipple
            //   inputProps={{ 'aria-labelledby': labelId }}
          />
        </ListItemIcon>

        <Typography>{task.title}</Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <IconButton
          edge="start"
          aria-label="edit"
          onClick={handleEdit}
        >
          <EditIcon />
        </IconButton>
        <IconButton
          onClick={handleDelete}
          edge="start"
          aria-label="delete"
        >
          <DeleteIcon sx={{ color: "red" }} />
        </IconButton>
      </Box>
    </>
  );
};

export default TaskItem;
