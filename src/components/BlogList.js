import React from 'react'
import Link from 'gatsby-link'

import Helmet from "react-helmet";

import './blogList.css'
import '../layouts/index.css'

export default ({posts}) => {
  return (
    <div className="blogList">
      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .map(({ node: post }) => {
          console.log(post);
          return (
          <Link to={post.frontmatter.path} key={post.id}>
            <div className="blogPostCard" key={post.id}>
              <div>
                <img src={post.frontmatter.image} />
              </div>

              <div style={{margin: '10px'}}>
                <h3>
                    <Link to={post.frontmatter.path}>{post.frontmatter.title}</Link>
                </h3>
                <h4>{post.frontmatter.date}</h4>
                <p style={{fontWeight: 'normal'}}>{post.excerpt}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  )
}