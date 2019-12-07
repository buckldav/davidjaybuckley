import React from 'react'
import Contact from '../../components/Contact'

const LessonsInfo = props => (
  <div className="grid-y">
    <h4 className="text-center margin-bottom-2">Private music lessons (all ages) will resume in the Summer of 2020!</h4>
    <img className="margin-bottom-2 margin-horizontal-auto" src={window.location.origin + "/img/music/studio-rates.jpg"} width="100%" alt="David and Tianna Buckley Music Lessons" style={{"maxWidth": "800px"}} />
    <img className="margin-bottom-3 margin-horizontal-auto" src={window.location.origin + "/img/music/teaching.jpg"} width="100%" alt="David Buckley Music Lessons" style={{"maxWidth": "500px"}} />
    
  </div>
)

const MusicLessons = () => (
  <main role="main" id="musician">
    <section className="grid-container margin-top-1">
      <div className="grid-x grid-margin-x">
        <div className="cell small-12">
          <h1 className="accent-text">Music Lessons</h1>
          <p className="margin-0">
            <span>Guitar, bass, and piano tips and tricks from yours truly.</span>
          </p>
        </div>
      </div>
    </section>
    <nav className="grid-container padding-vertical-1">
      <a href="/musician" className="padding-right-1">Music Home</a>
      <a href="/music/arrangements" className="padding-right-1">Arrangements</a>
      <a href="/music/lessons#contact" className="padding-right-1">Hire Me</a>
    </nav>
    <section className="grid-container margin-vertical-1">
      <LessonsInfo />
    </section>
    <hr/>
    <Contact 
      subject="Music Lessons"
      placeholder="Want to learn my favorite polychords?"
      message="Get in touch with me if you'd like to know more about music lessons and pricing. I teach all over Utah County and I'll come to you or you can come to my studio in Provo."
      button2={<a target="_blank" rel="noopener noreferrer" href="https://soundcloud.com/buckldav">SoundCloud</a>}
    />
  </main>
)

export default MusicLessons