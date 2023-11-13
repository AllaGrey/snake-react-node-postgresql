

export const BASE_URL = 'https://snake-backend-six.vercel.app/api/'

export const INITIAL_GAME_DATA = {
        snake: [
            { x: 15, y: 15 },
            { x: 15 + 1, y: 15 }
        ],
        food: { x: 10, y: 10 },
        score: 0,
        eaten_food: 0,
        level: 1,
        speed: 400,
        direction: "LEFT",
        status: 'in progress'
}
    
export const BOARD_SIZE = 20