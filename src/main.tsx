import React from 'react'
import { createRoot } from 'react-dom/client'
import { mockServer } from '../mock-server/index.ts'
import App from './app/app'

const renderApp = () => {
  createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

mockServer().then(() => renderApp())
