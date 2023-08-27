import styled from 'styled-components';
import iconAdd from '../../assets/icons/material-symbols_add.svg';

const Button = styled.div`
    height: 30px;
    width: 30px;

    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #000; 
    border-radius: 10px;
    padding: 10px; /* Adjust the padding as needed */
    font-size: 16px; /* Adjust the font size as needed */

    border: 3px solid white;

    &:hover {
        background-color: #000; /* Change the background color on hover */
        color: #fff; /* Change the text color on hover */
  }
`;

const Btn = () => {

    return (<Button><img height='30px' src={iconAdd} alt='' /></Button>)
}

export default Btn;