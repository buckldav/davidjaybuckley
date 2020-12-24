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
        <h1 className="white-text">David Buckley</h1>
        <img className="hide-for-medium" src="/img/portrait.png" width={200} alt="David Buckley" />
        <h5><Link href="/developer"><a className="top-nav">Full Stack Developer</a></Link></h5>
        <h5><Link href="/musician"><a className="top-nav">Jazz Musician</a></Link></h5>
        <h5><Link href="/teacher"><a className="top-nav">High School Teacher</a></Link></h5>
      </section>
    </Landing>
  )
}

export default Index;