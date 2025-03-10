import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home/home';
import UI_UX from './pages/UI - UX/ui-ux';
import JavaScript from './pages/Exercises/exercises-';

import Exercise_1 from './pages/Exercises/exercise-1';
import Exercise_2 from './pages/Exercises/exercise-2';
import Exercise_3 from './pages/Exercises/exercise-3';
import Exercise_4 from './pages/Exercises/exercise-4';
import Exercise_5 from './pages/Exercises/exercise-5';
import Exercise_6 from './pages/Exercises/exercise-6';
import Exercise_7 from './pages/Exercises/exercise-7';
import Exercise_8 from './pages/Exercises/exercise-8';
import Exercise_9 from './pages/Exercises/exercise-9';
import Exercise_10 from './pages/Exercises/exercise-10';
import Exercise_11 from './pages/Exercises/exercise-11';
import Exercise_12 from './pages/Exercises/exercise-12';



export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ui-ux" element={<UI_UX/>} />
        <Route path="/javascript" element={<JavaScript/>} />

        <Route path="/javascript/example_1" element={<Exercise_1/>} />
        <Route path="/javascript/example_2" element={<Exercise_2/>} />
        <Route path="/javascript/example_3" element={<Exercise_3/>} />
        <Route path="/javascript/example_4" element={<Exercise_4/>} />
        <Route path="/javascript/example_5" element={<Exercise_5/>} />
        <Route path="/javascript/example_6" element={<Exercise_6/>} />
        <Route path="/javascript/example_7" element={<Exercise_7/>} />
        <Route path="/javascript/example_8" element={<Exercise_8/>} />
        <Route path="/javascript/example_9" element={<Exercise_9/>} />
        <Route path="/javascript/example_10" element={<Exercise_10/>} />
        <Route path="/javascript/example_11" element={<Exercise_11/>} />
        <Route path="/javascript/example_12" element={<Exercise_12/>} />
        
      </Routes>
  );
}

