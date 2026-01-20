import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/mulish/400.css'
import '@fontsource/mulish/700.css'
import '@fontsource/mulish/600.css'
import "@fontsource/open-sans-condensed"; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
