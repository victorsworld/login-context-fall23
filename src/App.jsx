import { useState } from 'react'
import './App.css'

import Home from './components/Home';
import Login from './components/Login/Login';

import { ThemeContext } from "./context/ThemeContext";

function App() {
  const [theme, setTheme] = useState('light')

  const changeTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <div>
      <ThemeContext.Provider value={
        {theme, setTheme, changeTheme}
        }>
         <Home />
         <Login />
      </ThemeContext.Provider>
    </div>
  )
}

export default App
