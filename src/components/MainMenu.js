import React from 'react';
import { StaticQuery, Link } from 'gatsby';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import SiteInfo from './SiteInfo';

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: rgb(3,27,77);
  color: #fff;
`;

const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 8px 16px;
`;

const MainMenu = () => (
  <StaticQuery query={graphql`
  {
   allWordpressWpApiMenusMenusItems(filter: {
    name:{
     eq: "Main Menu"
    }
   }){
    edges{
     node{
      name
      items {
       title
       object_slug
      }
     }
    }
   } 
  }`
  } render={props => (
    <MainMenuWrapper>
      <SiteInfo />
      {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <MenuItem key={item.title} to={item.object_slug === 'home' ? '/' : `/${item.object_slug}`}>
          {item.title}
        </MenuItem>
      ))}
    </MainMenuWrapper>
  )} />
);

export default MainMenu;