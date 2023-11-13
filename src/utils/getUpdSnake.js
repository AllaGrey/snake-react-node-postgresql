import { gameOver } from "./gameOver";
import { renderNewFood } from "./renderNewFood";
import { BOARD_SIZE } from "../constants/constants";

export const getUpdSnake = (data) => {
    let updData = { ...data };

            if (updData.snake[0].x < 0 || updData.snake[0].x > BOARD_SIZE || updData.snake[0].y < 0 || updData.snake[0].y > BOARD_SIZE) {
                return updData = gameOver(updData)
            }

            const isEatItself = updData.snake.slice(1).some(item => updData.snake[0].x === item.x && updData.snake[0].y === item.y);

            if (isEatItself) return updData = gameOver(updData)

            switch (updData.direction) {
                case 'LEFT':
                    updData.snake.unshift({ x: updData.snake[0].x, y: updData.snake[0].y - 1 });
                    break;
                case 'RIGHT':
                    updData.snake.unshift({ x: updData.snake[0].x, y: updData.snake[0].y + 1 }); 
                    break;
                case 'UP':
                    updData.snake.unshift({ x: updData.snake[0].x - 1, y: updData.snake[0].y }); 
                    break;
                case 'DOWN':
                    updData.snake.unshift({ x: updData.snake[0].x + 1, y: updData.snake[0].y }); 
                    break;
            }

            const isFoodEaten = updData.snake[0].x === updData.food.x && updData.snake[0].y === updData.food.y;

            if (isFoodEaten) {
                updData = renderNewFood(data)

                if (updData.eaten_food < 1) {

                    updData = { ...updData, score: updData.score + 1, eaten_food: updData.eaten_food + 1 }

                } else if (updData.eaten_food === 1) {

                    updData = { ...updData, score: updData.score + 5, eaten_food: updData.eaten_food + 1 }
                } else if (updData.eaten_food >= 2) {

                    updData = { ...updData, score: updData.score + 10, eaten_food: updData.eaten_food + 1 }
                }

                if (updData.score >= 50 && updData.score % 50 === 6) {
                    updData = { ...updData, level: updData.level + 1, speed: updData.speed - 50 };
                }

            } else {
                updData.snake.pop();
            }
            return updData

        }