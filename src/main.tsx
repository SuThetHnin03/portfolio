import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./styles/index.css"

import { createBrowserRouter, RouterProvider } from 'react-router'
// import HomePage from './pages/HomePage.tsx'
import ProjectsPage from './pages/ProjectsPage.tsx'
import ProjectPage from './pages/ProjectPage.tsx'
import NotFound from './pages/NotFound.tsx'
import App from './App.tsx'
import SkillsPage from './pages/SkillsPage.tsx'
import ContactPage from './pages/ContactPage.tsx'
import ResourcesPage from './pages/ResourcesPage.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <div>404 Not Found</div>
    errorElement: <NotFound />,
    children:
      [
        {
          path: 'skills',
          element: <SkillsPage />,
          errorElement: <NotFound />
        },

        {
          path: 'projects',
          element: <ProjectsPage />,
        },
        {
          path: '/projects/:project',
          element: <ProjectPage />,
        },
        {
          path: 'contact',
          element: <ContactPage />,
          // errorElement: <div>404 Not Found</div>
          errorElement: <NotFound />
        },

        {
          path: 'resources',
          element: <ResourcesPage />,
          // errorElement: <div>404 Not Found</div>
          errorElement: <NotFound />
        },
      ]
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
