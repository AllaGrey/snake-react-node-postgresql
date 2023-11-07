import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { refreshUser, login, logout, registration } from './operations';

const initialState = {
    user: { name: null, email: null, balance: null },
    token: null,
    isVerified: false,
    isLoggedIn: false,
    isRefreshing: false,
    error: null,
};
const handleFulfilled = (state, action) => {
    state.user = action.payload.user;
    state.token = action.payload.token;
    state.isLoggedIn = true;
    state.isRefreshing = false;
    state.error = null;
};

const handlePending = (state) => {
    state.isRefreshing = true;
    state.isLoggedIn = false;
    state.error = null;
};

const handleRejected = (state, action) => {
    state.isRefreshing = false;
    state.error = action.payload;
    state.isLoggedIn = false;
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(logout.fulfilled, () => initialState)
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;
            state.isRefreshing = false;
            state.error = null;
        })
        .addMatcher(
            isAnyOf(login.fulfilled, registration.fulfilled),
            (state, action) => {
            handleFulfilled(state, action);
            }
        )
        .addMatcher(
            isAnyOf(
            login.pending,
            registration.pending,
            logout.pending,
            refreshUser.pending
            ),
            (state) => {
            handlePending(state);
            }
        )
        .addMatcher(
            isAnyOf(
            login.rejected,
            registration.rejected,
            logout.rejected,
            refreshUser.rejected
            ),
            (state, action) => {
            handleRejected(state, action);
            }
        );
    },
});

export const authReducer = authSlice.reducer;