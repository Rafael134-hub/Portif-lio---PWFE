import React from 'react';
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home/home';
import UI_UX from './pages/UI - UX/ui-ux';
import JavaScript from './pages/Exercises/exercises-';


export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ui-ux" element={<UI_UX/>} />
        <Route path="/javascript" element={<JavaScript/>} />
      </Routes>
  );
}

