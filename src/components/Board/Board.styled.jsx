import styled from "styled-components";

export const BoardContainer = styled.div`
display: grid;
grid-template-rows: repeat(20, minmax(20px, 1fr));
grid-template-columns: repeat(20, minmax(20px, 1fr));
font-size: 5px;
border: 2px solid grey;
`
export const Cell = styled.div`
border: 1px solid grey;

background-color: ${({ special }) =>
        special === 'food' ?
        'yellow' :
        special === 'snake' ?
            'green' :
            special === 'head' ?
                'black' :
                'blue'};
/* background-color: ${(prop) => !prop.special ? 'blue' : prop.special === 'food' ? 'yellow' :  'green'}; */

`

Cell.shouldForwardProp = ({ special }) => special !== 'special';