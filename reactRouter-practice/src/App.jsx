import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './Component/Navbar'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import Home from './Component/Home'
import Login from './Component/Login'
import About from './Component/About'

function App() {

  const router = createBrowserRouter([
    {
      path : "/",
      element: <Home/>
    },
    {
      path: "/login",
      element:<Login/>
    },
    {
      path : "/about",
      element:<About/>
    }
  ])
  
  return (
    <>
    <h2>HAAAA hiiiiiii</h2>
     <Navbar/>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
