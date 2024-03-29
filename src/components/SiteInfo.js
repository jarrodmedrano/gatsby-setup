import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled from 'styled-components';

const SiteInfoWrapper = styled.div`
  flex-grow: 1;
  color: white;
`;

// const SiteTitle = styled.div`
//   font-weight: bold;
// `;

const SiteInfo = () => (
  <StaticQuery query={graphql`
  {
  allWordpressSiteMetadata {
    edges {
      node {
        name
        description
      }
    }
  }
}`
  } render={props => (
    <SiteInfoWrapper>

      <div>
        {props.allWordpressSiteMetadata.edges[0].node.name}
      </div>
      <div>
        {props.allWordpressSiteMetadata.edges[0].node.description}
      </div>
    </SiteInfoWrapper>
  )} />
);

export default SiteInfo;