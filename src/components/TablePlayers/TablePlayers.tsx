import { useSelector } from 'react-redux'
import './TablePlayers.css'
import { Player } from '../../models/player'
import TablePlayer from '../TablePlayer/TablePlayer'

function TablePlayers() {
    const players: Player[] = useSelector((state: any) => state.players.players)
    const turns: number = useSelector((state: any) => state.players.turns)
    const started: boolean = useSelector((state: any) => state.players.started)
    
    

    return (
        <>
        <div className='table-container'>
        { started && <div className='tour'>Tour n°{turns}</div> }
        <div className='row top margin-right'>
            { players.length > 0 &&
                <div className="column size bold border-bottom padding ">
                    <div className="empty-div border-bottom border-right width"></div>
                    <div className='border-left border-right width black'>BULL</div>
                    <div className='border-left border-right width black'>20</div>
                    <div className='border-left border-right width black'>19</div>
                    <div className='border-left border-right width black'>18</div>
                    <div className='border-left border-right width black'>17</div>
                    <div className='border-left border-right width black'>16</div>
                    <div className='border-left border-right width black'>15</div>
                    <div className='border-left border-right width black'>POINTS</div>
                </div>
            }
            { players.map((player) => <TablePlayer key={player.name} player={player} />) }
            
        </div>
        </div>
        </>
    )
}

export default TablePlayers