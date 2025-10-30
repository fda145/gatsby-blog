// ============================================
// src/hooks/useSiteMetadata.js
// ============================================

import { useStaticQuery, graphql } from 'gatsby';

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          author
          image
        }
      }
    }
  `);

  return data.site.siteMetadata;
};