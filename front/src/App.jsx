import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home/home';
import UI_UX from './pages/UI - UX/ui-ux';
import JavaScript from './pages/Main_exercises/main_exercises';

import Basic_comands from './pages/Exercises/exercises-';
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

import Dom_function from './pages/Function_and_DOM/exercises_dom_function';
import Exercise_dom_function1 from './pages/Function_and_DOM/exercise_dom1';
import Exercise_dom_function2  from './pages/Function_and_DOMexercise_dom2';
import Exercise_dom_function3 from './pages/Function_and_DOM/exercise_dom3';
import Exercise_dom_function4 from './pages/Function_and_DOM/exercise_dom4';
import Exercise_dom_function5 from './pages/Function_and_DOM/exercise_dom5';
import Exercise_dom_function6 from './pages/Function_and_DOM/exercise_dom6';
import Exercise_dom_function7 from './pages/Function_and_DOM/exercise_dom7';
import Exercise_dom_function8 from './pages/Function_and_DOM/exercise_dom8';
import Exercise_dom_function9 from './pages/Function_and_DOM/exercise_dom9';
import Exercise_dom_function10 from './pages/Function_and_DOM/exercise_dom10';
import Exercise_dom_function11 from './pages/Function_and_DOM/exercise_dom11';
import Exercise_dom_function12 from './pages/Function_and_DOM/exercise_dom12';
import Exercise_dom_function13 from './pages/Function_and_DOM/exercise_dom13';

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ui-ux" element={<UI_UX/>} />
        <Route path="/javascript/" element={<JavaScript/>} />

        <Route path="/javascript/basic_commands" element={<Basic_comands/>} />
        <Route path="/javascript/basic_commands/example_1" element={<Exercise_1/>} />
        <Route path="/javascript/basic_commands/example_2" element={<Exercise_2/>} />
        <Route path="/javascript/basic_commands/example_3" element={<Exercise_3/>} />
        <Route path="/javascript/basic_commands/example_4" element={<Exercise_4/>} />
        <Route path="/javascript/basic_commands/example_5" element={<Exercise_5/>} />
        <Route path="/javascript/basic_commands/example_6" element={<Exercise_6/>} />
        <Route path="/javascript/basic_commands/example_7" element={<Exercise_7/>} />
        <Route path="/javascript/basic_commands/example_8" element={<Exercise_8/>} />
        <Route path="/javascript/basic_commands/example_9" element={<Exercise_9/>} />
        <Route path="/javascript/basic_commands/example_10" element={<Exercise_10/>} />
        <Route path="/javascript/basic_commands/example_11" element={<Exercise_11/>} />
        <Route path="/javascript/basic_commands/example_12" element={<Exercise_12/>} />
        
        <Route path="/javascript/dom_function/" element={<Dom_function/>}/>
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function1/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function2/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function3/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function4/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function5/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function6/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function7/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function8/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function9/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function10/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function11/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function12/>} />
        <Route path="/javascript/dom_function/exemple1" element={<Exercise_dom_function13/>} />

      </Routes>
  );
}

