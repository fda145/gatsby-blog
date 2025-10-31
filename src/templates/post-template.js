import React from 'react';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '../components/Layout';
import SEO from '../components/SEO';

const Article = styled.article`
  max-width: 800px;
  margin: 0 auto;
`;

const PostHeader = styled.header`
  margin-bottom: 3rem;
`;

const PostTitle = styled.h1`
  font-size: 2.5rem;
  color: #2d3748;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const PostMeta = styled.div`
  display: flex;
  gap: 2rem;
  color: #718096;
  font-size: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

const FeaturedImageStatic = styled.img`
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  display: block;
`;

const PostContent = styled.div`
  line-height: 1.8;
  color: #2d3748;

  h2 {
    font-size: 1.8rem;
    margin: 2rem 0 1rem;
    color: #2d3748;
  }

  h3 {
    font-size: 1.4rem;
    margin: 1.5rem 0 1rem;
    color: #4a5568;
  }

  p {
    margin-bottom: 1.5rem;
  }

  code {
    background: #f7fafc;
    padding: 0.2rem 0.4rem;
    border-radius: 3px;
    font-family: 'Courier New', monospace;
    font-size: 0.9em;
  }

  pre {
    background: #2d3748;
    color: #fff;
    padding: 1.5rem;
    border-radius: 8px;
    overflow-x: auto;
    margin: 1.5rem 0;

    code {
      background: transparent;
      padding: 0;
    }
  }

  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 2rem;
  }

  li {
    margin-bottom: 0.5rem;
  }

  blockquote {
    border-left: 4px solid #667eea;
    padding-left: 1.5rem;
    margin: 1.5rem 0;
    color: #4a5568;
    font-style: italic;
  }

  a {
    color: #667eea;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    margin: 1.5rem 0;
  }
`;

const BackLink = styled.a`
  display: inline-block;
  color: #667eea;
  text-decoration: none;
  margin-top: 3rem;
  font-weight: 600;

  &:hover {
    text-decoration: underline;
  }
`;

const PostTemplate = ({ data, children }) => {
  const post = data.mdx;
  const featuredImageUrl = post.frontmatter.featuredImage;

  return (
    <Layout>
      <Article>
        <PostHeader>
          <PostTitle>{post.frontmatter.title}</PostTitle>
          <PostMeta>
            <span>📅 {post.frontmatter.date}</span>
            <span>👤 {post.frontmatter.author}</span>
            <span>⏱️ {post.fields.timeToRead.text}</span>
          </PostMeta>
        </PostHeader>

        {featuredImageUrl && (
          <FeaturedImageStatic 
            src={featuredImageUrl} 
            alt={post.frontmatter.title}
          />
        )}

        <PostContent>
          {children}
        </PostContent>

        <BackLink href="/">← Voltar para todos os posts</BackLink>
      </Article>
    </Layout>
  );
};

export const Head = ({ data }) => {
  const post = data.mdx;
  
  return (
    <SEO 
      title={post.frontmatter.title}
      description={post.frontmatter.excerpt}
      image={post.frontmatter.featuredImage}
      pathname={`/posts/${post.frontmatter.slug}`}
    />
  );
};

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
        author
        excerpt
        slug
        featuredImage
      }
      fields {
        timeToRead {
          text
        }
      }
    }
  }
`;

export default PostTemplate;