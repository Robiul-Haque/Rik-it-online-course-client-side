import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/Main';
import Home from './pages/Home';
import Course from './pages/Course';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/course",
        element: <Course />
      },
      {
        path: "/about",
        element: <h1>About</h1>
      },
      {
        path: "/success-story",
        element: <h1>Success story</h1>
      },
      {
        path: "/freelancing",
        element: <h1>Freelancing</h1>
      },
      {
        path: "/contact",
        element: <h1>Contact</h1>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
