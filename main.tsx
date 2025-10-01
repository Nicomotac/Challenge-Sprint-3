import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

import Home from "./components/routes/Home"
import Contato from "./components/routes/Contato"
import FAQ from "./components/routes/FAQ"
import Integrantes from "./components/routes/Integrantes"
import Chatbot from "./components/routes/Chatbot"
import Solucao from "./components/routes/Solucao"
import Error from "./components/Error"

const router = createBrowserRouter([{
  path: "/",
  element: <App/>,
  errorElement: <Error/>,
  children:[
    {path: "/Home", element: <Home/>},
    {path: "/Contato", element: <Contato /> },
    {path: "/FAQ", element: <FAQ /> },
    {path: "/Integrantes", element: <Integrantes /> },
    {path: "/Chatbot", element: <Chatbot /> },
      {path: "/Solucao", element: <Solucao /> },
  ]
}])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
