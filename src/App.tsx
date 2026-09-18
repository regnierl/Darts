import './App.css'
import Target from './components/Target/Target'
import TablePlayers from './components/TablePlayers/TablePlayers'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


function App() {

  
  return (
    <>
      <div className='fixed-header'> 
        <Header /> 
        <div className='container row'> 
          <TablePlayers /> 
          <Target /> 
          
        </div> 
        <div className='fixed-footer'><Footer /> </div>
      </div>
    </>
  )
}

export default App
