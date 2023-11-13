import axios from "axios";
import { BASE_URL } from '../constants/constants';

axios.defaults.baseURL = BASE_URL;

export const addNewGame = async () => {
    try {
        const { data } = await axios.post('/games');
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getCurrentGame = async () => {
    try {
        const { data } = await axios.get('/games/current');
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getScores = async () => {
    try {
        const { data } = await axios.get('/games/scores');
        return { data };
    } catch (error) {
        console.log(error);
    }
}

export const updateGame = async (newData) => {
    try {
        const { data } = await axios.patch('/games', newData);
        return data;
    } catch (error) {
        console.log(error);
    }
}