import './ModalWin.css'

const ModalWin = (props) => {
    const {
        gameState,
        newGame,
    } = props

    const {
        isWin,
        isLose,
        guessedWord,
    } = gameState

    return (
        <div className={`modal ${isWin || isLose ? 'modal--show' : ''}`}>
            <div className="modal__window">
                <h2 className="modal__title">
                    {isWin ? '🎉 You Won!' : '😢 Game Over'}
                </h2>

                <p className="modal__text">
                    {isWin ? 'Congratulations! You guessed the word.' : 'Better luck next time!'}
                </p>

                <div className={`modal__word ${isLose ? 'modal-word--lose' : ''}`}>
                    {guessedWord.toUpperCase()}
                </div>

                <button
                    onClick={newGame}
                    className="modal__button">
                    Play Again
                </button>
            </div>
        </div>
    )
}

export default ModalWin