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
    h1{
        margin-bottom: 2rem;
        color:#5A767F;
        font-size: 1.5rem;
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
                <div>
                    <button type="submit">Register</button>
                    <button>Info</button>
                </div>
            </FORM>
        </>
    )
};