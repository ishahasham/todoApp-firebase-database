import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Todo from './Screen/Todo'

function App() {
 
  return (
    <>
      <Routes>
        <Route index element={<Todo/>}/>
      </Routes>
    </>
  )
}

export default App
