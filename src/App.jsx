
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Shared/Navbar'
import Footer from "./Components/Shared/Footer";

function App() {


  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
      
    </>
  )
}

export default App
