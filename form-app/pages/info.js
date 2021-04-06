import React from 'react';
import Info from '../Components/Info';
import styled from 'styled-components';
import Link from 'next/link';


const DivInfos = styled.div`
        border: 1px solid #5A767F;
        margin-bottom: 1rem;
        padding: 0 0.5rem;
        font-weight: bold;
        color: #5A767F;
        background-color:#F7F8F9;
        border-radius: 8px;
        box-shadow: 0px 1px 2px #00000029;
`
const BtnReturn = styled.button`
      
        color: #FF4F5A;
        background-color:#fff; 
        border: none;
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    
`

export default function PageInfo() {

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('Respota Recebida');
        console.log(data);
        setData(data);
      })
  }, []);

  const Infos = data.map(function (data) {
    return (
      <>
        <DivInfos>
          <p>{data.name}</p>
          <p>{data.email}</p>
          <p>{data.number}</p>
          {/* <p>mundo</p> */}
        </DivInfos>
      </>
    )
  })


  return (
    <>
      <Info>
        {Infos}
        <Link
          href='/'
        >
          <BtnReturn>return</BtnReturn>
        </Link>
      </Info>
    </>
  )
}