import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #ffffff;
  display:flex;
  max-height:11vh;
  flex-direction: column;
  justify-content:space-between;
  color: #464646;
  padding-left: 100px;
  padding-right: 100px;
  padding-top: 10px;
  padding-bottom: 0px;
  box-shadow: 1px 0px 30px #646464;
`;

const RowTop = styled.div`
  font-size: 13px;
  margin:3px;
  display: flex;
`;

const RowBot = styled.div`
  font-size: 20px;
  margin-top:13px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BotOrder = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;

`;
const ButtonContainer = styled.div`
    display: flex;
    margin-bottom: 10px;
    justify-content: center;
    align-items: center;

`
const Button1 = styled.button`
    border: 2px solid #2c9665;
    color:#237951;
    background-color: transparent;
    border-radius: 30px;
    width: 80px;
    height: 35px;
    padding-top: 3px;
    padding-bottom: 3px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
    font-weight: bold;
    margin-left: 10px;
    margin-right:20px;
    cursor: pointer;
    &:hover {
        color:#063c23;
        border: 2px solid #063c23;
    }
    
`
const Button2 = styled.button`
    border: 2px solid #164f25;
    padding-top: 3px;
    padding-bottom: 3px;
    color:white;
    width: auto;
    height: 35px;
    background-color: #08512f;
    border-radius: 30px;
    padding-left: 30px;
    padding-right: 30px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;
    &:hover {
        background-color: #215d31;
    }
`

const OrderDetailsContainer = () => {
  return (
    <Container>
      
      <RowTop>Order / Order 3423457ABC </RowTop>
      <RowBot>
        <BotOrder>Order 3423457ABC</BotOrder>
      <ButtonContainer>
        <Button1>Back</Button1>
        <Button2>Approve order</Button2>
      </ButtonContainer>
      </RowBot>
    </Container>
  );
};

export default OrderDetailsContainer;