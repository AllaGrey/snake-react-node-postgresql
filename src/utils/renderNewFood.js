import { BOARD_SIZE } from "../constants/constants"   
    
export const renderNewFood = (data) => {
        const newFoodCoords = {
            x: Math.floor(Math.random() * BOARD_SIZE),
            y: Math.floor(Math.random() * BOARD_SIZE)
        }

        return {...data, food: newFoodCoords}
    }