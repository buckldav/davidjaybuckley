import React, { useState } from 'react';

const Landing = props => {
  const [animation, setAnimation] = useState({
    className: "",
    done: false,
    style: {
      display: "none"
    }
  });

  return (
    <div 
      id="top" 
      className={"flex" + animation.className} 
      onAnimationEnd={() => { 
        const { className, ...rest } = animation
        setAnimation({
          ...rest, 
          className: " slant-animation-after" 
        }) 
      }} 
      style={animation.style}
    >
      <section className="col-2 center-h">
        <img 
          src="/img/portrait.png" 
          width={300} 
          alt="David Buckley" 
          onLoad={() => {
            if (!animation.done) {
              setAnimation(({
                className: " slant-animation-auto",
                done: true,
                style: {}
              }))
            }
          }}   
        />
      </section>
      { props.children }
    </div>
  )
}

export default Landing;