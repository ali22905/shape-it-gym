import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography, Stack } from '@mui/material';

import BodyPart from './BodyPart'




const Horizontalscrollbar = ({data, bodyPart, setBodyPart}) => {


  return (
    <>
      <div style={{paddingBottom: "20px", overflow: "auto", whiteSpace: "nowrap", flexDirection:"row", display: "flex"}}>
        {data.map((item) => (
          <Box 
            key={item.id || item}
            itemID={item.id || item}
            title={item.id || item}
            m="0 40px"
            >
            <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart} />
          </Box>
        ))}
      </div>
    </>
  );
}

export default Horizontalscrollbar;
