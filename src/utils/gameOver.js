    export const gameOver = (data) => {
        return { ...data, status: 'finished' }
    }