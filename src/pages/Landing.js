import React from 'react';
import Logo from '../components/Logo';

class Landing extends React.Component {
  state = {
    animateClass: "",
    animateDone: false,
    imgDisplay: {display: "none"}
  }

  animationEndStyle() {
    this.setState({animateClass: " slant-animation-after"});
  }

  componentDidMount() {
    if (!this.state.animateDone) {
      this.setState({
        animateClass: " slant-animation-auto",
        animateDone: true
      });
    }
  }
  
  render() {
    return (
      <div id="top" className={"flex" + this.state.animateClass} onAnimationEnd={this.animationEndStyle.bind(this)}>
        <section className="col-2 center-h">
          <img src={window.location.origin + "/img/portrait.png"} width={300} alt="David Buckley" style={this.state.imgDisplay} onLoad={() => this.setState({imgDisplay: {}})} />
        </section>
        <section className="col-3 center-h">
          <Logo />
          <h1 className="white-text">David Buckley</h1>
          <img className="hide-for-medium" src={window.location.origin + "/img/portrait.png"} width={200} alt="David Buckley" />
          <h5><a href="/developer" className="top-nav">Web Developer</a></h5>
          <h5><a href="/musician" className="top-nav">Jazz Musician</a></h5>
          <h5><a href="/teacher" className="top-nav">High School Teacher</a></h5>
        </section>
      </div>
    )
  }
}

export default Landing;