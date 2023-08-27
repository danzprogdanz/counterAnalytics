import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from '../../pages/Home';
import LoginPage from '../../pages/LoginPage';
import styled from 'styled-components';
import Btn from '../../commons/Button';

const FilterContainer = styled.div`
    width: 100%;
    background-color: #161B2C;
    height: 220px;
    color: white;
    display: flex; /* Fix the typo 'inline block' to 'inline-block' */
    align-items: center;
    justify-content: space-between;
`;

const SelectInput = styled.select` 
    background-color: #59C4DE;
    color: #000; 
    font-size: 15px;
    font-weight: bold;
    padding: 0.8em;
    border-radius: 5px;
    width: 100%;
    margin-bottom: 1px;

    option {
        color: #000; 
        font-size: 15px;
        font-weight: bold;
        padding: 8px;
      }
`;

const Counter = styled.div`
        width: 150px;
        height: 150px;
        background-color: #59C4DE;
        border-radius: 5px;
        color: black;
        font-size: 85px;
        font-weight: bold; 
        display: flex;
        align-items: center;
        justify-content: center;
        self-align: center;
        margin-right: auto;
        margin-left: auto;
        margin-top: 10px;
    `;

    const RightBtns = styled.div`
        width: 56px;
        height: 100%;
        background-color: rgba(0, 0, 0, 0);
        border-radius: 5px;
        color: black;
        font-size: 50px;
        display: flex;                  
		flex-direction: column;         
		justify-content: space-around;
        margin-left: 50px;
        margin-right: 50px;
        `;

const CounterContainer = styled.div`
    display: block;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 300px;
`

const InternalCounterContainer = styled.div`
      display: flex;
      flex-direction: row;
      align-items: center;
`

const PrevCounter = styled.div`
    height: 30px;
    width: 30px;

    background-color: rgba(0, 0, 0, 0);
    border: 3px solid #59C4DE; 
    border-radius: 10px;
    padding: 10px; 
    font-size: 25px; /* Adjust the font size as needed */
    
    color:  #59C4DE;

    display: flex;
    justify-content: center;
    align-items:center;

    border: 3px solid white;
`

const Filter = () => {
    const [value, setValue] = useState('');
    const navigate = useNavigate(); // Get the navigation function from react-router-dom

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = e.target.value;
        setValue(selectedValue);
        navigate(selectedValue); // Navigate to the selected route
    }

    

    return (
        <>
            <FilterContainer>
                <RightBtns>
                    <Btn/>
                    <Btn/>
                    <Btn/>
                </RightBtns>
                <CounterContainer>
                    <SelectInput onChange={handleSelectChange} id="routeSelect" value={value}>
                        <option value='/'>Código | Horário</option>
                        <option value="/C01.2">Home</option>
                        <option value="/login">Login</option>
                    </SelectInput>
                    <InternalCounterContainer>
                        <PrevCounter>8</PrevCounter>
                        <Counter>
                            10
                        </Counter>
                        <Btn/>
                    </InternalCounterContainer>
                    
                </CounterContainer>
                <RightBtns>
                    <Btn/>
                </RightBtns>
            </FilterContainer>
        </>
    );
}

export default Filter;
