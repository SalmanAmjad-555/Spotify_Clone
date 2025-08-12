
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/PlayerContext.jsx'

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
    <PlayerContextProvider>
         <App />
    </PlayerContextProvider>
      
    </BrowserRouter>
  
)
