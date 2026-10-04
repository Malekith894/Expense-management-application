import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Authcontextprovider from './context/logicon/index.jsx'
import router from './routes/index.jsx'
import { RouterProvider } from 'react-router-dom'
import Usercontextprovider from './context/userinfo/index.jsx'
import Calcontextprovider from './context/calculation/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Authcontextprovider>
    <Usercontextprovider>
    <Calcontextprovider>
      <RouterProvider router={router}/>
    </Calcontextprovider>
    </Usercontextprovider>
    </Authcontextprovider>
  </StrictMode>,
)
