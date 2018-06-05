import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Media from 'react-media'

import Header from '../components/header'
import Footer from '../components/footer'
import Sidebar from '../components/Sidebar'

import './index.css'
import "../styles/layout-overide.css";

const Layout = ({ children, data }) => (
  <div className="wrapper">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
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
