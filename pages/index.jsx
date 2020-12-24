import Head from 'next/Head';
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
        <h1 className="white-text">David Buckley</h1>
        <img className="hide-for-medium" src="/img/portrait.png" width={200} alt="David Buckley" />
        <h5><a href="/developer" className="top-nav">Full Stack Developer</a></h5>
        <h5><a href="/musician" className="top-nav">Jazz Musician</a></h5>
        <h5><a href="/teacher" className="top-nav">High School Teacher</a></h5>
      </section>
    </Landing>
  )
}

export default Index;