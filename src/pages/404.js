import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const NotFoundWrapper = styled.div`
  text-align: center;
  padding: 4rem 2rem;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  color: #667eea;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 4rem;
  }
`;

const ErrorTitle = styled.h2`
  font-size: 2rem;
  color: #2d3748;
  margin: 1rem 0;
`;

const ErrorDescription = styled.p`
  color: #718096;
  font-size: 1.1rem;
  margin-bottom: 2rem;
`;

const HomeButton = styled(Link)`
  display: inline-block;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 600;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const NotFoundPage = () => {
  return (
    <Layout>
      <NotFoundWrapper>
        <ErrorCode>404</ErrorCode>
        <ErrorTitle>Página Não Encontrada</ErrorTitle>
        <ErrorDescription>
          Desculpe, a página que você está procurando não existe.
        </ErrorDescription>
        <HomeButton to="/">Voltar para Home</HomeButton>
      </NotFoundWrapper>
    </Layout>
  );
};

export const Head = () => (
  <SEO 
    title="404 - Página Não Encontrada"
    description="A página que você procura não existe"
  />
);

export default NotFoundPage;