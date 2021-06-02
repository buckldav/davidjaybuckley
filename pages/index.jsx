import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import dynamic from "next/dynamic";
import Logo from "../components/Logo";
const Landing = dynamic(() => import("../components/Landing"), {
  ssr: false,
});

const Index = props => {
  return (
    <Landing>
      <Head>
        <title>David Buckley</title>
      </Head>
      <section className="col-3 center-h">
        <Logo />
        <h1 className="white-text" itemProp="givenName">David Buckley</h1>
        <img className="hide-for-medium" src="/img/portrait.png" width={200} alt="David Buckley" />
        <h5><Link href="/developer"><a className="top-nav" itemProp="jobTitle">Full Stack Developer</a></Link></h5>
        <p className="white-text">I do full stack web development for <span itemProp="worksFor">SpringMicro</span>. I build their infrastructure with React and Django. Check out some apps I've made!</p>
        <h5><Link href="/musician"><a className="top-nav" itemProp="jobTitle">Jazz Musician</a></Link></h5>
        <p className="white-text">I play guitar, piano, and bass for jazz and R&amp;B groups around <span itemProp="workLocation">Provo, Utah</span>. Listen to some of my compositions and arrangments!</p>
        <h5><Link href="/teacher"><a className="top-nav" itemProp="jobTitle">High School Teacher</a></Link></h5>
        <p className="white-text">I teach Computer Science and Jazz Band at <span itemProp="affiliation">Merit Preparatory Academy</span> in <span itemProp="workLocation">Springville, Utah</span>. I love helping youth develop their talents.</p>
      </section>
    </Landing>
  )
}

export default Index;