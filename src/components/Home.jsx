import React, {useState, useContext} from 'react'
import "./Home.css"
import reactLogo from '/logos/react.svg'
import viteLogo from '/logos/vite.svg'
import {ThemeContext} from '../context/ThemeContext'


const Home = () => {
    const [count, setCount] = useState(0)

    const {theme, setTheme, changeTheme} = useContext(ThemeContext)
    

  return (
    <>
    <div id='home' className={theme}>
      
      <a href="https://vitejs.dev" target="_blank">
        <img src={viteLogo} className="logo" alt="Vite logo" />
      </a>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React</h1>  
    <button onClick={changeTheme}>Change Theme: {theme}</button>

  </>
  )
}

export default Home