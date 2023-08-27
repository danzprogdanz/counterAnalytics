import styled from 'styled-components';
import iconAdd from '../../assets/icons/material-symbols_add.svg';

const Button = styled.button`
    height: 50px;
    width: 50px;

    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #000; 
    border-radius: 10px;
    font-size: 16px; /* Adjust the font size as needed */

    border: 3px solid white;

    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: white; 
        color: #fff; 
  }
`;

const Btn = () => {

    const handleTest = () => {
        console.log('testando');
    }

    return (<Button onClick={handleTest}><img height='30px' src={iconAdd} alt='' /></Button>)
}

export default Btn;