import HomePage from './pages/HomePage'
import Header from './components/Header'
import SideNav from './components/SideNav'
import { Outlet, useLocation } from 'react-router'
import "./styles/index.css"
import { useState } from 'react'

const App = () => {
    const [isOpen, setIsOpen] = useState(true)
    const location = useLocation()
  return (
    <div>
      <Header/>
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className={`pages ${isOpen ? "" : "moved"}`}>
       {
         location.pathname == '/' && <HomePage/>
       }
      <Outlet/>
      </div>
    </div>
  )
}

export default App
