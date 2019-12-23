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
              <img className="thumbnail" src={window.location.origin + "/img/portrait-uvu.jpg"} width="100%" alt="placeholder"/>
              <h1 className="h5"><a className="top-nav" href="/">David Buckley</a></h1>
              <p>Family Man.<br/>Lifetime Utahn.<br/>Ultimate Frisbee lover.<br/>Trying to do three careers at once.</p>
              <nav id="nav-links" className="grid-y">
                <span className="text-xs">I am a...</span>
                <a className="top-nav" href="/developer">Web Developer</a>
                <a className="top-nav" href="/musician">Jazz Musician</a>
                <a className="top-nav" href="/teacher">High School Teacher</a>
              </nav>
            </div>
          </div>
          <div className="off-canvas-content" data-off-canvas-content>
            <div className="title-bar hide-for-large">
              <div className="title-bar-left">
                <button className="menu-icon" type="button" data-open="my-info"></button>
                <a className="title-bar-title padding-left-1 white-text" href="/">David Buckley</a>
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