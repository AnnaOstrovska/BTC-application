import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'

import { HomePage } from './pages/homePage/HomePage'

export const App = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </HashRouter>
)
