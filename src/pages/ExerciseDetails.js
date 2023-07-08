import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import {exerciseOptions, fetchData, youtubeOptions} from '../utils/fetchData'
import Details from '../components/Details'
import ExerciseVideos from '../components/ExerciseVideos'
import SimilarExercises from '../components/SimilarExercises'



const Exercisedetails = () => {
  const [exerciseDetails, setexExerciseDetails] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [similarmuscle, setSimilarmuscle] = useState([]);
  const [similarEquipment, setSimilarEquipment] = useState([]);
  const {id} = useParams()


  useEffect(() => {

    const fetchExercisesData = async() => {
      const exercisesDbLink = "https://exercisedb.p.rapidapi.com"
      const youtubeDbLink = "https://youtube-search-and-download.p.rapidapi.com"


      const exerciseData = await fetchData(`${exercisesDbLink}/exercises/exercise/${id}`, exerciseOptions)
      setexExerciseDetails(exerciseData)

      const exersiseVideosData = await fetchData(`${youtubeDbLink}/search?query=${exerciseData.name}`, youtubeOptions)
      setExerciseVideos(exersiseVideosData.contents)

      const similarMuscleData = await fetchData(`${exercisesDbLink}/exercises/target/${exerciseData.target}`, exerciseOptions)
      setSimilarmuscle(similarMuscleData)
      const similarEquipmentData = await fetchData(`${exercisesDbLink}/exercises/equipment/${exerciseData.equipment}`, exerciseOptions)
      setSimilarEquipment(similarEquipmentData)
    }
    fetchExercisesData()

  }, [id]);


  return (
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
      <NavBar />

      <Box>
        <Details exerciseDetails={exerciseDetails}/>
        <ExerciseVideos name={exerciseDetails.name} exerciseVideos={exerciseVideos}/>
        <SimilarExercises similarmuscle={similarmuscle} similarEquipment={similarEquipment} />
      </Box>

      <Footer />
    </Box>
  );
}

export default Exercisedetails;
