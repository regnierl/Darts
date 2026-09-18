import { useDispatch } from 'react-redux';
import './Header.css'
import { showAboutPopup, showNewGamePopup } from '../../redux/Modals';

function Header() {
    const dispatch = useDispatch()
    const handleNewGame = () => { dispatch(showNewGamePopup(true)) }; 
    const handleOpenAbout = () => { dispatch(showAboutPopup(true)) }; 
    return (
        <div className='header'>
            <button onClick={handleNewGame}>Nouvelle partie</button>
            <button className='right-btn' onClick={handleOpenAbout}>A propos</button>
        </div>
    )
}

export default Header