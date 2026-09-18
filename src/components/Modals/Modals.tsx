import { useSelector } from "react-redux"
import NewGamePopup from "./NewGame/NewGame"
import AboutPopup from "./About/About"

function Modals() {
    
    const modals = useSelector((state: any) => state.modals)
    return (
        <>
            {modals.startNewGame && <NewGamePopup />}
            {modals.showAbout && <AboutPopup />}
        </>
       
    )
}

export default Modals