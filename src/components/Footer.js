import React from 'react';
import styled from '@emotion/styled';

const FooterWrapper = styled.footer`
  background: #2d3748;
  color: white;
  padding: 2rem 0;
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  text-align: center;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p>&copy; {new Date().getFullYear()} Connect Blog. Todos os direitos reservados.</p>
        <p>Desenvolvido por Flávio Dias Agapito com Gatsby e React</p>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;