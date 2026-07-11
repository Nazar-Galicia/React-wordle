import './WordleBackground.css'
import WordleBackgroundSquare from "../WordleBackgroundSquare/WordleBackgroundSquare.jsx";
import {useWordleBackground} from "../../hooks/useWordleBackground.js";

const WordleBackground = () => {

    const {
        squares,
        setExitSquare,
    } = useWordleBackground();

    return (
        <div className='background'>
            {
                squares.map((square, i) => (
                    <WordleBackgroundSquare key={square.id || i} square={square} setExitSquare={setExitSquare}/>
                ))
            }
        </div>
    )
}

export default WordleBackground;