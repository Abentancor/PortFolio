import './Utils/darkMode'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { routes } from './Routes/Router'
import LanguageProvider from './Context/LanguageContext'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LanguageProvider>
    <RouterProvider router={routes}/>
    </LanguageProvider>
  </React.StrictMode>,
)
