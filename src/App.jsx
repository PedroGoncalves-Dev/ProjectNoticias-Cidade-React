
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
          <main className='containerApp'>
            
          <Routes>
            <Route path="/" element={<Home/>} />
          </Routes>
        
          </main>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
