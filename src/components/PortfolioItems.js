import React from 'react';
import { graphql, StaticQuery, Link } from 'gatsby';
// import styled from 'styled-components';

// const PortfolioItemWrapper = styled.div`
//   display: flex;
// `
// const PortfolioItem = styled.div`
//   width: 300px;
//   border:  1px solid #efefef;
//   padding: 16px;
//   margin: 16px;
// `
// const FeaturedImage = styled.img`
//   max-width: 300px;
//   margin: 16px 0;
// `;

const PortfolioItems = () => {
  return (
    <StaticQuery query={graphql`
    {
      allWordpressWpPortfolio {
        edges {
          node {
            title
            excerpt
            content
            slug
            featured_media {
              source_url
            }
          }
        }
      }
    }
    `}
      render={
        props =>
          props
            .allWordpressWpPortfolio
            .edges
            .map(portfolioItem =>
              (
                <div key={portfolioItem.node.id}>
                  <h2>{portfolioItem.node.title}</h2>
                  <img src={portfolioItem.node.featured_media.source_url} alt="Thumbnail" />
                  <div dangerouslySetInnerHTML={{ __html: portfolioItem.node.excerpt }} />
                  <Link to={`/portfolio/${portfolioItem.node.slug}`}>Read More</Link>
                </div>
              )
            )
      }
    />
  )
}

export default PortfolioItems;