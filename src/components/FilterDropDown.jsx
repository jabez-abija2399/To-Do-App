import React from 'react';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


const FilterDropDown = ({filter, setFilter}) => {
    return ( 
        <>
        {/* Dropdown for Filtering */}
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
      <InputLabel>Filter Tasks</InputLabel>
      <Select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        label="Filter Tasks"
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="completed">Completed</MenuItem>
        <MenuItem value="incomplete">Incomplete</MenuItem>
      </Select>
    </FormControl>
    </>
     );
}
 
export default FilterDropDown;