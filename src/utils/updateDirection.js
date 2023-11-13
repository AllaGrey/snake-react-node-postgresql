

export const updDirection =  (e, data) => {
    const code = e.code;
    let newData

    if (code === 'ArrowLeft') {
        return newData = { ...data, direction: 'LEFT' }
    } else if (code === 'ArrowRight') {
        return newData = { ...data, direction: 'RIGHT' }
    } else if (code === 'ArrowUp') {
        return newData = { ...data, direction: 'UP' }
    } else if (code === 'ArrowDown') {
        return newData = { ...data, direction: 'DOWN' }
    } else newData = {...data}
    
    return newData
    };