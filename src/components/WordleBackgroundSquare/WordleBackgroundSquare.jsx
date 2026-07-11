import {memo, useEffect, useRef, useState} from "react";
import './WordleBackgroundSquare.css'

const WordleBackgroundSquare = (props) => {
    const {
        square,
        setExitSquare,
    } = props

    const {
        rotationSpeed,
        brightness,
        bgColor,
        letter,
        speedX,
        speedY,
        spX,
        spY,
        id,
    } = square

    const x = useRef(0)
    const y = useRef(0)
    const squareRef = useRef(null)

    const changeCords = () => {
        if (y > window.innerHeight + 100) {
            setExitSquare(id)
        } else {
            x.current += speedX * 0.05
            y.current += speedY * 0.05
            squareRef.current.style.transform = `translate(${x.current}px, ${y.current}px)`
        }
        requestAnimationFrame(changeCords)
    }

    useEffect(() => {
        requestAnimationFrame(changeCords)

        return () => cancelAnimationFrame(changeCords)
    }, []);

    return (
        <div
            className='background__square-wrapper'
            ref={squareRef}
        >
            <div
                className='background__square'
                style={{
                    animation: `rotation ${rotationSpeed}s ease infinite`,
                    backgroundColor: bgColor,
                    filter: `brightness(${brightness})`,
                    left: `${spX}px`,
                    top: `${spY}px`,
                }}
            >
                {letter}
            </div>
        </div>

    )
}

export default memo(WordleBackgroundSquare);