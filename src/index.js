import React from 'react';
import ReactDOM from 'react-dom/client';
import './app.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";


import Home from './pages/Home'
import ExerciseDetails from './pages/ExerciseDetails'



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <h1>Sorry this page does not exist <a style={{color: "blue"}} href='/'>go Home</a></h1>,
  },
  {
    path: "/home",
    element: <Home/>,
    errorElement: <h1>Sorry this page does not exist <a style={{color: "blue"}} href='/'>go Home</a></h1>,
  },
  {
    path: "/exercise/:id",
    element: <ExerciseDetails/>,
    errorElement: <h1>Sorry this page does not exist <a style={{color: "blue"}} href='/'>go Home</a></h1>,
  },
]);





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
