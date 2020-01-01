import React from 'react'
import Logo from '../components/Logo'

const Error404 = () => (
  <>
    <main className="text-center padding-2" role="main" id="musician">
      <h1 className="accent-text">404 Error</h1>
      <p className="lead">Aw, nuts, no page here. Try one of these:</p>
      <Logo />
      <h5><a href="/developer">Web Developer</a></h5>
      <h5><a href="/musician">Jazz Musician</a></h5>
      <h5><a href="/teacher">High School Teacher</a></h5>
    </main>
    <h6 className="subheader margin-vertical-2" style={{"position": "absolute", "bottom": "0", "left": "50%", "transform": "translateX(-50%)"}}>&copy; David Buckley 2020</h6>
  </>
)

export default Error404