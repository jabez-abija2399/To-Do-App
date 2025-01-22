import React from "react";
import { Box, Paper, List, ListItem } from "@mui/material";
import EditTaskForm from "./EditTaskForm";
import TaskItem from "./TaskItemDisplay";

const TaskItemList = ({
  filteredTasks,
  editText,
  editingIndex,
  setEditText,
  listRef,
  handleCancelEdit,
  handleComplete,
  handleDelete,
  handleEdit,
  handleSaveEdit,
}) => {
  return (
    <>
      <List
        component={Paper}
        ref={listRef}
        sx={{
          maxHeight: 350,
          overflowY: "auto",
          overflowX: "hidden",
          padding: 1,
        }}
      >
        {filteredTasks.map((task, index) => (
          <Box
            key={index}
            sx={{
              backgroundColor: "#dbf3bfdc",
              padding: 1,
              margin: 1,
              borderRadius: 5,
              height: "auto",
            }}
          >
            <ListItem
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              {editingIndex === index ? (
                // Input field for editing
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    flexGrow: 1,
                  }}
                >
                  <EditTaskForm
                    editText={editText}
                    setEditText={setEditText}
                    handleCancelEdit={handleCancelEdit}
                    handleSaveEdit={handleSaveEdit}
                  />
                </Box>
              ) : (
                // {/* Display task item */}
                <TaskItem
                  key={index}
                  task={task}
                  handleComplete={() => handleComplete(index)}
                  handleEdit={() => handleEdit(index)}
                  handleDelete={() => handleDelete(index)}
                />
              )}
            </ListItem>
          </Box>
        ))}
      </List>
    </>
  );
};

export default TaskItemList;
