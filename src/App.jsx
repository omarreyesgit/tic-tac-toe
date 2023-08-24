
import { useState } from 'react'
import './App.css'
const TURNS = {
  X: 'X',
  O: 'O'
}

const Square = ({ children, index, turnActive, updateGame }) => {
  const className = `square ${turnActive ? 'player-active' : ''}`
  const handleClick = (index) => {
    updateGame(index)
  }
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  )
}
function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [playerTURN, setPlayerTURN] = useState(TURNS.X);
  const [turnActive, setTurnActive] = useState();

  const updateGame = (index) => {
    console.log(index);
  }
  return (
    <main>
      <h1>tic tac toe</h1>
      <section className="board">
        {board.map((_, index) => {
          return (
            <Square key={index} updateGame={updateGame}  >

            </Square>
          )
        })}
      </section>
      <section>
        <h2>Player turn</h2>
        <div className="turn-contanier">

          <Square turnActive={playerTURN === TURNS.X}>{TURNS.X}</Square>
          <Square turnActive={playerTURN === TURNS.O}>{TURNS.O}</Square>
        </div>
      </section>
    </main>
  )
}

export default App
