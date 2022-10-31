import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import WhatWeDo from './pages/WhatWeDo/WhatWeDo'
import WhereAreWe from './pages/WhereAreWe/WhereAreWe'
import WhoDo from './pages/WhoDo/WhoDo'

const App = (): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="who-do" element={<WhoDo />} />
        <Route path="what-we-do" element={<WhatWeDo />} />
        <Route path="where-are-we" element={<WhereAreWe />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
