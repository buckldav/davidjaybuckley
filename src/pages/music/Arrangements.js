import React from 'react'
import Contact from '../../components/Contact'

const Charts = props => (
  <div className="grid-y">
    <h4 className="text-center margin-bottom-2">This page is under construction. I'll be adding charts and recordings soon.</h4>
    <img className="margin-bottom-3 margin-horizontal-auto" src={window.location.origin + "/img/music/empty-stage.jpg"} width="100%" alt="David Buckley Arrangements" style={{"maxWidth": "500px"}} />
  </div>
)

const MusicArrangements = () => (
  <main role="main" id="musician">
    <section className="grid-container margin-top-1">
      <div className="grid-x grid-margin-x">
        <div className="cell small-12">
          <h1 className="accent-text">Arrangements and Compositions</h1>
          <p className="margin-0">
            <span>I've been writing music since I was a wee lad.</span>
          </p>
        </div>
      </div>
    </section>
    <nav className="grid-container padding-vertical-1">
      <a href="/musician" className="padding-right-1">Music Home</a>
      <a href="/music/lessons" className="padding-right-1">Lessons</a>
      <a href="/music/arrangements#contact" className="padding-right-1">Hire Me</a>
    </nav>
    <section className="grid-container margin-vertical-1">
      <Charts />
    </section>
    <hr/>
    <Contact 
      subject="Music Arrangements"
      placeholder="Message"
      message="Get in touch with me if you'd like to commission an arrangement."
      button2={<a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/buckldav">SoundCloud</a>}
    />
  </main>
)

export default MusicArrangements