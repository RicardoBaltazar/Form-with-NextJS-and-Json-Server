import styled from 'styled-components';

const FORM = styled.form`
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
    h1{
        margin-bottom: 2rem;
        color:#5A767F;
        font-size: 1.5rem;
    } 
    div {
        display: flex;
        flex-direction: column;
    }
    div label{
        color:#5A767F;
        font-size: 1.1rem;
        font-weight: bold;
    }
    div input{
        margin: 0.2rem 0 2rem 0;
        background-color:#F7F8F9;
        padding: 1rem 2rem;
        border: none;
        border-radius: 8px;
        box-shadow: 0px 1px 2px #00000029;

    }
    .div-buttons{
        display: grid;
        grid-template-columns: 2fr 1fr;
        height: 3rem;
    }
    .register{
        background-color: #FF4F5A;
        color: #fff;
        border: none;
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    }
    .info{
        color: #FF4F5A;
        background-color:#fff; 
        border: none;
        font-size: 1.1rem;
        font-weight: bold;
        border-radius: 10px;
        cursor: pointer;
    }
`;

export default function Form(){
    return (
        <>
            <FORM>
                <h1>Registration</h1>
                <div>
                    <label htmlFor="name">First name</label>
                    <input type="text" name="" id="" placeholder='Name'/>

                    <label htmlFor="name">Email</label>
                    <input type="email" name="" id="" placeholder='Email'/>

                    <label htmlFor="name">Phone number</label>
                    <input type="number" name="" id="" placeholder='000 000 00 00'/>
                </div>
                <div className='div-buttons'>
                    <button type="submit" className='register'>Register</button>
                    <button className='info'>Info</button>
                </div>
            </FORM>
        </>
    )
};