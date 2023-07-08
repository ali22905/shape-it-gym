import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';


import {exerciseOptions, fetchData} from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'


const Exercises = ({bodyPart, setExercises, exercises}) => {

  const exercisesPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (e, value) => {
    setCurrentPage(value)

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  }

  let indexOfLastExercise = currentPage * exercisesPerPage;
  let indexOfFirstExercise = indexOfLastExercise - exercisesPerPage

  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise)

  useEffect(() => {
    const fetchExercisesData = async  () => {
      let exercisesData = []
      if (bodyPart == 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      }else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions)
      }
  
      setExercises(exercisesData)
    }
    fetchExercisesData()
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' }, marginInline: "auto", width: "fit-content" }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{marginInline: "auto", w: "fit-content", fontSize: { lg: '44px', xs: '30px' } }} mb="70px">Showing Results</Typography>
      
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
          {exercises.length > exercisesPerPage && (
            <Pagination showFirstButton showLastButton
            color="secondary"
            variant="outlined"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            />
          )}
      </Stack>
    </Box>
  );
}

export default Exercises;
