import React from 'react'
import { LanguageProvider } from './context/Context'
import Greeting from './pages/Profile'

const App = () => {
  return (
    <LanguageProvider>
      <Greeting />
    </LanguageProvider>
  )
}

export default App
