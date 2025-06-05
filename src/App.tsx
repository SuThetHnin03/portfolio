import HomePage from './pages/HomePage'
import Header from './components/Header'
import SideNav from './components/SideNav'
import { Routes, Route, Outlet, useLocation } from 'react-router-dom'
import { useState } from 'react'

import SkillsPage from './pages/SkillsPage'
import ProjectsPage from './pages/ProjectsPage'
import ProjectPage from './pages/ProjectPage'
import ContactPage from './pages/ContactPage'
import ResourcesPage from './pages/ResourcesPage'
import NotFound from './pages/NotFound'

const Layout = () => {
  const [isOpen, setIsOpen] = useState(true)
  const location = useLocation()

  return (
    <div>
      <Header />
      <SideNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className={`pages ${isOpen ? '' : 'moved'}`}>
        {location.pathname === '/' && <HomePage />}
        <Outlet />
      </div>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="skills" element={<SkillsPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="projects/:projectId" element={<ProjectPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="resources" element={<ResourcesPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
