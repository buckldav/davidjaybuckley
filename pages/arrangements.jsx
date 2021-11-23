import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Contact from '../components/Contact'
import dynamic from 'next/dynamic';
import puppeteer from 'puppeteer';

const Layout = dynamic(() => import('../components/Layout'), {
  ssr: false
});

const MuseScoreSets = {
  "Christmas Arrangements": "https://musescore.com/user/30979026/sets/5111349",
  "Jazz/Concert Band Arrangements": "https://musescore.com/user/30979026/sets/5111340",
  "Jazz Standard Materials": "https://musescore.com/user/30979026/sets/5111343",
  "Jazz Piano Materials": "https://musescore.com/user/30979026/sets/5111346"
}

async function getMuseScoreSet(browser, url) {
  const page = await browser.newPage();

  await page.goto(url);

  // Wait for the scores to load and display the results.
  const resultsSelector = 'article>div>div:nth-child(2)>a:nth-child(1)';
  await page.waitForSelector(resultsSelector);

  // Extract the results from the page.
  return await page.evaluate((resultsSelector) => {
    const anchors = Array.from(document.querySelectorAll(resultsSelector));
    return anchors.map((anchor) => {
      console.log(anchor.textContent, anchor.href)
      return { title: anchor.textContent, embed: `${anchor.href}/embed`, url: anchor.href };
    });
  }, resultsSelector);
}

export async function getStaticProps() {
  const browser = await puppeteer.launch();
  const links = {}

  for (const key of Object.keys(MuseScoreSets)) {
    const msset = await getMuseScoreSet(browser, MuseScoreSets[key]); 
    links[key] = msset.sort((a, b) => {
      if(a.title < b.title) { return -1; }
      if(a.title > b.title) { return 1; }
      return 0;
    })
  }

  await browser.close();
  return {
    props: { links },
  }
}

const MusicArrangements = (props) => {
  const [MSSet, setMSSet] = useState(Array.from(Object.keys(MuseScoreSets))[0])
  const [score, setScore] = useState(props.links[Array.from(Object.keys(MuseScoreSets))[0]][0])
  
  const changeActiveScore = (e) => {
    setScore(props.links[MSSet][e.target.id])
  }

  return (
    <Layout>
      <Head>
        <title>David Buckley | Arrangements and Compositions</title>
      </Head>
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
          <Link href="/musician"><a className="padding-right-1">Music Home</a></Link>
          <a href="https://music.davidjaybuckley.com/lessons" className="padding-right-1">Lessons</a>
          <a href="/arrangements#contact" className="padding-right-1">Hire Me</a>
        </nav>
        <section className="grid-container margin-vertical-1">
          <div className="grid-y">
            <p>
              Here are some of my most recent arrangements. I specialize in religious/Christmas and jazz arranging. 
              I charge around $15/part/minute for arrangements.<br/>Get in touch with me <a href="/arrangements#contact">here</a>!
            </p>

                <ul class="dropdown menu" data-dropdown-menu>
                  <li>
                    <a className="padding-left-0" href="#">Select Type of Arrangements</a>
                    <ul class="menu" style={{width: 300}}>
                      {Object.keys(MuseScoreSets).map(val => (
                        <li><button className="clear button" onClick={() => { setMSSet(val); setScore(props.links[val][0]) }}>{val}</button></li>
                      ))}
                    </ul>
                  </li>
                </ul>
                <h5>{MSSet} by <a target="_blank" rel="noopener noreferrer" href="https://musescore.com/buckldav">buckldav</a></h5>
                <ul className="grid-x margin-0 margin-bottom-1">
                  {props.links[MSSet]?.map((val, i) => (
                    <li className="display-inline-block margin-left-1 margin-right-1" key={i}><button onClick={changeActiveScore} id={i} value={val.title} className="clear button padding-0 margin-0">{val.title}</button></li>
                  ))}
                </ul>

            <iframe title={score.title} width="100%" height="600" src={score.embed} frameBorder="0" allow="autoplay; fullscreen"></iframe>
            <span><a href={score.url} rel="noopener noreferrer" target="_blank">{score.title}</a> by <a href="https://musescore.com/buckldav">buckldav</a></span>
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
    </Layout>
  )
}

export default MusicArrangements