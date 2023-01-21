import { useState } from 'react'
import conffety from 'canvas-confetti'
import './App.css'
import { Square } from './components/Square'
import { TURNS } from './logic/constants'
import { checkWinner, checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'

function App() {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(TURNS.X)
    const [winner, setWinner] = useState(null) /* null - no hay ganador, false - empate */
    
    const resetGame = () => {
        setBoard(Array(9).fill(null))
        setTurn(TURNS.X)
        setWinner(null)
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

    var today = new Date();
    return (
        <main className='board'>
            <span className='time'>{today.toLocaleString()}</span>
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

            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    )        
}

export default App