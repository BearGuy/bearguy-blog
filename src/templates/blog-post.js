import React from "react";
import Helmet from "react-helmet";

import '../pages/index.css'

export default function Template({
  data
}) {
  const post = data.markdownRemark;
  return (
    <div className="contentContainer">
        <div className="homeContainer">
            <div className="blog-post-container">
            <Helmet title={`${post.frontmatter.title}`} />
            <div className="blog-post">
                <h1 style={{lineHeight: "45px"}}>{post.frontmatter.title}</h1>
                <div
                className="blog-post-content"
                dangerouslySetInnerHTML={{ __html: post.html }}
                />
            </div>
            </div>
        </div>
    </div>
  );
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
;