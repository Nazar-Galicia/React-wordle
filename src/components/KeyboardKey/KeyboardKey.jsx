import {useContext} from "react";
import {WordleContext} from "../../context/WordleContext.jsx";
import './KeyboardKey.css'

const KeyboardKey = (props) => {
    const {
        keyName,
        keyState,
    } = props

    const {
        setKey,
    } = useContext(WordleContext)

    return (
        <div
            onClick={() => setKey(keyName)}
            className={`keyboard__key ${keyState === 'correct' ? 'keyboard__key--correct' :
             keyState === 'uncorrect' ? 'keyboard__key--present' : 
             keyState === 'absent' ? 'keyboard__key--absent' : ''}`}
        >
            {keyName}
        </div>
    )
}

export default KeyboardKey