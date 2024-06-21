import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Shop from "./pages/Shop"
import Checkout from "./pages/Checkout"


import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'


const router = createBrowserRouter([
 
  {
    path: "/",
    element:<App/>,
    children:[
      {
        index:true,
        element:<HomePage />,
      },
      {
        path: "/shop",
        element:<Shop />,
      },
      {
        path: "/checkout",
        element:<Checkout />,
      },
    ]
  },
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
