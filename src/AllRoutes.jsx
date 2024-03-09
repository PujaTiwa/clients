import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Auth from './pages/Auth/Auth.jsx';
import Home from './pages/Home/Home.jsx';
import Questions from './pages/Questions/Questions.jsx';
import AskQuestion from './pages/AskQuestion/AskQuestion.jsx';
import DisplayQuestion from './pages/Questions/DisplayQuestion.jsx';

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/Auth' element={<Auth />} />
      <Route path='/Questions' element={<Questions />} />
      <Route path='/AskQuestion' element={<AskQuestion />} />
      <Route path='/Questions/:id' element={<DisplayQuestion />} />
    </Routes>
  )
}

export default AllRoutes;