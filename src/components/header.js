import React, {Component} from 'react'
import Link from 'gatsby-link'

import Media from 'react-media'

import './header.css'

import 'font-awesome/css/font-awesome.min.css';

class Header extends Component {
  constructor(props){
    super(props)

    this.state = {
      isMenuHidden: true,
    }

    this.toggleBurgerClick = this.toggleBurgerClick.bind(this)
  }

  toggleBurgerClick() {
    this.setState((prevState) => {
      return {isMenuHidden: !prevState.isMenuHidden}
    })
  }

  render() {
    return(
      <div style={{background: '#f6f7fa'}}>
        <Media query="(max-width: 705px)">
          { matches =>
            matches ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gridTemplateRows: '1fr auto',
                margin: '0 auto',
                maxWidth: 900,
                padding: '1.4rem 1.0875rem',
                justifyItems: 'end',
                alignItems: 'center',
                zIndex: '10',
              }}
            >
              <div style={{justifySelf: 'start'}}>
                <h1 style={{ margin: 0, fontSize: '18px'}}>
                  <Link
                    to="/"
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                    }}
                  >
                    {this.props.siteTitle}
                  </Link>
                </h1>
              </div>
              <div className="burger"onClick={this.toggleBurgerClick}>
                <i className="fa fa-bars" style={{fontSize: '1.75em',}}/>
              </div>
              { this.state.isMenuHidden ?
                <div></div> :
                <div
                style={{
                  position: 'absolute',
                  top: '75px',
                  background: '#f6f7fa',
                  width: '100%',
                  zIndex: '1',
                  }}
                  >
                  <ul
                  style={{
                    display: 'grid',
                    margin: 0,
                    listStyle: 'none',
                    justifyItems: 'center',
                  }}
                  >
                    <li><Link to="/#about" onClick={this.toggleBurgerClick}>About</Link></li>
                    <li><Link to="/resume" onClick={this.toggleBurgerClick}>Resume</Link></li>
                    <li><Link to="/blog" onClick={this.toggleBurgerClick}>Blog</Link></li>
                  </ul>
                </div>
              }
            </div>
            ) : (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                margin: '0 auto',
                maxWidth: 1000,
                padding: '1.4rem 1.0875rem',
              }}
            >
              <div>
                <h1 style={{ margin: 0, fontSize: '18px'}}>
                  <Link
                    to="/"
                    style={{
                      color: 'black',
                      textDecoration: 'none',
                    }}
                  >
                    {this.props.siteTitle}
                  </Link>
                </h1>
              </div>
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between'
                }}>
                  <h1 style={{ margin: 0, fontSize: '18px', }}>
                    <Link to="/"
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                      }}>
                      Home
                    </Link>
                  </h1>

                  <h1 style={{ margin: 0, fontSize: '18px'}}>
                    <a href="#about"
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                      }}>
                      About
                    </a>
                  </h1>

                  <h1 style={{ margin: 0, fontSize: '18px'}}>
                    <Link to="/resume"
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                      }}>
                      Resume
                    </Link>
                  </h1>
                  <h1 style={{ margin: 0, fontSize: '18px'}}>
                    <Link to="/blog"
                      style={{
                        color: 'black',
                        textDecoration: 'none',
                      }}>
                      Blog
                    </Link>
                  </h1>
                </div>
              </div>
            </div>
          )}
        </Media>
      </div>
    );
  }
}

export default Header
