import React, { useState } from 'react';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  min-width: 600px;
  
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative; /* Add this line */
  padding-right:30px;
  padding-left: 30px;
  display:flex;
  flex-direction: column;
`;

const TextDiv=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-size: 20px;
`
const ButtonContainer = styled.div`
    display: flex;
    justify-content:flex-end;
`

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 25px;
  cursor: pointer;
  &:hover{
    color:red;
  }
`;
const Title = styled.p`
    font-weight: 700;
    font-size: 23px;
    margin:0;

`
const Brand = styled.p`
    font-weight: 400;
    font-size: 16px;
    color:grey;
    margin:0;

`
const InputImageContainer=styled.div`
    display: flex;
    margin:30px;
    justify-content: space-between;
    
`



const InputRow = styled.div`
    display:flex;
    justify-content: space-between;
    margin:10px;
`
const InputContainer = styled.div`
    display:flex;
    flex-direction: column;
`

const Input= styled.input`
    padding:15px;
    font-size: large;
    border-radius: 10px;
    border:1px solid #d8d8d8;
    outline:none;
    margin-left: 50px;
`

const ModalButton = styled.button`
  background-color: #105d2c;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
  &:hover{
    background-color:#0e4e26 ;

  }
`;

const EditModal = ({ isOpen, closeModal, product, handleSaveClick }) => {
  const [newPrice, setNewPrice] = useState(product.price);
  const [newQuantity, setNewQuantity] = useState(product.quantity);

  if (!isOpen) {
    return null;
  }

  return (
    <ModalContainer>
      <ModalContent>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
        <TextDiv>
          <Title>{product.name}</Title>
          <Brand>{product.brand}</Brand>
          
          
        </TextDiv>
        <InputImageContainer>
        <img height="200px" src={product.image} alt="product"/>
        <InputContainer>
        <InputRow>
        <label htmlFor="newPrice">Price:</label>
        <Input
            type="number"
            id="newPrice"
            value={newPrice}
            onChange={(e) => setNewPrice(Number(e.target.value))}
          />
          </InputRow>
          <InputRow>
          <label htmlFor="newQuantity">Quantity:</label>
          <Input
            type="number"
            id="newQuantity"
            value={newQuantity}
            onChange={(e) => setNewQuantity(Number(e.target.value))}
          />
            </InputRow>
            <InputRow>
            <label>Total</label>
            <p>{newPrice*newQuantity}</p>
            </InputRow>
          </InputContainer>
          </InputImageContainer>
        <ButtonContainer>
          <ModalButton
            onClick={() => {
              handleSaveClick(product.id, newPrice, newQuantity);
              closeModal();
            }}
          >
            Send
          </ModalButton>
        </ButtonContainer>
      </ModalContent>
    </ModalContainer>
  );
};

export default EditModal;