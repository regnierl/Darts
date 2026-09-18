import { useDispatch, useSelector } from 'react-redux';
import './Header.css'
import { showAbout, showNewPlayer } from '../../redux/Modals';
import { start, init } from '../../redux/players';
import { Player } from '../../models/player';

function Header() {
    const dispatch = useDispatch()
    const players: Player[] = useSelector((state: any) => state.players.players)
    const started: Player[] = useSelector((state: any) => state.players.started)
    const handleOpenNewPlayer = () => { dispatch(showNewPlayer(true)) }; 
    const handleOpenAbout = () => { dispatch(showAbout(true)) }; 
    const handleStart = () => { 
        started ? dispatch(init()) : dispatch(start()) };
    const getLabelStart = () => {
        return started ? "Arreter partie" : "Démarrer partie";
    }
    return (
        <div className='header'>
            <button onClick={handleOpenNewPlayer}>Ajouter joueur</button>
            {players.length > 0 && <button className='button-header' onClick={handleStart}>{getLabelStart()}</button> }
            <button className='right-btn' onClick={handleOpenAbout}>A propos</button>
        </div>
    )
}

export default Header