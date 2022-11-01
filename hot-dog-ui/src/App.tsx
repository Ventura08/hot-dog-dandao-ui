import React, { ReactElement } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import WhatWeDo from './pages/WhatWeDo/WhatWeDo'
import WhereAreWe from './pages/WhereAreWe/WhereAreWe'
import WhoDo from './pages/WhoDo/WhoDo'

interface AppProps {
  className: string
}

const App = ({ className }: AppProps): ReactElement => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Header><WhoDo /></Header>} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/where-are-we" element={<WhereAreWe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
