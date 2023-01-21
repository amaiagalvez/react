import { useState } from 'react'
import conffety from 'canvas-confetti'
import './App.css'
import { Square } from './components/Square'
import { TURNS, INITIAL_BOARD, INITIAL_TURN, INITIAL_WINNER } from './logic/constants'
import { checkWinner, checkEndGame, checkNewTurn } from './logic/board'
import { cleanGameStorage, saveGameToStorage } from './logic/storage'
import { WinnerModal } from './components/WinnerModal'
import { Turn } from './components/Turn'
import { Game } from './components/Game'

function App() {
    const [board, setBoard] = useState(() => {
        const boardFromStorage = window.localStorage.getItem('board')
        return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
    })

    const [turn, setTurn] = useState(() => {
        const turnFromStorage = window.localStorage.getItem('turn')
        return turnFromStorage ?? INITIAL_TURN
    })

    const [winner, setWinner] = useState(INITIAL_WINNER) /* null - no hay ganador, false - empate */
    
    const resetGame = () => {
        setBoard(INITIAL_BOARD)
        setTurn(INITIAL_TURN)
        setWinner(INITIAL_WINNER)

        cleanGameStorage()
    }

    const updateBoard = (index) => {
      
        //no dejar sobreescribir si hay algo o si ya hay ganador
        if (board[index] || winner) return

        //actualizar el board (copiar el board de forma superficial, NO puedo cambiar el estado)
        const newBoard = [...board]
        newBoard[index] = turn
        setBoard(newBoard)

        //cambiar el turno
        const newTurn = checkNewTurn(turn)
        setTurn(newTurn)

        //guardar partida 
        saveGameToStorage({board: newBoard, turn: newTurn})
        
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
            < Game board={board} updateBoard={updateBoard} />

            <Turn turn={turn} />

            <WinnerModal winner={winner} resetGame={resetGame} />
        </main>
    )        
}

export default App