import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import { Signup } from './pages/Signup.jsx'
import {Login} from './pages/Login.jsx'
import {Home} from './pages/Home.jsx'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import { NoteApp } from './pages/NoteApp.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
      <Route path='' element={<NoteApp/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='register' element={<Signup/>}/>
      <Route path='login' element={<Login/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer/>
    <RouterProvider router={router}  />
  </StrictMode>,
)
