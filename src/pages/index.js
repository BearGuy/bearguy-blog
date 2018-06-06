import React from 'react'
import Link from 'gatsby-link'

import BlogList from '../components/BlogList'

import './index.css'
import '../layouts/index.css'

import 'font-awesome/css/font-awesome.min.css';
import cloud from '../../static/cloud-computing.svg'
import ai from '../../static/artificial-intelligence.svg'

export default ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  return (
    <div className="contentContainer">
      <div className="homeContainer">
        <div className="profileBackground">
          <div className="profileContainer">
            <div className="profileImage"/>
            <div className="profileInfo">
              <h1>Stephen Peterkins</h1>
              <p>Developer | Blockchain | Machine Learning</p>
              <div className="contactIcons">
                <a href="https://linkedin.com/in/stephen-peterkins" style={{ color: "black"}}>
                <i style={{fontSize: "2.5em"}} className="fa fa-linkedin"></i></a>
                <a href="https://github.com/BearGuy" style={{ color: "black"}}>
                <i style={{fontSize: "2.5em"}} className="fa fa-github"></i></a>
                <a href="https://instagram.com/s.peterkins" style={{ color: "black"}}>
                <i style={{fontSize: "2.5em"}} className="fa fa-instagram"></i></a>
                <a href="https://twitter.com/SPeterkins" style={{ color: "black"}}>
                <i style={{fontSize: "2.5em"}} className="fa fa-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="body">
          <a name="about">
          <h2>About Me</h2>
          </a>
          {/* Include where I'm from, my education, my interests and hobbies */}
          {/* <p> */}
          <p>Queen's University Engineering Physics Graduate.
          Javascript Developer turned Blockchain Developer.
          Core Developer of the <a href="http://saito.tech">Saito Network. </a>
          Travelling Asia, currently working in 🇨🇳Beijing</p>


          {/* <h2>Skills</h2>
          <div className="skillsContainer">
            <div className="skillColumn">
              <div style={{justifySelf: 'center'}}>
                <i style={{fontSize: '6em', marginBottom: '.25em'}} className="fa fa-code"></i>
              </div>
              <h3>Code</h3>
              <p>
              Lorem ipsum dolor sit amet, interdum mauris. Vel quisque, maecenas nullam mi litora eu a dui, dui sem natoque ultrices duis amet. Feugiat a leo lectus eros quis amet, fringilla lorem pharetra, duis nibh tortor viverra sollicitudin amet. Rhoncus donec dui amet eget, mauris in parturient id, convallis dui pede mauris vulputate nulla vestibulum.
              </p>
            </div>
            <div className="skillColumn">
              <i style={{fontSize: '6em', marginBottom: '.25em'}} className="fa fa-database"></i>
              <img style={{height: '96px'}} src={cloud} alt="Cloud Computing icon" />
              <h3>Cloud</h3>
              <p>
              Lorem ipsum dolor sit amet, interdum mauris. Vel quisque, maecenas nullam mi litora eu a dui, dui sem natoque ultrices duis amet. Feugiat a leo lectus eros quis amet, fringilla lorem pharetra, duis nibh tortor viverra sollicitudin amet. Rhoncus donec dui amet eget, mauris in parturient id, convallis dui pede mauris vulputate nulla vestibulum.
              </p>
            </div>
            <div className="skillColumn">
              <i style={{fontSize: '6em', marginBottom: '.25em'}} className="fab fa-facebook-messenger"></i>
              <img style={{height: '96px'}} src={ai} alt="AI icon" />
              <h3>Machine Learning</h3>
              <p>
              Lorem ipsum dolor sit amet, interdum mauris. Vel quisque, maecenas nullam mi litora eu a dui, dui sem natoque ultrices duis amet. Feugiat a leo lectus eros quis amet, fringilla lorem pharetra, duis nibh tortor viverra sollicitudin amet. Rhoncus donec dui amet eget, mauris in parturient id, convallis dui pede mauris vulputate nulla vestibulum.
              </p>
            </div>
          </div> */}

          {/* <h2>Projects</h2>
          <div className="projectsContainer">
          </div> */}

          <h2>Blog</h2>
          <div className="blogContainer">
            <BlogList posts={posts}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export const query = graphql`
  query BlogListQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            path
            image
          }
        }
      }
    }
  }
`;