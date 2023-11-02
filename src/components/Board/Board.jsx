// import { BoardContainer, Cell } from "./Board.styled";
// import { useState, useEffect } from "react";


// export const Board = () => {

//     const boardSize = 20;
//     const snakeInitialPosition = [
//         {x: 15, y: 15},
//         {x: 15 + 1, y: 15}];
//     const foodInitialPosition = { x: 10, y: 10 };

//     const scoreStateInitial = {
//         score: 0,
//         foodEatenCount: 0,
//         level: 1,
//         speed: 400
//     }

//     const [snake, setSnake] = useState(snakeInitialPosition);
//     const [food, setFood] = useState(foodInitialPosition);
//     const [direction, setDirection] = useState('UP');
//     const [scoreState, setScoreState] = useState(scoreStateInitial);
//     // const [foodEatenCount, setFoodEatenCount] = useState(0);
//     // const [level, setLevel] = useState(1);

//     useEffect(() => {
//         const getUpdSnake = () => {

//             if (snake[0].x < 0 || snake[0].x > boardSize || snake[0].y < 0 || snake[0].y > boardSize) {
//                 return gameOver()
//             }

//             const isEatItself = snake.slice(1).some(item => snake[0].x === item.x && snake[0].y === item.y);

//             if (isEatItself) return gameOver();

//             let updSnake = [...snake];

//             switch (direction) {
//                 case 'LEFT':
//                     updSnake.unshift({ x: updSnake[0].x, y: updSnake[0].y - 1 });
//                     break;
//                 case 'RIGHT':
//                     updSnake.unshift({ x: updSnake[0].x, y: updSnake[0].y + 1 }); 
//                     break;
//                 case 'UP':
//                     updSnake.unshift({ x: updSnake[0].x - 1, y: updSnake[0].y }); 
//                     break;
//                 case 'DOWN':
//                     updSnake.unshift({ x: updSnake[0].x + 1, y: updSnake[0].y }); 
//                     break;
//             }

//             const isFoodEaten = snake[0].x === food.x && snake[0].y === food.y;

//             if (isFoodEaten) {
//                 renderNewFood()
//                 let newScoreState = scoreState;
//                 if (scoreState.foodEatenCount < 1) {
//                 //     setScore(prev => prev + 1)
//                 //     setFoodEatenCount(prev => prev + 1)
//                 //     if (score && score % 10 === 0) {
//                 //     setLevel(prev => prev + 1);
//                 //     console.log(score);
//                     // }
//                     newScoreState = {...newScoreState, score: newScoreState.score + 1, foodEatenCount: newScoreState.foodEatenCount + 1}
//                     // setScoreState(prev => ({...prev, score: prev.score + 1, foodEatenCount: prev.foodEatenCount + 1}))
//                 } else if (scoreState.foodEatenCount === 1) {
//                 //     setFoodEatenCount(prev => prev + 1);
//                 //     setScore(prev => prev + 5);
//                 //     if (score && score % 10 === 0) {
//                 //     setLevel(prev => prev + 1);
//                 //     console.log(score);
//                     // }
//                     newScoreState = {...newScoreState, score: newScoreState.score + 5, foodEatenCount: newScoreState.foodEatenCount + 1}
//                     // setScoreState(prev => ({...prev, score: prev.score + 5, foodEatenCount: prev.foodEatenCount + 1}))
//                 } else if (scoreState.foodEatenCount >= 2) {
//                 //     setFoodEatenCount(prev => prev + 1);
//                 //     setScore(prev => prev + 10);
//                 //     if (score && score % 10 === 0) {
//                 //     setLevel(prev => prev + 1);
//                 //     console.log(score);
//                     // }
//                     newScoreState = {...newScoreState, score: newScoreState.score + 10, foodEatenCount: newScoreState.foodEatenCount + 1}
//                     // setScoreState(prev => ({...prev, score: prev.score + 10, foodEatenCount: prev.foodEatenCount + 1}))
//                 }

//                 if (newScoreState.score >= 50 && scoreState.score % 50 === 6) {
//                     newScoreState = { ...newScoreState, level: scoreState.level + 1, speed: scoreState.speed - 50 };
//                 // setScoreState(prev => ({ ...newScoreState, level: prev.level + 1, speed: prev.speed - 50}))
//                 }
//                 console.log(newScoreState);
//                 // setScoreState(newScoreState)
//             } else {
//                 updSnake.pop();
//             }


            

//             // if (isFoodEaten) {
//             //     if (score > 0 && score % 10 === 0) {
//             //         setLevel(prev => prev + 1);
//             //         console.log(score);
//             //     }
//             // }
            

//             setSnake(updSnake);
//         }

//         const getMoveInterval = setInterval(getUpdSnake, scoreState.speed);

//         return () => {
//             clearInterval(getMoveInterval);
//         }
//     }, [direction, food.x, food.y, snake, scoreState])

    
//     useEffect(() => {
//         const updDirection = (e) => {
//             const code = e.code;

//             switch (code) {
//                 case 'ArrowLeft':
//                     setDirection('LEFT');
//                     break;
//                 case 'ArrowRight':
//                     setDirection('RIGHT');
//                     break;
//                 case 'ArrowUp':
//                     setDirection('UP'); 
//                     break;
//                 case 'ArrowDown':
//                     setDirection('DOWN'); 
//                     break;
//             }

//         }
//         document.addEventListener('keydown', updDirection);

//         return () => clearInterval(updDirection);
        
//     }, [direction, snake])
    
//     // const getCurrentSpeed = () => {

//     //     const SPEED_GRADE = {
//     //         1: 500,
//     //         2: 400,
//     //         3: 350,
//     //         4: 300,
//     //         5: 250
//     //     }

//     //     return SPEED_GRADE[level] || 500;
//     // }

//     const gameOver = () => {
//         setSnake(snakeInitialPosition);
//         setScoreState(scoreStateInitial);
//     }

//     const renderNewFood = () => {
//         const newFoodCoords = {
//             x: Math.floor(Math.random() * boardSize),
//             y: Math.floor(Math.random() * boardSize)
//         }

//         setFood(newFoodCoords);
//     }

//     const renderBoard = () => {

//         let cellArray = [];

//         for (let row = 0; row < boardSize; row++) {
//             for (let column = 0; column < boardSize; column++) {

//                 let cell;
//                 let special = "";
//                 const isFood = food.x === row && food.y === column;
//                 const isSnake = snake.some(item => item.x === row && item.y === column);
//                 const isSnakeHead = snake[0].x === row && snake[0].y === column;

//                 if (isFood) special = 'food';
//                 if (isSnake) special = 'snake';
//                 if (isSnakeHead) special = 'head';

//                 cell = <Cell key={`${column} - ${row}`} special={special} >{`${column} - ${row}`}</Cell>

//                 cellArray.push(cell)
//             }
//         }

//         return cellArray
//     }



//     return (
//         <>
//             <div>Score: {scoreState.score}</div>
//             <div>Level: {scoreState.level}</div>
//             <BoardContainer>
//                 {renderBoard()}
//         </BoardContainer>
//         </>
//     )
// }