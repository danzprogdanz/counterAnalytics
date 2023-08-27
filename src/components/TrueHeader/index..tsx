import React from 'react';
import {HeaderStyle} from './styled';
import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  background-color: #28549D;
  height: 60%;
  width: 250px;
  color: white;
  border-radius: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
`;

const TrueHeader = () => {
    
    return (
        <>
            <HeaderStyle >
                <Title>Analytics Counter</Title>
            </HeaderStyle>
        </>
    );
}

export default TrueHeader;