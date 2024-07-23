
import './App.css'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/home'
import NavBar from './components/navBar'

function App() {
 

  return (
    <>
      <div className='App'>
        <BrowserRouter>
          <NavBar/>
          <div className='containerApp'>
            
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        
          </div>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
