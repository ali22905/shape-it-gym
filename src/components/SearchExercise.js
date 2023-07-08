import React, {useState, useEffect} from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import {exerciseOptions, fetchData} from '../utils/fetchData'

import HorizontalScrollbar from './HorizontalScrollbar'

const Searchexercise = ({bodyPart, setBodyPart, setExercises}) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);


  useEffect(() => {
    // will get all the body parts as soon as the page renders
    const fetchBodyParts = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      setBodyParts(['all', ...bodyPartsData])
    }
    fetchBodyParts()
  }, []);


  const handleSearch = async () => {
    if (search) {

      // returns object of this objects { bodyPart :  "waist" equipment :  "body weight" gifUrl :  "http://d205bpvrqc9yn1.cloudfront.net/0001.gif"id: "0001"name: "3/4 sit-up"target: "abs" }
      // all exercises possible
      const exerciseData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions)
      
      // make the search functionality
      const searchedData = exerciseData.filter(
        // search by the name prop
        (exercise) => exercise.name.toLowerCase().includes(search)
        // and the bodypart prop
        || exercise.bodyPart.toLowerCase().includes(search)
        // and the equipment prop
        || exercise.equipment.toLowerCase().includes(search)
        // and the target of the exercise prop
        || exercise.target.toLowerCase().includes(search)
      )
      setExercises(searchedData) 
    }
  }


  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{postion: 'relative', width: "100%", p: "20px"}}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
}

export default Searchexercise;
