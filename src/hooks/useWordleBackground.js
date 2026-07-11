import {nanoid} from "nanoid";
import {useEffect, useState} from "react";

export const useWordleBackground = () => {
    const createSquare = (firstSquares=false) => {
        const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const colors = ['orange', 'deepskyblue'];

        return {
            id: nanoid(),
            letter: letters[Math.floor(Math.random() * letters.length)],
            bgColor: colors[Math.floor(Math.random() * colors.length)],
            rotationSpeed: Math.floor(Math.random() * 25) + 10,
            speedX: (Math.random() - 0.5) * 2,
            speedY: Math.random() * 2 + 1.5,
            brightness: +(Math.random() * 0.8 + 0.5).toFixed(2),
            spX: Math.random() * window.innerWidth,
            spY: firstSquares ? Math.random() * window.innerHeight : -75,
        };
    }

    const [exitSquare, setExitSquare] = useState(null);
    const [squares, setSquares] = useState(Array.from({ length: 30 }, () => createSquare(true)));

    useEffect(() => {
        const timer = setInterval(() => {
            setSquares(prev => [...prev, createSquare()]);
        }, 1000)

        return () => clearInterval(timer)
    })

    useEffect(() => {
        setSquares(prev =>
            prev.filter(square => square.id !== exitSquare)
        )
    }, [exitSquare]);

    return {
        squares,
        setExitSquare,
    }
}