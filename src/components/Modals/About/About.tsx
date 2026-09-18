import { useDispatch } from "react-redux";
import { showAbout } from "../../../redux/Modals";

function About() {

    const dispatch = useDispatch()
    const handleCloseDialog = () => { dispatch(showAbout(false)); }; 

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

export default About