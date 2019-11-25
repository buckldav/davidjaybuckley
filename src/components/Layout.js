import React from 'react'
import $ from 'jquery'
import 'foundation-sites'

class Layout extends React.Component {

  componentDidMount() {
    $(document).foundation();
  }

  render() { 
    return(
      <>
        <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
          <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
            <div className="grid-container">
              <br/>
              <img className="thumbnail" src="https://placehold.it/550x350" alt="placeholder"/>
              <h5>David Buckley</h5>
              <p>I love learning new things in technology and music and sharing them with people, so that's what I do! View my projects and portfolios for each of my passions below.</p>
              <nav id="nav-links" className="grid-y">
                <a href="/developer">Web Developer</a>
                <a href="/musician">Jazz Musician</a>
                <a href="/teacher">High School Teacher</a>
              </nav>
            </div>
          </div>
          <div className="off-canvas-content" data-off-canvas-content>
            <div className="title-bar hide-for-large">
              <div className="title-bar-left">
                <button className="menu-icon" type="button" data-open="my-info"></button>
                <span className="title-bar-title">David Buckley</span>
              </div>
            </div>
            {this.props.children}
          </div>
        </div>
      </>
    )
  }
}

export default Layout;