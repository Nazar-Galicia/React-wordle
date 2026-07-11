import {useEffect, useRef, useState} from "react";
import {randomWordAPI} from "../api/randomWordAPI.js";
import {dictionaryAPI} from "../api/dictionaryAPI.js";
import {choseWord} from "./choseWord.js";
import toast from "react-hot-toast";
import {useWordleKeyboard} from "./useWordleKeyboard.js";

export const useWordle = () => {
    const [gameBoard, setGameBoard] = useState([
        [
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
        ],
        [
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
        ],
        [
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
        ],
        [
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
        ],
        [
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
        ],
        [
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
            {letter: '', state: 'empty'},
        ],
    ])

    const [keyboard, setKeyboard] = useState([
        [
            { key: 'Q', state: 'unused' },
            { key: 'W', state: 'unused' },
            { key: 'E', state: 'unused' },
            { key: 'R', state: 'unused' },
            { key: 'T', state: 'unused' },
            { key: 'Y', state: 'unused' },
            { key: 'U', state: 'unused' },
            { key: 'I', state: 'unused' },
            { key: 'O', state: 'unused' },
            { key: 'P', state: 'unused' },
        ],
        [
            { key: 'A', state: 'unused' },
            { key: 'S', state: 'unused' },
            { key: 'D', state: 'unused' },
            { key: 'F', state: 'unused' },
            { key: 'G', state: 'unused' },
            { key: 'H', state: 'unused' },
            { key: 'J', state: 'unused' },
            { key: 'K', state: 'unused' },
            { key: 'L', state: 'unused' },
        ],
        [
            { key: 'BACKSPACE', state: 'unused' },
            { key: 'Z', state: 'unused' },
            { key: 'X', state: 'unused' },
            { key: 'C', state: 'unused' },
            { key: 'V', state: 'unused' },
            { key: 'B', state: 'unused' },
            { key: 'N', state: 'unused' },
            { key: 'M', state: 'unused' },
            { key: 'ENTER', state: 'unused' },
        ],
    ]);

    const [row, setRow] = useState(0)
    const [tile, setTile] = useState(0)
    const [isError, setIsError] = useState(false)
    const rowsRefs = useRef([])
    const [key, setKey] = useState('')

    const [gameState, setGameState] = useState({
        isWin: false,
        isLose: false,
        guessedWord: '',
    })

    const [chosenWord, setChosenWord] = useState()

    useEffect(() => {
        choseWord().then(wordResut => {
            setChosenWord(wordResut.toUpperCase())
        });
    }, []);

    const newGame = () => {
        setRow(0)
        setTile(0)
        setGameState({
            isWin: false,
            isLose: false,
            guessedWord: '',
        })
        choseWord().then(word => setChosenWord(word.toUpperCase()));
        setGameBoard([
            [
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
            ],
            [
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
            ],
            [
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
            ],
            [
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
            ],
            [
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
            ],
            [
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
                {letter: '', state: 'empty'},
            ],
        ])
        setKeyboard([
            [
                { key: 'Q', state: 'unused' },
                { key: 'W', state: 'unused' },
                { key: 'E', state: 'unused' },
                { key: 'R', state: 'unused' },
                { key: 'T', state: 'unused' },
                { key: 'Y', state: 'unused' },
                { key: 'U', state: 'unused' },
                { key: 'I', state: 'unused' },
                { key: 'O', state: 'unused' },
                { key: 'P', state: 'unused' },
            ],
            [
                { key: 'A', state: 'unused' },
                { key: 'S', state: 'unused' },
                { key: 'D', state: 'unused' },
                { key: 'F', state: 'unused' },
                { key: 'G', state: 'unused' },
                { key: 'H', state: 'unused' },
                { key: 'J', state: 'unused' },
                { key: 'K', state: 'unused' },
                { key: 'L', state: 'unused' },
            ],
            [
                { key: 'BACKSPACE', state: 'unused' },
                { key: 'Z', state: 'unused' },
                { key: 'X', state: 'unused' },
                { key: 'C', state: 'unused' },
                { key: 'V', state: 'unused' },
                { key: 'B', state: 'unused' },
                { key: 'N', state: 'unused' },
                { key: 'M', state: 'unused' },
                { key: 'ENTER', state: 'unused' },
            ],
        ])
        document.activeElement.blur()
    }

    const checkWin = (word) => {
        for(let i = 0; i < word.length; i++) {
            if (word[i].state !== 'correct') {
                setGameState({
                    isWin: false,
                    isLose: false,
                    guessedWord: '',
                })
                if (row === 5) {
                    setGameState({
                        isWin: false,
                        isLose: true,
                        guessedWord: chosenWord,
                    })
                }
                return
            }
        }

        setGameState({
            isWin: true,
            isLose: false,
            guessedWord: word.map(letter => letter.letter).join(''),
        })
    }

    const chekWord = (word) => {
        let chosenWordCopy = Array.from(chosenWord)
        let keyboardCopy = structuredClone(keyboard)
        for(let i = 0; i < word.length; i++) {
            if (word[i].letter === chosenWordCopy[i]) {
                word[i].state = 'correct'
                keyboardCopy.map((keyRow) => {
                    keyRow.map(key => {
                        if (key.key === word[i].letter) {
                            key.state = 'correct'
                        }
                    })
                })
                chosenWordCopy[i] = ''
            }
        }
        const unusedWordLetters = word.filter(letter => letter.state === 'unused')
        for (let j = 0; j < unusedWordLetters.length; j++) {
            if (chosenWordCopy.includes(unusedWordLetters[j].letter)) {
                word[word.indexOf(unusedWordLetters[j])].state = 'uncorrect'
                chosenWordCopy.splice(chosenWordCopy.indexOf(unusedWordLetters[j].letter), 1)
                keyboardCopy.map((keyRow) => {
                    keyRow.map(key => {
                        if (key.key === word[word.indexOf(unusedWordLetters[j])].letter && key.state !== 'correct') {
                            key.state = 'uncorrect'
                        }
                    })
                })
            } else {
                word[word.indexOf(unusedWordLetters[j])].state = 'absent'
                keyboardCopy.map((keyRow) => {
                    keyRow.map(key => {
                        if (key.key === word[word.indexOf(unusedWordLetters[j])].letter &&
                            key.state !== 'uncorrect' && key.state !== 'correct') {
                            key.state = 'absent'
                        }
                    })
                })
            }
        }

        const gameBoardCopy = structuredClone(gameBoard)

        gameBoardCopy[row] = word

        setKeyboard(keyboardCopy)

        return gameBoardCopy
    }

    const enterLetter = (event) => {
        setKey(event.key.toUpperCase())
    }

    useEffect(() => {
        const boardCopy = structuredClone(gameBoard)

        if (/^[a-zA-Z]$/.test(key) && tile < 5) {
            setTile(prev => prev + 1)
            boardCopy[row][tile].letter = key;
            boardCopy[row][tile].state = 'unused';
            setGameBoard(boardCopy);
        }
        if (key === 'BACKSPACE' && tile !== 0) {
            setTile(prev => prev - 1)
            boardCopy[row][tile - 1].letter = '';
            boardCopy[row][tile - 1].state = 'empty';
            setGameBoard(boardCopy);
        }
        if (key === 'ENTER' && tile === 5) {
            let wordString = gameBoard[row].map(letter => letter.letter).join('')

            dictionaryAPI.searchWord(wordString).then(result => {
                const checkedBoard = chekWord(gameBoard[row])
                setGameBoard(checkedBoard)
                checkWin(checkedBoard[row])
                setRow(prev => prev + 1)
                setTile(0)
            })
                .catch(err => {
                    toast.error('Word is not found')

                    rowsRefs.current[row].classList.add('wordle__board-row--animation')

                    setTimeout(() => {
                        rowsRefs.current[row].classList.remove('wordle__board-row--animation')
                    }, 500)
                })
        }
        setKey('')
    }, [key]);

    useEffect(() => {
        document.addEventListener('keydown', enterLetter);

        return () => document.removeEventListener('keydown', enterLetter);
    }, [])

    return {
        gameBoard,
        row,
        tile,
        gameState,
        newGame,
        isError,
        rowsRefs,
        setKey,
        keyboard,
    }
}