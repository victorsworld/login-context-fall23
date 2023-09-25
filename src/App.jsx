import { useState } from 'react'

import './App.css'

import Home from './components/Home';

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState('light')

  return (
    <div>
      <ThemeContext.Provider value={theme}>
         <Home />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
