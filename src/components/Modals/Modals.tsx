import { useSelector } from "react-redux"
import NewPlayer from "./NewPlayer/NewPlayer"
import About from "./About/About"

function Modals() {
    
    const modals = useSelector((state: any) => state.modals)
    return (
        <>
            {modals.showNewPlayer && <NewPlayer />}
            {modals.showAbout && <About />}
        </>
       
    )
}

export default Modals