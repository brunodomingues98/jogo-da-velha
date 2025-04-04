import {useState  } from 'react'
import Square from './Square'
import './Board.css'

function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null))
    const [isX, setIsX] = useState(true)

    function handleClick(index) {
        if (squares[index] || calculateWinner(squares)) return

        const newSquares = [...squares]
        newSquares[index] = isX ? 'X' : 'O'
        setSquares(newSquares)
        setIsX(!isX)
    }

    const winner = calculateWinner(squares)
    let status
    if (winner) {
        status = `Vencedor: ${winner}`
    } else if (!squares.includes(null)) {
        status = 'Empate!'
    } else {
        status = `Vez de: ${isX ? 'X' : 'O'}`
    }


    return (
        <>
            <div className="status">{status}</div>
            <div className="board">
                {squares.map((value, i) => (
                    <Square key={1} value={value} onClick={() => handleClick(i)} />
                ))}
            </div>
        </>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
        [0, 4, 8], [2, 4, 6] // diagonais
    ]

    for (let [a,b,c] of lines) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a]
        }
    }

    return null
}

export default Board
