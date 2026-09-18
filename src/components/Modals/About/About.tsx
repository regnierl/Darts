import { useDispatch } from "react-redux";
import { showAboutPopup } from "../../../redux/Modals";

function AboutPopup() {

    const dispatch = useDispatch()
    const handleCloseDialog = () => { dispatch(showAboutPopup(false)); }; 

    return (
        <>
            <div className="dialog"> 
                <div className="dialog-content"> 
                    <h2>Cricket v1.0</h2>
                    <h2>2024 - Laurent Régnier</h2>
                    <button onClick={handleCloseDialog}>Fermer</button>
                </div>
            </div>
        </>
    )
}

export default AboutPopup