import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const HeaderWrapper = styled.header`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 1.5rem 0;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Logo = styled(Link)`
  color: white;
  font-size: 1.8rem;
  font-weight: bold;
  text-decoration: none;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Nav>
        <Logo to="/">Connect Blog</Logo>
        <NavLinks>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/contato">Contato</NavLink>
        </NavLinks>
      </Nav>
    </HeaderWrapper>
  );
};

export default Header;