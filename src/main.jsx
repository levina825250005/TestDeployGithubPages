import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tambah from './tambah.jsx'
import InputTeks from './inputteks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div>
      <Tambah/>
      <InputTeks />
    </div>
  </StrictMode>,
)
