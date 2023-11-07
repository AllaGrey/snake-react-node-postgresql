import axios from "axios";
import { BASE_URL } from '../constants/constants';

axios.defaults.baseURL = BASE_URL;

export const addNewGame = async () => {
    try {
        const { data } = await axios.post('/games');
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getCurrentGame = async () => {
    try {
        const { data } = await axios.get('/games/current');
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export const getScores = async () => {
    try {
        const response = await axios.get('/scores');
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const updateGame = async (newData) => {
    try {
        const { data } = await axios.patch('/games', newData);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}