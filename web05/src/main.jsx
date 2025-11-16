import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './componenets/About/About.jsx'
import Home from './componenets/Home/Home.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children:[
      {
        path: "",
        element:<Home/>
      },
      {
        path: "About",
        element:<About/>

      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider  router={router}/>

  </StrictMode>,
)
