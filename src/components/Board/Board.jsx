import { addNewGame, updateGame } from "../../services/gameAPI";
import { BoardContainer, Button, GameStatus, GameInfo } from "./Board.styled";
import { useState, useEffect } from "react";
import { updDirection } from "../../utils/updateDirection";
import { renderBoard } from "../../utils/renderBoard";
import { getUpdSnake } from "../../utils/getUpdSnake";
import PropTypes from 'prop-types';

export const Board = ({start, pause, pauseGame, toggleStart}) => {

    const [data, setData] = useState()

    useEffect(() => {
        if (start) addNewGame().then(newGame => {
            toggleStart()
            setData(newGame)
        })
    }, [start, toggleStart])

    useEffect(() => {
        let moveInterval;

        if (data && !pause && data.status !== 'finished') {
            moveInterval = setInterval(() => {
                const newData = getUpdSnake(data)

                if (newData.status === 'finished') {
                    updateGame(newData).then(newData => setData(newData))
                    toggleStart()
                } else {
                setData(newData)
                }
                
            }, data.speed);
            
        }

        return () => {
            if (data && !pause && data.status === 'in progress') {
                clearInterval(moveInterval);
            }

        }
    }, [data, pause, toggleStart])

    useEffect(() => {
        const handleKeyDown = (e) => {
            const newData = updDirection(e, data);
            setData(newData);
        }

        if (data && !pause && data.status !== 'finished') {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            if (data && !pause && data.status !== 'finished') {
                document.removeEventListener('keydown', handleKeyDown);
            }
        }
    }, [data, pause]);    

    const handleUpdate = async () => {
        pauseGame()
        const newData = await updateGame(data)
        setData(newData)
    }

    return (
        <>
            <GameInfo>
                {data && <div>
                    <p>Score: {data.score}</p>
                    <p>Level: {data.level}</p>
                </div>}
                {data && data.status !== 'finished' && <Button onClick={handleUpdate}>{pause ? 'Play' : 'Pause'}</Button>}
            </GameInfo>
            {<BoardContainer >
                {data && data.status !== 'finished' && !pause && renderBoard(data)}
                {data && pause && <GameStatus>Pause</GameStatus>}
                {data && data.status === 'finished' && <GameStatus>Game Over</GameStatus>}
            </BoardContainer>}
        </>
    )
}

Board.propTypes = {
    start: PropTypes.bool.isRequired,
    pause: PropTypes.bool.isRequired,
    pauseGame: PropTypes.func.isRequired,
    toggleStart: PropTypes.func.isRequired
}