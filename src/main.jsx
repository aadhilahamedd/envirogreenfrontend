import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import './bootstrapyeti.min.css'
import { BrowserRouter } from 'react-router-dom'
import ContextProvider from './Features/ContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </ContextProvider>


)
