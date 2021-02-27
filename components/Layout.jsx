import Link from 'next/link'
import React, { useEffect } from 'react'
import $ from 'jquery'
import 'foundation-sites'

const Layout = props => {

  useEffect(() => {
    $(document).foundation();
  }, [])

  return (
    <>
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
        <div className="off-canvas position-left reveal-for-large" id="my-info" data-off-canvas data-position="left">
          <div className="grid-container">
            <br/>
            <img className="thumbnail" src={"/img/portrait-uvu.jpg"} alt="David Jay Buckley"/>
            <h1 className="h5"><a className="top-nav" href="/" itemProp="givenName">David Buckley</a></h1>
            <p>Family Man.<br/>Lifetime Utahn.<br/>Ultimate Frisbee lover.<br/>Trying to do three careers at once.</p>
            <nav id="nav-links" className="grid-y">
              <span className="text-xs">I am a...</span>
              <Link href="/developer"><a className="top-nav" itemProp="jobTitle">Full Stack Developer</a></Link>
              <Link href="/musician"><a className="top-nav" itemProp="jobTitle">Jazz Musician</a></Link>
              <Link href="/teacher"><a className="top-nav" itemProp="jobTitle">High School Teacher</a></Link>
              <a className="top-nav margin-top-1" href={window.location.href.split("#")[0] + "#contact"}>Contact Me</a>
            </nav>
          </div>
        </div>
        <div className="off-canvas-content" data-off-canvas-content>
          <div className="title-bar hide-for-large">
            <div className="title-bar-left">
              <button className="menu-icon" type="button" data-open="my-info"></button>
              <a className="title-bar-title padding-left-1 white-text" href="/" itemProp="givenName">David Buckley</a>
            </div>
          </div>
          {props.children}
        </div>
      </div>
    </>
  )
}

export default Layout;