import React from 'react';
import styled from 'styled-components';

const DivInfo = styled.div`
    background-color: #fff;
    border-radius: 10px;
    width: 25vw;
    box-shadow: 0px 2px 4px #00000029;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    margin-top: 25%;
    @media screen and (max-width: 600px) {      
        width: 90vw;
        margin-top: 10%;
    }
`

export default function Info(props) {

    return (
        <DivInfo>
            <div className='div-card'>
                {props.children}
            </div>
        </DivInfo>
    )
}