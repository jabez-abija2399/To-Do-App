import React from "react";
import { TextField, Button } from "@mui/material";

const EditTaskForm = ({handleCancelEdit, handleSaveEdit,setEditText, editText}) => {
  return (
    <>
      <TextField
        value={editText}
        onChange={(e) => setEditText(e.target.value)}
        variant="outlined"
        size="small"
        fullWidth
        sx={{ marginRight: 1 }}
      />
      <Button
        variant="contained"
        color="primary"
        size="small"
        sx={{ marginRight: 1 }}
        onClick={handleSaveEdit}
      >
        Save
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        size="small"
        onClick={handleCancelEdit}
      >
        Cancel
      </Button>
    </>
  );
};

export default EditTaskForm;
