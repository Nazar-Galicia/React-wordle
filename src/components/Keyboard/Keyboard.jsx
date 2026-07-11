import {useWordleKeyboard} from "../../hooks/useWordleKeyboard.js";
import './Keyboard.css'
import KeyboardKey from "../KeyboardKey/KeyboardKey.jsx";
import {useContext} from "react";
import {WordleContext} from "../../context/WordleContext.jsx";

const Keyboard = () => {
    const {
        keyboard
    } = useContext(WordleContext);

    return (
        <div className='keyboard'>
            {
                keyboard.map((keyRow, index) => {
                    return (
                        <div key={index} className='keyboard__row'>
                            {
                                keyRow.map((key) => {
                                    return (
                                        <KeyboardKey keyName={key.key} keyState={key.state}/>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Keyboard;