import './TablePlayer.css'
import { Player } from '../../models/player'
import { useSelector } from 'react-redux';


interface TablePlayerProps {
    player: Player;
}

function TablePlayer( props: TablePlayerProps ) {
    const state = useSelector((state: any) => state.players)
    const selected: string = state.players[state.currentPlayer]?.name === props.player.name ? 'selected' : '';
    const getColor = (value: number) =>  {
        return value === 3 ? 'green width' : '';
    }
    return (
        <>
            <div className={selected}>
                <div className="column size width border-right border-top border-bottom">
                    <div className='bold border-bottom max-width hover-div black'>
                        {props.player.name}
                    </div>
                    { state.gameType === 'cricket' && (
                        <>
                            <div className={getColor(props.player[25])}>{props.player[25]}</div>
                            <div className={getColor(props.player[20])}>{props.player[20]}</div>
                            <div className={getColor(props.player[19])}>{props.player[19]}</div>
                            <div className={getColor(props.player[18])}>{props.player[18]}</div>
                            <div className={getColor(props.player[17])}>{props.player[17]}</div>
                            <div className={getColor(props.player[16])}>{props.player[16]}</div>
                            <div className={getColor(props.player[15])}>{props.player[15]}</div>
                        </>
                    ) }
                    <div className='border-top size width'>{props.player.points}</div>
                </div>
            </div>
        </>
    )
}

export default TablePlayer