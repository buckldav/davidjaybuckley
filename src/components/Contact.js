import React from 'react'
import isEmail from 'validator/lib/isEmail';

const encode = (data) => {
  return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
}

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", email: "", message: "", subject: props.subject };
  }

  /* Here’s the juicy bit for posting the form submission */

  handleSubmit = e => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...this.state })
    })
      .then(() => {
        alert("Email sent. Please allow 24 hours for a reply.")
      })
      .catch(error => console.log(error));

    e.preventDefault();
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { name, email, message, subject } = this.state;
    const isDisabled = () => (
      name === "" || message === "" || !isEmail(email)
    )
    return (
      <form onSubmit={this.handleSubmit} netlify-honeypot="bot-field" data-netlify="true" name="contact">
        <p style={{display: "none"}}>
          <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
          <label>
            Subject<br />
            <input type="text" name="subject" readOnly value={subject} />
          </label>
        </p>
        <p>
          <label>
            Name<br /> 
            <input type="text" name="name" value={name} placeholder="Name" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Email<br />
            <input type="email" name="email" value={email} placeholder="Email" onChange={this.handleChange} />
          </label>
        </p>
        <p>
          <label>
            Message<br />
            <textarea rows={4} name="message" value={message} placeholder={this.props.placeholder} onChange={this.handleChange} />
          </label>
        </p>
        <button type="submit" className="button expanded margin-0" disabled={isDisabled()}>Submit</button>
      </form>
    );
  }
}

const Contact = props => (
  <section id="contact" className="grid-container margin-vertical-2">
    <div className="grid-x grid-margin-x">
      <div className="cell small-12 medium-6">
        <h3 className="accent-text">Contact Me</h3>
        <p className="show-for-medium">
          My name is David Buckley and I'm passionate about what I do. I've never felt like I could be put in a box.
          I've just spent my time pursuing what I love and seeing where it takes me.
        </p>
        <p>{props.message}</p>
        <ul className="menu">
          <li><a href="https://www.linkedin.com/in/buckldav">LinkedIn</a></li>
          <li>{props.button2 ? props.button2 : <a href="https://www.github.com/buckldav">GitHub</a>}</li>
        </ul>
      </div>
      <div className="cell small-12 medium-6">
        <ContactForm 
          subject={props.subject}
          placeholder={props.placeholder}
        />
      </div>
    </div>
    <h6 className="subheader text-center margin-vertical-2">&copy; David Buckley 2020</h6>
  </section>
)

export default Contact