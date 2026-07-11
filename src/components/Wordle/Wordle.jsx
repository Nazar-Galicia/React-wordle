import './Wordle.css'
import Board from "../Board/Board.jsx";
import ModalWin from "../ModalWin/ModalWin.jsx";
import WordleBackground from "../WordleBackground/WordleBackground.jsx";
import Keyboard from "../Keyboard/Keyboard.jsx";
import {useContext} from "react";
import {WordleContext} from "../../context/WordleContext.jsx";

const Wordle = () => {

    const {
        gameBoard,
        row,
        tile,
        gameState,
        newGame,
        isError,
        rowsRefs,
    } = useContext(WordleContext)

    return (
        <div
            className='wordle'
        >
            <WordleBackground />
            <ModalWin gameState={gameState} newGame={newGame}/>
            <h1 className='wordle__title'>Word<span>Le</span></h1>
            <Board
                isError={isError}
                board={gameBoard}
                rowNum={row}
                tileNum={tile}
                rowsRefs={rowsRefs}
            />
            <Keyboard />
        </div>
    )
}

export default Wordle