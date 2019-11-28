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
              <h1 className="h5"><a className="white-text" href="/">David Buckley</a></h1>
              <p>Lifetime Utahn.<br/>Ultimate Frisbee lover.<br/>Trying to do three careers at once.</p>
              <nav id="nav-links" className="grid-y">
                <span className="xs-text">I am a...</span>
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
                <span className="title-bar-title padding-left-1">David Buckley</span>
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