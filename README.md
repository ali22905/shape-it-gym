# Shape It Gym

## Description
Shape It Gym is an online platform that provides access to over 2000 exercises for all muscle groups. Whether you have access to gym equipment or prefer home workouts, this platform caters to both options. Each exercise comes with a detailed explanation and instructional videos demonstrating the correct technique. You can easily filter exercises by muscle group or search for specific exercises.

## Technologies Used
- JavaScript
- React
- MUI (Material-UI)
- APIs
- Axios

## Features
- Access to over 2000 exercises for all muscle groups
- Differentiates between exercises that require gym equipment and those that can be done at home
- Detailed explanations and instructional videos for each exercise
- Filtering exercises by muscle group or searching for specific exercises

## Code Example
Here's an example code snippet that fetches body parts data from an API:

```javascript
useEffect(() => {
  const fetchBodyParts = async () => {
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    setBodyParts(['all', ...bodyPartsData]);
  };
  fetchBodyParts();
}, []);
```

## Contact Information
- Name: Ali Attia
- Email: aly2292005@gmail.com
- Phone Number: +201027393406
