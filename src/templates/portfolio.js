import React from "react"
import Layout from "../components/layout";
import styled from 'styled-components';

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`;

export default ({ pageContext }) => (
  <Layout>
    <h1>{pageContext.title}</h1>
    <a href={pageContext.acf.portfolio_url} rel="noopener noreferrer" target="_blank">
      Website Url: {pageContext.acf.portfolio_url}
    </a>
    <FeaturedImage src={pageContext.featured_media.source_url} />
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
  </Layout>
)
