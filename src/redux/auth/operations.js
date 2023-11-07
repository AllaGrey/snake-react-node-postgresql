import { createAsyncThunk } from '@reduxjs/toolkit';
import {loginUser, registerUser, logoutUser, fetchUserByToken} from '../../services/authAPI';

export const login = createAsyncThunk(
    'auth/login',
    async (credentials, { rejectWithValue }) => {
        try {
        return await loginUser(credentials);
        } catch (error) {
        return rejectWithValue(error);
        }
    }
);

export const registration = createAsyncThunk(
    'auth/register',
    async (credentials, { rejectWithValue }) => {
        try {
        return await registerUser(credentials);
        } catch (error) {
        return rejectWithValue(error);
        }
    }
);

export const logout = createAsyncThunk(
    'auth/logout',
    async (_, { rejectWithValue }) => {
        try {
        return await logoutUser();
        } catch (error) {
        return rejectWithValue(error);
        }
    }
);

export const refreshUser = createAsyncThunk(
    'auth/refreshUser',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();

        const persistedToken = state.auth.token;

        if (persistedToken === null) {
        return thunkAPI.rejectWithValue('Unable to fetch user');
        }
        try {
        return fetchUserByToken(persistedToken);
        } catch (e) {
        return thunkAPI.rejectWithValue(e.response.data.message);
        }
    }
);
