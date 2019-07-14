import React from 'react';
import { StaticQuery } from 'gatsby';
import { graphql } from 'gatsby'
const MainMenu = () => (
  // <StaticQuery query={graphql`
  // {
  //  allWordpressWpApiMenusMenusItems(filter: {
  //   name:{
  //    eq: "MainMenu"
  //   }
  //  }){
  //   edges{
  //    node{
  //     name
  //     items {
  //      title
  //      object_slug
  //     }
  //    }
  //   }
  //  }
  // }`
  // } render={props => (
  //   <ul>
  //     {/* {props.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(item => (
  //       <li to={item.object_slug} key={item.title}>
  //         {item.title}
  //       </li>
  //     ))} */}
  //   </ul>
  // )} />
  <div></div>
);


export default MainMenu;