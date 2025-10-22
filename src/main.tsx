import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ImageApp } from './ImageApp'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ImageApp />
  </StrictMode>,
)
