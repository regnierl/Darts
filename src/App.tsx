import { useState } from 'react'
import './App.css'
import Target from './components/Target/Target'
import TablePlayers from './components/TablePlayers/TablePlayers'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Modals from './components/Modals/Modals'


function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darts-theme')
    return savedTheme ? savedTheme === 'dark' : true
  })

  const toggleTheme = () => {
    setIsDarkMode(currentIsDarkMode => {
      const nextIsDarkMode = !currentIsDarkMode
      localStorage.setItem('darts-theme', nextIsDarkMode ? 'dark' : 'light')
      return nextIsDarkMode
    })
  }

  return (
    <div className={isDarkMode ? 'app theme-dark' : 'app theme-light'}>
      <div className='fixed-header'> 
        <Header isDarkMode={isDarkMode} onToggleTheme={toggleTheme} /> 
        <div className='container row'> 
          <TablePlayers /> 
          <Target /> 
          
        </div> 
        <div className='fixed-footer'><Footer /> </div>
      </div>
      <Modals />
    </div>
  )
}

export default App
