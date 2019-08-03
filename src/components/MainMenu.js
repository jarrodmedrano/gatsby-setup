import React from 'react';
import { StaticQuery, Link } from 'gatsby';
import { graphql } from 'gatsby'
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
    <React.Fragment>
      {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
        <Link to={item.object_slug === 'home' ? '/' : item.object_slug} key={item.title}>
          {item.title}
        </Link>
      ))}
    </React.Fragment>
  )} />
);

export default MainMenu;