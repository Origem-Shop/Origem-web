import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import favicon from "../../public/favicon.svg";

const StyledContainer = styled(Container)``;

const StyledImg = styled.img`
  height: 30px;
  margin: 5px;
`;

export default function NavBar() {
  return (
    <Navbar bg="dark" variant="dark">
      <StyledContainer>
        <StyledImg src={favicon} width="50px" style={{ margin: "0 10px" }} />
        <Navbar.Brand href="/">Origem Shop</Navbar.Brand>
        <Nav>
          <Nav.Link href="/contato">Contato</Nav.Link>
        </Nav>
      </StyledContainer>
    </Navbar>
  );
}
