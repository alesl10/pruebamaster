import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Products from './routes/products.jsx'
import Home from './routes/Home.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <Home />
  },
  {
    path: '/products',
    element: <Products />
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)