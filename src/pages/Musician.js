import React from 'react'
import Contact from '../components/Contact'

const MusicGrid = props => (
  <div className="masonry-css">
    <div className="masonry-css-item">
      <iframe title="soundcloud" width="100%" height="400" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/users/4766862&amp;color=%234b3f72&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=false"></iframe>      
      <div className="callout">
        <h5 className="subheading">Production</h5>
        <p>I'm just another introverted music theory nut who produces stuff out of the bedroom and chucks it up on Soundcloud. 
        I track live bass, guitar, and keys for people.</p>
      </div>
    </div>
    <div className="masonry-css-item">
      <img src={window.location.origin + "/img/music/bass-roc.jpg"} width="100%" alt="BYU ROC band"/>
      <div className="callout">On national TV! In 2018, I played bass in the BYU ROC band for the basketball games.</div>
    </div>
    <div className="masonry-css-item">
      <img src={window.location.origin + "/img/music/organ.jpg"} width="100%" alt="David Buckley - Organ Player"/>
    </div>
    <div className="masonry-css-item">
      <iframe title="Mocktail Party" src="https://open.spotify.com/embed/album/1yVg3akb3JKMtpJ5dhaGDg" width="100%" height="270" scrolling="no" frameborder="no" allowtransparency="true" allow="encrypted-media"></iframe>
      <div className="callout">My band, <a href="https://theguests.band">The Guests</a>, recorded an album in my house in the summer of 2019. I wrote 4 of the 6 songs. Me and Bobby (the keys player) mixed the whole thing in a weekend to release at a show that Monday.</div>
    </div>
    <div className="masonry-css-item">
      <img src={window.location.origin + "/img/music/the-guests.png"} width="100%" alt="The Guests"/>
    </div>
    <div className="masonry-css-item">
      <div className="callout">
        <h5 className="subheading">My Story</h5>
        <p>I had enjoyed singing in choirs and doing piano lessons as a kid, but once I started driving my own music education, I really got into it. 
        Listening to Boston's "More Than a Feeling" when I was 13 forced me to pick up a guitar. 
        In high school, an unique opportunity allowed me to join the top jazz band midway through the year on piano, rekindling my love for the instrument. 
        Nowadays, I mostly play bass because that's where the gigs are fam.</p>
      </div>
    </div>
    <div className="masonry-css-item">
      <img src={window.location.origin + "/img/music/mjo.jpg"} width="100%" alt="David Buckley - Jazz Guitarist"/>
      <div className="callout">One of my strengths as a musician is playing rhythm jazz guitar. I pride myself on knowing how to craft chords with extensions and inversions to fit the melody and harmonic context of the tune just right.</div>
    </div>
    <div className="masonry-css-item">
      <iframe title="Rock This Town - MJO" width="100%" src="https://www.youtube.com/embed/yr6ljmzDKTE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <div className="callout">I play guitar with the <a href="https://www.facebook.com/Mountainside-Jazz-Orchestra-1163095557057389/">Mountainside Jazz Orchestra</a>. The tune above has me soloing around 2:19.</div>
    </div>
    <div className="masonry-css-item">
      <img src={window.location.origin + "/img/music/pinas-bass.jpg"} width="100%" alt="Upright bass in the Philippines"/>
    </div>
    <div className="masonry-css-item">
      <img src={window.location.origin + "/img/music/mjo-group.jpg"} width="100%" alt="Mountainside Jazz Orchestra"/>
      <div className="callout">
        <h5 className="subheading">Arranging</h5>
        <p>I've been writing and arranging songs for over ten years now and I've learned a lot along the way. 
        I love making big band arrangements and teaching Jazz Band at Merit Academy lets me arrange tunes frequently. 
        I also make arrangements for choirs and ensembles, especially for religious performances.
        Check out my arrangements <a href="/music/arrangements">here</a>.</p>
      </div>
    </div>
    <div className="masonry-css-item">
      <iframe title="Blue Bossa" width="100%" src="https://www.youtube.com/embed/hmB4H3nqBIw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <iframe title="Did You See It?" width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/621878748&amp;color=%234b3f72&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
      <iframe title="Tamarindo Street" width="100%" height="200" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/642074994&amp;color=%234b3f72&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>
      <div className="callout">I've been priviliged to collaborate with <a href="https://bobbystmute.bandcamp.com/">Bobby St. Mute</a> on a couple singles, playing the guitar tracks (and the occasional keys parts).</div>
    </div>
  </div>
)

const Musician = () => (
  <main role="main" id="musician">
    <section className="grid-container margin-top-1">
      <div className="grid-x grid-margin-x">
        <div className="cell small-12">
          <h1 className="accent-text">Musician</h1>
          <p className="margin-0">
            <span>Maybe one day I'll write songs like Donald Fagen.</span>
          </p>
        </div>
      </div>
    </section>
    <nav className="grid-container padding-vertical-1">
      <a href="/music/lessons" className="padding-right-1">Lessons</a>
      <a href="/music/arrangements" className="padding-right-1">Arrangements</a>
      <a href="/musician#contact" className="padding-right-1">Hire Me</a>
    </nav>
    <section className="grid-container margin-vertical-1">
      <MusicGrid />
    </section>
    <hr/>
    <Contact />
  </main>
)

export default Musician