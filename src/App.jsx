import React from 'react'
import Navbar from './components/navbar'

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-amber-200">Hello World!</div>
    </div>
  )
}

export default App
