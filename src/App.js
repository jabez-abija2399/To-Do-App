// import { Box, Paper, Typography } from "@mui/material";
// import Task from "./tasks";
// import { FixedSizeList } from 'react-window';

// function App() {
//   return (
//     <>
// <Box component={Paper} sx={{width: '100%', height: 550, maxWidth: 800, margin: '100px auto', padding: 2, backgroundColor: '#f4c0e5' }}>
//       <Typography variant="h4" align="center">To Do</Typography>
//       <FixedSizeList
//         height={400}
//         width={360}
//         itemSize={46}
//         itemCount={200}
//         overscanCount={5}
//       >
//         <Task />
//       </FixedSizeList>

//     </Box>
//     </>
//   );
// }

// export default App;

import React from "react";
import { Box, Paper, Typography } from "@mui/material";
import { FixedSizeList } from "react-window";
import ListOfTasks from "./taskLists";
import TaskRow from "./components/tasks";

function App() {
  const rowRenderer = ({ index }) => (
    <TaskRow key={index} task={ListOfTasks[index]} />
  );

  return (
    <Box
      component={Paper}
      sx={{
        width: "100%",
        height: 500,
        maxWidth: 800,
        margin: "100px auto",
        padding: 2,
        backgroundColor: "#44c0e5",
      }}
    >
      <Typography variant="h4" align="center">
        To Do
      </Typography>
      <FixedSizeList
        height={400}
        width={800}
        itemSize={46}
        itemCount={ListOfTasks.length}
        overscanCount={5}
      >
        {rowRenderer}
      </FixedSizeList>
    </Box>
  );
}

export default App;
