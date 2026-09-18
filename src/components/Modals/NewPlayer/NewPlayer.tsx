import { useState } from "react";
import { useDispatch } from "react-redux";
import { showNewPlayer } from "../../../redux/Modals";
import { addPlayer } from "../../../redux/players";

function NewPlayer() {
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState(''); 
    
    const handleCloseDialog = () => { dispatch(showNewPlayer(false)); }; 
    const addNewPlayer = () => { 
        dispatch(addPlayer(inputValue));
        handleCloseDialog(); 
    };
    const handleChange = (e: any) => { setInputValue(e.target.value); };
    
    return (
        <div className="dialog"> 
            <div className="dialog-content"> 
                <h2>New Player</h2> 
                <input type="text" value={inputValue} onChange={handleChange} /> 
                <p>
                    <button onClick={handleCloseDialog}>Cancel</button>
                    <button onClick={addNewPlayer}>Add</button>
                </p>
            </div> 
        </div>
    )
}

export default NewPlayer