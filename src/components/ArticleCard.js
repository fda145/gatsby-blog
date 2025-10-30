// ============================================
// src/components/ArticleCard.js
// ============================================

import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const Card = styled.article`
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Title = styled.h2`
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
  color: #2d3748;

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: #667eea;
    }
  }
`;

const Meta = styled.div`
  color: #718096;
  font-size: 0.9rem;
  margin-bottom: 1rem;
`;

const Excerpt = styled.p`
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
  flex: 1;
`;

const ReadMore = styled(Link)`
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  align-self: flex-start;

  &:hover {
    text-decoration: underline;
  }
`;

const ArticleCard = ({ title, date, excerpt, slug }) => {
  return (
    <Card>
      <Title>
        <Link to={`/posts/${slug}`}>{title}</Link>
      </Title>
      <Meta>{date}</Meta>
      <Excerpt>{excerpt}</Excerpt>
      <ReadMore to={`/posts/${slug}`}>Ler mais →</ReadMore>
    </Card>
  );
};

export default ArticleCard;