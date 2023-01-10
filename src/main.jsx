import React from 'react'
import ReactDOM from 'react-dom/client'
import{
  RouterProvider,
}from 'react-router-dom'
import { AuthContextProvider } from './context/auth'
import { router } from './pages'
import './style/MainPageStyle.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProvider>
    <RouterProvider router={router} />
    </AuthContextProvider>
  
  </React.StrictMode>,
)