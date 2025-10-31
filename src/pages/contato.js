import React from 'react';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import ContactForm from '../components/ContactForm';
import SEO from '../components/SEO';

const ContactWrapper = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  text-align: center;
  color: #2d3748;
  margin-bottom: 1rem;
  font-size: 2.5rem;
`;

const PageDescription = styled.p`
  text-align: center;
  color: #718096;
  margin-bottom: 3rem;
  font-size: 1.1rem;
`;

const ContatoPage = () => {
  return (
    <Layout>
      <ContactWrapper>
        <PageTitle>Entre em Contato</PageTitle>
        <PageDescription>
          Tem alguma dúvida ou sugestão? Preencha o formulário abaixo e entraremos em contato!
        </PageDescription>
        <ContactForm />
      </ContactWrapper>
    </Layout>
  );
};

export const Head = () => (
  <SEO 
    title="Contato - Tech Blog"
    description="Entre em contato conosco. Estamos prontos para responder suas dúvidas e sugestões"
    pathname="/contato"
  />
);

export default ContatoPage;