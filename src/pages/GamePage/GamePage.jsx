import { Board } from "../../components/Board/Board"
import { ScoreBar } from "../../components/Score/ScoreBar"
import { GameContainer } from "./GamePage.styled"
import { getScores } from "../../services/gameAPI"
import { useEffect, useState } from "react"
import { Button } from "./GamePage.styled"

const GamePage = () => {

    const [start, setStart] = useState(false)
    const [pause, setPause] = useState(false)
    const [scoresData, setScoresData] = useState(null)

    useEffect(() => {
        if(!start)getScores().then(scores => setScoresData(scores))
    },[start])

    const startGame = () => {
        setStart(true)
    }

    const pauseGame = () => {
        setPause(prev => !prev)
    }

    const toggleStart = () => {
        setStart(false)
    }

    return (
        <GameContainer>
            {scoresData && <ScoreBar scoresData={scoresData} />}
            {<Button onClick={() => startGame()}>Start new game</Button>}
            {<Board start={start} pauseGame={pauseGame} pause={pause} toggleStart={toggleStart} /> }
            
        </GameContainer>
    )
}

export default GamePage