import React from 'react'
import Contact from '../../components/Contact'

const MuseScoreUser = "buckldav";
const MuseScoreURLs = [
  {
    "title": "Let It Snow",
    "embed": "https://musescore.com/user/30979026/scores/5901967/embed",
    "url": "https://musescore.com/user/30979026/scores/5901967/s/As2-ys"
  },
  {
    "title": "Spooky Scary Skeletons",
    "embed": "https://musescore.com/user/30979026/scores/5901926/embed",
    "url": "https://musescore.com/user/30979026/scores/5901926/s/As2-ys"
  },
  {
    "title": "O Come, O Come Emmanuel",
    "embed": "https://musescore.com/user/30979026/scores/5901958/embed",
    "url": "https://musescore.com/user/30979026/scores/5901958/s/As2-ys"
  },
  {
    "title": "Stayin' Alive",
    "embed": "https://musescore.com/user/30979026/scores/5901929/embed",
    "url": "https://musescore.com/user/30979026/scores/5901929/s/As2-ys"
  },
  {
    "title": "The Christmas Song",
    "embed": "https://musescore.com/user/30979026/scores/5901974/embed",
    "url": "https://musescore.com/user/30979026/scores/5901974/s/As2-ys"
  },
  {
    "title": "Where Are You Christmas",
    "embed": "https://musescore.com/user/30979026/scores/5901921/embed",
    "url": "https://musescore.com/user/30979026/scores/5901921/s/As2-ys"
  }    
]

class MusicArrangements extends React.Component {
  state = {
    score: MuseScoreURLs[0]
  }

  changeActiveScore = (e) => {
    this.setState({score: MuseScoreURLs[e.target.id]})
  }

  render() {
    return (
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
          <div className="grid-y">
            <div className="grid-x">
              <div className="cell medium-6 padding-left-1">
                <h5>Arrangements by <a target="_blank" rel="noopener noreferrer" href={"https://musescore.com/"+MuseScoreUser}>{MuseScoreUser}</a></h5>
                <ul>
                  {MuseScoreURLs.map((val, i) => (
                    <li><button onClick={this.changeActiveScore} id={i} value={val.title} className="clear button padding-0 margin-0">{val.title}</button></li>
                  ))}
                </ul>
              </div>
              <div className="cell medium-6"> 
                <p className="text-center">
                  Here are some of my most recent arrangements. I specialize in religious/Christmas and jazz arranging. 
                  I charge around $15/part/minute for arrangements.<br/>Get in touch with me <a href="/music/arrangements#contact">here</a>!
                </p>
              </div>
            </div>
            <iframe title={this.state.score.title} width="100%" height="600" src={this.state.score.embed} frameborder="0" allowfullscreen allow="autoplay; fullscreen"></iframe>
            <span><a href={this.state.score.url} rel="noopener noreferrer" target="_blank">{this.state.score.title}</a> by <a href={"https://musescore.com/"+MuseScoreUser}>{MuseScoreUser}</a></span>
          </div>
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
  }
}

export default MusicArrangements