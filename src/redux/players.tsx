import { createSlice } from "@reduxjs/toolkit";
import { Player } from "../models/player";
import { Launch } from "../models/launch";

const initialState: {
    players: Player[],
    currentPlayer : number,
    started: boolean,
    currentLaunch: Launch[],
    nbLaunch: number;
    turns: number;
} = {
    players: [],
    currentPlayer: -1,
    started: false,
    currentLaunch: [],
    nbLaunch: 0,
    turns: 0
}

const playersSlice = createSlice({
    name: "players",
    initialState: initialState,
    reducers: {
        startNewGame: (state, action) => {
            console.log("startNewGame", action.payload)
            state.players = []
            for (let player of action.payload) {
                state.players.push({
                name: player,
                25: 0,
                20: 0,
                19: 0,
                18: 0,
                17: 0,
                16: 0,
                15: 0,
                points: 0
            })
            }
            state.started = true;
            state.currentPlayer = 0;
            state.turns = 1;
        },
        deletePlayer: (state, action) => {
            state.players = state.players.filter((player) => player.name != action.payload);
            return state;
        },
        setCurrentPlayer: (state, action) => {
            state.currentPlayer = action.payload;
            return state;
        },
        validateLaunch: (state) => {
            // Calculate launch
            const player = state.players[state.currentPlayer];
            state.currentLaunch.map((launch : Launch) => {
                if (launch.multiplicator !== 0) {
                    switch (launch.value) {
                        case 25:
                        case 20:
                        case 19:
                        case 18:
                        case 17:
                        case 16:
                        case 15:
                            player[launch.value] += launch.multiplicator;
                            if (player[launch.value] > 3) {
                                // Add points to others players
                                state.players.map(p => {
                                    if (p.name !== player.name) {
                                        switch (launch.value) {
                                            case 25:
                                            case 20:
                                            case 19:
                                            case 18:
                                            case 17:
                                            case 16:
                                            case 15:
                                                if (p[launch.value] < 3) {
                                                    p.points += (player[launch.value] - 3) * launch.value;
                                                }
                                        }
                                    }
                                })
                                player[launch.value] = 3;
                            }
                            break;
                    }
                }
            })
            // END Calculate launch


            state.currentPlayer += 1;
            if (state.currentPlayer === state.players.length) {
                state.currentPlayer = 0;
                state.turns += 1;
            }
            state.nbLaunch = 0;
            state.currentLaunch = [];
            return state;
        },
        addCurrentLaunch: (state, action) => {
            state.nbLaunch += 1;
            action.payload.id = state.nbLaunch
            state.currentLaunch.push(action.payload);
            return state;
        },
        deleteLaunch: (state, action) => {
            state.currentLaunch = state.currentLaunch.filter(launch => launch.id != action.payload)
            return state;
        },
    }
}) 

export default playersSlice

export const { deletePlayer, setCurrentPlayer, startNewGame, validateLaunch, addCurrentLaunch, deleteLaunch } = playersSlice.actions;