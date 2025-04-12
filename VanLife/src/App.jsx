
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Nav from './pages/Nav'
import Home from './pages/Home'
import About from './pages/About'
import Footer from './pages/Footer'
function App() {

  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
