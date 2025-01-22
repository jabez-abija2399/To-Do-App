import React from 'react';
import { Box, IconButton } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const ScrollableButton = ({scrollPosition, scrollBottom, scrollTop}) => {
    return ( 
        <>
        {/* scroll  */}
        {scrollPosition === 0 ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // marginTop: 0,
            position: "absolute",
            alignItems: "center",
            left: "94%",
            top: "90%",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#5fac07dc",
              borderRadius: "50%",
              boxShadow: 2,
            }}
            onClick={scrollBottom}
          >
            <KeyboardArrowDownIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            // marginTop: 2,
            position: "absolute",
            alignItems: "center",
            left: "94%",
            top: "90%",
          }}
        >
          <IconButton
            sx={{
              backgroundColor: "#5fac07dc",
              borderRadius: "50%",
              boxShadow: 4,
            }}
            onClick={scrollTop}
          >
            <KeyboardArrowUpIcon sx={{ color: "black" }} />
          </IconButton>
        </Box>
      )}
        </>
     );
}
 
export default ScrollableButton;