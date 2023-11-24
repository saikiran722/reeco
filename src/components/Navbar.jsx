import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #08512f;
  display:flex;
  align-items: center;
 justify-content:space-between;
 color: white;
 padding-left: 100px;
 padding-right: 100px;
 max-height: 7vh;
`;

const NavbarLeft = styled.div`
  font-size: 15px;
  
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

const NavbarRight = styled.div`
  font-size: 15px;
  
  display: flex;
  cursor: pointer;
`;

const NavbarTitle = styled.h1`
  font-size: 20px;
  font-weight: bold;
  display: flex;
  padding-right: 30px;

`;
const NavbarElements = styled.h3`
  font-size: 14px;
  font-weight: 400;
  display: flex;
  padding-left: 30px;
  padding-right: 30px;
`;

const Navbar = () => {
  return (
    <Nav>
      
      <NavbarLeft><NavbarTitle>Reeco</NavbarTitle><NavbarElements>Store</NavbarElements><NavbarElements>Orders</NavbarElements><NavbarElements>Analytics</NavbarElements></NavbarLeft>
      <NavbarRight><NavbarElements>Hello, James</NavbarElements></NavbarRight>
    </Nav>
  );
};

export default Navbar;