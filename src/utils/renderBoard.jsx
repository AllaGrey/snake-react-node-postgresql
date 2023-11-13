import { BOARD_SIZE } from "../constants/constants"; 
import { Cell } from "../components/Board/Board.styled";   

export const renderBoard = (data) => {

        const { snake, food } = data;

        let cellArray = [];

        for (let row = 0; row < BOARD_SIZE; row++) {
            for (let column = 0; column < BOARD_SIZE; column++) {

                let cell;
                let special = "";
                const isFood = food.x === row && food.y === column;
                const isSnake = snake.some(item => item.x === row && item.y === column);
                const isSnakeHead = snake[0].x === row && snake[0].y === column;

                if (isFood) special = 'food';
                if (isSnake) special = 'snake';
                if (isSnakeHead) special = 'head';

                cell = <Cell key={`${column} - ${row}`} special={special} />

                cellArray.push(cell)
            }
        }

        return cellArray
    }