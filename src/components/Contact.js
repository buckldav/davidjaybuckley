import React from 'react'

const Contact = props => (
  <section id="contact" className="grid-container margin-top-2">
    <div className="grid-x grid-margin-x">
      <div className="cell small-12 medium-6">
        <h3 className="accent-text">Contact Me</h3>
        <p>Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus. Mauris iaculis porttitor.</p>
        <ul className="menu">
          <li><a href="https://www.glassdoor.com">Glassdoor</a></li>
          <li><a href="https://www.linkedin.com/in/david-buckley-1aa4b8117/">LinkedIn</a></li>
          <li><a href="https://www.github.com/buckldav">GitHub</a></li>
        </ul>
      </div>
      <div className="cell small-12 medium-6">
        <label>Name
        <input type="text" placeholder="Name"/>
        </label>
        <label>Email
        <input type="text" placeholder="Email"/>
        </label>
        <label>
        Message
        <textarea placeholder="holla at a designer"></textarea>
        </label>
        <input type="submit" className="button expanded" value="Submit"/>
      </div>
    </div>
  </section>
)

export default Contact