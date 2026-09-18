import { useDispatch, useSelector } from "react-redux"
import "./Footer.css"
import { deleteLaunch, validateLaunch } from "../../redux/players"
import { Launch } from "../../models/launch";

function Footer() {
    const players = useSelector((state: any) => state.players)
    const dispatch = useDispatch();
    const handleValidate = () => {
        dispatch(validateLaunch());
    }
    const handleDelete = (launch: Launch) => {
        dispatch(deleteLaunch(launch.id));
    }

    const getLabelMultiplicator = (multiplicator: number) => {
        switch(multiplicator) {
            case 1:
                return '';
            case 2:
                return 'DOUBLE';
            case 3:
                return 'TRIPLE'
    
        }
    }

    const getLabelValue = (launch: Launch) => {
            if (launch.multiplicator === 0) return 0;
            return launch.value === 25 ? 'BULL' : launch.value
    }

    return (
        <div className="footer">
            {
                players.currentLaunch.map((launch: Launch) => {
                    return <button className='button-footer' onClick={() => handleDelete(launch)}>{getLabelMultiplicator(launch.multiplicator)} {getLabelValue(launch)}</button>
                })
            }
            { players.currentLaunch.length > 0 && <button className='button-footer' onClick={handleValidate}>Valider</button> }
        </div>
    )
}

export default Footer