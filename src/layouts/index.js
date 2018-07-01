import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import Footer from '../components/footer'

import './index.css'
import "../styles/layout-overide.css";

const Layout = ({ children, data }) => (
  <div className="wrapper">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: `Welcome to my site! I'm a blockchain developer who's working across Asia, check out my blog` },
        { name: 'keywords', content: 'Stephen Peterkins, bearguy, web, development' },
      ]}
    />
    <div className="header">
      <Header siteTitle={data.site.siteMetadata.title} />
    </div>
    <div className="content">{children()}</div>
    <div className="footer"><Footer/></div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
