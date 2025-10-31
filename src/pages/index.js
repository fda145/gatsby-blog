import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import ArticleCard from '../components/ArticleCard';
import SEO from '../components/SEO';

const Hero = styled.section`
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #2d3748;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #718096;
  max-width: 600px;
  margin: 0 auto;
`;

const PostsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const IndexPage = ({ data }) => {
  const posts = data.allMdx.nodes;

  return (
    <Layout>
      <Hero>
        <Title>Bem-vindo ao Connect Blog</Title>
        <Subtitle>
          Artigos sobre desenvolvimento web, JavaScript, React e tecnologias modernas
        </Subtitle>
      </Hero>

      <PostsGrid>
        {posts.map((post) => (
          <ArticleCard
            key={post.id}
            title={post.frontmatter.title}
            date={post.frontmatter.date}
            excerpt={post.frontmatter.excerpt}
            slug={post.frontmatter.slug}
          />
        ))}
      </PostsGrid>
    </Layout>
  );
};

export const Head = () => (
  <SEO 
    title="Connect Blog - Artigos sobre Tecnologia e Desenvolvimento"
    description="Blog profissional sobre desenvolvimento web, JavaScript, React e tecnologias modernas"
  />
);

export const query = graphql`
  query {
    allMdx(
      sort: { frontmatter: { date: DESC } }
      limit: 20
    ) {
      nodes {
        id
        frontmatter {
          title
          date(formatString: "DD/MM/YYYY")
          excerpt
          slug
        }
      }
    }
  }
`;

export default IndexPage;