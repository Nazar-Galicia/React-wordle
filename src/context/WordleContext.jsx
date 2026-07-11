import {createContext, useMemo} from "react";
import {useWordle} from "../hooks/useWordle.js";

export const WordleContext = createContext({})

const WordleContextProvider = ({ children }) => {
    const {
        gameBoard,
        row,
        tile,
        gameState,
        newGame,
        isError,
        rowsRefs,
        keyboard,
        setKey,
    } = useWordle()

    const value = useMemo(() => {
        return {
            gameBoard,
            row,
            tile,
            gameState,
            newGame,
            isError,
            rowsRefs,
            keyboard,
            setKey,
        }
    }, [
        gameBoard,
        row,
        tile,
        gameState,
        newGame,
        isError,
        rowsRefs,
        keyboard,
        setKey,
    ])

    return (
        <WordleContext.Provider value={value}>
            {children}
        </WordleContext.Provider>
    )
}

export default WordleContextProvider