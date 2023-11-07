import { Board } from "../../components/Board/Board"
import { ScoreBar } from "../../components/Score/ScoreBar"
import { GameContainer } from "./GamePage.styled"
import { addNewGame, getCurrentGame, updateGame } from "../../services/gameAPI"
import { useEffect, useState } from "react"


const GamePage = () => {

    const initialData = {
        snake: [
            { x: 15, y: 15 },
            { x: 15 + 1, y: 15 }
        ],
        food: { x: 10, y: 10 },
        score: 0,
        foodEatenCount: 0,
        level: 1,
        speed: 400
    }

    const testData = {
        id: 318,
        score: 1,
        level: 1,
        speed: 400,
    }

    const [start, setStart] = useState(false)
    const [pause, setPause] = useState(false)
    const [data, setData] = useState({initialData})

    // const snakeInitialPosition = [
    //     {x: 15, y: 15},
    //     {x: 15 + 1, y: 15}];
    // const foodInitialPosition = { x: 10, y: 10 };

    // const scoreStateInitial = {
    //     score: 0,
    //     foodEatenCount: 0,
    //     level: 1,
    //     speed: 400
    // }

    useEffect(() => {
        if (pause) {
            getCurrentGame().then(({currentGame}) => setData(currentGame))
        }
    }, [pause])


    const startGame = async() => {
        setStart(true)
        await addNewGame()
    }

    const pauseGame = () => {
        setStart(false)
        setPause(prev => !prev)
    }

    const updateCurrentGame = async (newData) => {
        const updatedData = await updateGame({...testData, status: 'finished'});
        console.log(updatedData);
        // setData(updatedData)
    }

    return (
        <GameContainer>
            <button onClick={() => startGame()}>Start new game</button>
            <button onClick={() => pauseGame()}>{pause ? 'Play' : 'Pause'}</button>
            <ScoreBar data={data} />
            {start && !pause ? <Board data={data.initialData} /> : pause ? null : <Board data={data.initialData} updateCurrentGame={updateCurrentGame} />}
        </GameContainer>
    )
}

export default GamePage