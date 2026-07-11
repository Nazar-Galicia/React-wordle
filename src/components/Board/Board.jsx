import './Board.css'

const Board = (props) => {
    const {
        board,
        rowNum,
        tileNum,
        rowsRefs,
    } = props

    return (
        <div className='wordle__board'>
            {
                board.map((row, rowindex) => (
                    <div
                        ref={el => {rowsRefs.current[rowindex] = el}}
                        className='wordle__board-row'
                        key={rowindex}
                    >
                        {
                            row.map((tile, tileindex) => {
                                return (
                                    <div
                                        style={{
                                            animationDelay: `${tileindex * 200}ms`
                                        }}
                                        className={`
                                            wordle__board-tile 
                                            ${tileindex === tileNum && rowindex === rowNum ? 'wordle__board-tile--active' : ''}
                                            ${tile.state === 'correct' ? 'wordle__board-tile--correct' :
                                              tile.state === 'uncorrect' ? 'wordle__board-tile--present' : 
                                              tile.state === 'absent' ? 'wordle__board-tile--absent' : ''}
                                        `}
                                        key={tileindex}
                                    >
                                        {tile.letter}
                                    </div>
                                )
                            })
                        }
                    </div>
                ))
            }
        </div>
    )
}

export default Board;