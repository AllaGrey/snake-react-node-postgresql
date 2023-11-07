import { addNewGame } from "../../services/gameAPI";
import { BoardContainer, Cell } from "./Board.styled";
import { useState, useEffect } from "react";

const boardSize = 20;

export const Board = ({data, updateCurrentGame}) => {

    const { snake, food } = data;
    // const [snake, setSnake] = useState(snakeInitialPosition);
    // const [food, setFood] = useState(foodInitialPosition);
    // const [direction, setDirection] = useState('UP');
    // const [scoreState, setScoreState] = useState(scoreStateInitial);
    


    const renderBoard = () => {

        let cellArray = [];

        for (let row = 0; row < boardSize; row++) {
            for (let column = 0; column < boardSize; column++) {

                let cell;
                let special = "";
                const isFood = food.x === row && food.y === column;
                const isSnake = snake.some(item => item.x === row && item.y === column);
                const isSnakeHead = snake[0].x === row && snake[0].y === column;

                if (isFood) special = 'food';
                if (isSnake) special = 'snake';
                if (isSnakeHead) special = 'head';

                cell = <Cell key={`${column} - ${row}`} special={special} >{`${column} - ${row}`}</Cell>

                cellArray.push(cell)
            }
        }

        return cellArray
    }

    const gameOver = async () => {
        const finishGame = await updateCurrentGame({ ...data, status: 'finished' })
        console.log(finishGame);
    }

    return (
        <>
            {<BoardContainer>
                {renderBoard()}
            </BoardContainer>}
            <button onClick={()=>gameOver()}>game over</button>
        </>
    )
}