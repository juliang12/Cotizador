import React from 'react'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HistoryPage from '../pages/historyPage/HistoryPage'
import HomePage from '../pages/home/HomePage'

const AppRouter = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/history' element={<HistoryPage/>}/>
        </Routes>
    </Router>
  )
}

export default AppRouter