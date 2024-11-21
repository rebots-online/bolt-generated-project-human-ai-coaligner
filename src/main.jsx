import React from 'react'
import ReactDOM from 'react-dom/client'
import { pdfjs } from 'react-pdf'
import App from './App'
import './index.css'

// Set up the worker for react-pdf
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
