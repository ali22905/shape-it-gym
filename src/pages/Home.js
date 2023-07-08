import React,{useState} from 'react';
import { Box } from '@mui/material';

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import HeroBanner from '../components/HeroBanner'
import SearchExercise from '../components/SearchExercise'
import Exercises from '../components/Exercises'


const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');


  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <NavBar />

      <Box>

        <HeroBanner />
        <SearchExercise bodyPart={bodyPart} setBodyPart={setBodyPart} setExercises={setExercises} />
        <Exercises  bodyPart={bodyPart} exercises={exercises} setExercises={setExercises}/>
      </Box>

      <Footer />
    </Box>
  );
}

export default Home;
