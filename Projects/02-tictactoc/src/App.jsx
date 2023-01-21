import { useState } from 'react'
import conffety from 'canvas-confetti'
import './App.css'

const TURNS = {
    X: '❌',
    O: '🔘'
}

const WINNER_COMBOS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]

const Square = ({ children, isSelected, updateBoard, index }) => {
    
    const className = `square ${isSelected ? 'is-selected' : ''}`

    const handleClick = () => {
        updateBoard(index)
    }

    return (
        <div className={className} onClick={handleClick}>
            {children}
        </div>
    )
}

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null) /* null - no hay ganador, false - empate */
    
    const checkWinner = (boardToCheck) => {
        for (const combo of WINNER_COMBOS) {
            const [a, b, c] = combo 
            if (boardToCheck[a] && 
                boardToCheck[a] === boardToCheck[b] &&
                boardToCheck[a] === boardToCheck[c]) {
                    //the winner is
                     return boardToCheck[a]
                }
        }

        //si no hay ganador
        return null
    }

    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
    }

    const checkEndGame = (newBoard) => {
        return newBoard.every((square) => square !== null)
    }

    const updateBoard = (index) => {
      
        //no dejar sobreescribir si hay algo o si ya hay ganador
        if (board[index] || winner) return

        //actualizar el board (copiar el board de forma superficial, NO puedo cambiar el estado)
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

          //cambiar el turno
        const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
        setTurn(newTurn)

        //controlar quien gana
        const newWinner = checkWinner(newBoard)
        if (newWinner) {
            setWinner(newWinner) //Adi!! La ctualización del Estado es asincrona. No paraliza la ejecución
            //Aquí puede que el estado no esté actualizado, no puedo saber fijo que estado tiene "winner", puede que esté actualizado o no
            conffety()
            
            setWinner((previousWinner) => {
                //aquí se podría utilizar previousWinner para hacer alguna combinación del valor antiguo y del nuevo
              
                return newWinner;
            })
        } else if (checkEndGame(newBoard)) {
            setWinner(false) //Empate
        }
    }

    return (
        <main className='board'>
            <h1>Tic tac toe</h1>
            <section className='game'>
            {
                board.map((square, index) => {
                    return (
                        <Square
                            key={index}
                            index={index}
                            updateBoard={updateBoard}
                        >
                            {square}
                        </Square>
                    )
                })
            }
            </section>

            <section className='turn'>
                <Square isSelected={turn == TURNS.X}>
                    {TURNS.X}
                </Square>
                <Square isSelected={turn == TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>

            {
                winner !== null && (
                    <section className='winner'>
                        <div className='text'>
                            <h2>{ winner === false ? 'Berdinketa' : 'Irabazlea: ' }
                            </h2>
                            <header className='win'>
                                {winner && <Square>{winner}</Square>}
                            </header>
                            <footer>
                                <button onClick={resetGame}>Hasi berriro</button>
                            </footer>
                        </div>
                    </section>
                )
            }
        </main>
    )        
}

export default App