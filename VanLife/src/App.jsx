
import './App.css'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Nav from './pages/Nav'
import About from './pages/About'
import Footer from './pages/Footer'
import Vans from './pages/Vans'
import VanDetails from './pages/VanDetails'
import "./server"
function App() {

  return (
    <>
    <BrowserRouter>
      
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/vans" element={<Vans/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/vans/:id" element={<VanDetails/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
