import React from 'react';
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
  max-height: 150px;
  border-radius: 5px;
  width: 300px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  position: relative; /* Add this line */
  padding-right:0px;
  padding-left: 30px;
  display:flex;
  flex-direction: column;
`;

const TextDiv=styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
font-size: 13px;
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
const P = styled.p`
font-weight: 700;
font-size: 16px;

`

const ModalButton = styled.button`
  background-color: transparent;
  color: #444444;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
  &:hover{
    background-color:#f5f5f5 ;

  }
`;

const Modal = ({ isOpen, closeModal, product, handleUrgentClick, handleMissingClick }) => {
  if (!isOpen) {
    return null;
  }

  return (
 
      <ModalContainer>
        <ModalContent>
          <CloseButton onClick={closeModal}>&times;</CloseButton>
          <TextDiv>
            <P>Missing Product</P>
            <p>Is {product.name} Urgent?</p>
          </TextDiv>
  
          <ButtonContainer>
            <ModalButton onClick={handleUrgentClick}>Yes</ModalButton>
            <ModalButton onClick={handleMissingClick}>No</ModalButton>
          </ButtonContainer>
        </ModalContent>
      </ModalContainer>
    );
  };
export default Modal;