import { useState } from "react";
import { useDispatch } from "react-redux";
import { showNewGamePopup } from "../../../redux/Modals";
import { startNewGame } from "../../../redux/players";
import "./NewPlayer.css";

function NewGamePopup() {
    const dispatch = useDispatch()
    const [playerNames, setPlayerNames] = useState(['']); 
    const [gameType, setGameType] = useState('cricket');
    
    const handleCloseDialog = () => { dispatch(showNewGamePopup(false)); }; 
    const addNewPlayer = () => {
        if (playerNames.length < 5) {
            setPlayerNames([...playerNames, '']);
        }
    };
    const removePlayer = (index: number) => {
        setPlayerNames(playerNames.filter((_, playerIndex) => playerIndex !== index));
    };
    const addPlayersAndClose = () => {
        const names = playerNames.map(name => name.trim());
        const hasInvalidName = names.some(name => name.length === 0);
        const hasDuplicateName = new Set(names).size !== names.length;

        if (hasInvalidName || hasDuplicateName) {
            return;
        }

        dispatch(startNewGame({ gameType: gameType, playerNames: names }));
        handleCloseDialog(); 
    };
    const handleChange = (index: number, value: string) => {
        setPlayerNames(playerNames.map((name, playerIndex) =>
            playerIndex === index ? value : name
        ));
    };
    
    return (
        <div className="dialog"> 
            <div className="dialog-content"> 
                <h2>Nouvelle partie</h2>
                <select value={gameType} onChange={event => setGameType(event.target.value)}>
                    <option value="cricket">Cricket</option>
                    <option value="501">501</option>
                    <option value="301">301</option>
                </select>
                {playerNames.map((name, index) => (
                    <div className="new-player-row" key={index}>
                        <label htmlFor={`player-${index}`}>Joueur {index + 1}</label>
                        <input
                            id={`player-${index}`}
                            type="text"
                            value={name}
                            onChange={event => handleChange(index, event.target.value)}
                            maxLength={30}
                            autoFocus={index === playerNames.length - 1}
                        />
                        {playerNames.length > 1 && (
                            <button type="button" onClick={() => removePlayer(index)}>X</button>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addNewPlayer}
                    disabled={playerNames.length === 5}
                >
                    Ajouter un joueur ({playerNames.length}/5)
                </button>
                <p>
                    <button onClick={handleCloseDialog}>Annuler</button>
                    <button onClick={addPlayersAndClose}>Commencer la partie</button>
                </p>
            </div> 
        </div>
    )
}

export default NewGamePopup