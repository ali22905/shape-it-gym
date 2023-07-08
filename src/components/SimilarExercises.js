import React from 'react';
import { Typography, Box, Stack, Grid } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import Loader from './Loader';



const Similarexercises = ({similarEquipment, similarmuscle}) => {
  console.log(similarEquipment)
  console.log(similarmuscle)  
  return (
    <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
      </Typography>
      <Grid style={{marginBottom: "50px", paddingBottom: "20px", overflow: "auto hidden", whiteSpace: "nowrap", flexDirection:"row", display: "flex"}}>
        {similarEquipment.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))}
      </Grid>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: '50px' }} fontWeight={700} color="#000" mb="33px">
        Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>equipment</span> exercises
      </Typography>
      <div style={{overflowY: 'hidden', paddingBottom: "20px", overflow: "auto hidden", whiteSpace: "nowrap", flexDirection:"row", display: "flex"}}>
        {similarmuscle.map((exercise) => (
          <ExerciseCard key={exercise.id} exercise={exercise} />
        ))} 
      </div>
    </Box>
  );
}

export default Similarexercises;
