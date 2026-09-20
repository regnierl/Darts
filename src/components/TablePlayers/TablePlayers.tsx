import { useSelector } from 'react-redux'
import './TablePlayers.css'
import { Player } from '../../models/player'
import TablePlayer from '../TablePlayer/TablePlayer'

function TablePlayers() {
    const state: any = useSelector((state: any) => state.players)
    

    return (
        <>
        <div className='table-container'>
        { state.started && <div className='tour'>Tour n°{state.turns}</div> }
        <div className='row top margin-right'>
            { state.players.length > 0 &&
                <div className="column size bold border-bottom padding ">
                    <div className="empty-div border-bottom border-right width"></div>
                    { state.gameType === 'cricket' && (
                        <>
                            <div className='border-left border-right width black'>BULL</div>
                            <div className='border-left border-right width black'>20</div>
                            <div className='border-left border-right width black'>19</div>
                            <div className='border-left border-right width black'>18</div>
                            <div className='border-left border-right width black'>17</div>
                            <div className='border-left border-right width black'>16</div>
                            <div className='border-left border-right width black'>15</div>
                        </>
                    ) }
                    
                    <div className='border-left border-right width black'>POINTS</div>
                </div>
            }
            { state.players.map((player: Player) => <TablePlayer key={player.name} player={player} />) }
            
        </div>
        </div>
        </>
    )
}

export default TablePlayers