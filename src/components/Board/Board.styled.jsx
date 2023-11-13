import styled from "styled-components";

export const BoardContainer = styled.div`
padding: 0;
margin: 0;
overflow: hidden;
width: 100%;
display: grid;
grid-template-rows: repeat(20, minmax(20px, 1fr));
grid-template-columns: repeat(20, minmax(20px, 1fr));
gap: 0;
font-size: 5px;
border: 2px solid grey;
max-width: 400px;
`
export const Cell = styled.div`

    margin: 0;
    width: 18px;
    height: 18px;
    border-radius: 30%;

    background-color: ${({ special }) =>
            special === 'food' ?
            'yellow' :
            special === 'snake' ?
                'green' :
                special === 'head' ?
                    'black' :
                    'transparent'};
`
export const GameInfo = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 100px;
    color: white;
`

export const Button = styled.button`
border: none;
width: 120px;
height: 30px;
background-color: green;
color: white;
border-radius: 5px;
cursor: pointer;
font-size: 14px;
display: flex;
justify-content: center;
align-items: center;

&:hover {
    color: yellowgreen;
    background-color: white;
}
`

export const GameStatus = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 56px;
    color: white;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`

Cell.shouldForwardProp = ({ special }) => special !== 'special';