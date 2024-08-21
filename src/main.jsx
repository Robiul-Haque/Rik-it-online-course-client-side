import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
// import router from './route/Route'

const router = createBrowserRouter([
  {
      path: "/",
      element: <MainLayout />,
      children: [
          {
              path: "/",
              element: <HomePage/>
          }
      ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
