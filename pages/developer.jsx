import Head from 'next/head';
import React from 'react'
import Contact from '../components/Contact'
import dynamic from 'next/dynamic';
const Layout = dynamic(() => import('../components/Layout'), {
  ssr: false
});

const iconClasses = icon => (icon + " cell small-2 medium-4 large-auto padding-vertical-1 text-center")

const SpringMicro = {
  imgPath: "/img/dev/springmicro.png",
  link: <a href="https://springmicro.com">springmicro.com</a>,
  header: <>SpringMicro</>, 
  tech: <>
          <i className={iconClasses("devicon-django-plain")}></i><i className={iconClasses("devicon-postgresql-plain-wordmark")}></i>
          <i className={iconClasses("devicon-bootstrap-plain-wordmark")}></i><i className={iconClasses("devicon-sass-original")}></i>
          <i className={iconClasses("devicon-react-original")}></i><i className={iconClasses("devicon-webpack-plain")}></i>
        </>,
  summary: <>SpringMicro is a web hosting and software solutions company. I built and maintain their site to allow users to purchase products, manage hosting plans, and communicate with tech support.</>,
  features: [
    <li>User registration and login system</li>,
    <li>PCI compliant credit card transaction system design and implementation</li>,
    <li>Relational database design and implementation using PostgreSQL</li>,
    <li>Custom Webpack, React, and NextJS configurations</li>,
    <li>Responsive design using Bootstrap and SCSS</li>,
    <li>Full stack development including REST API (Django Rest Framework)</li>,
  ]
}

const MeritAcademy = {
  imgPath: "/img/dev/meritacademy.png",
  link: <a href="https://meritacademy.tech">meritacademy.tech</a>,
  header: <>Merit Academy Technology</>, 
  tech: <>
          <i className={iconClasses("devicon-django-plain")}></i><i className={iconClasses("devicon-postgresql-plain-wordmark")}></i>
          <i className={iconClasses("devicon-react-plain-wordmark")}></i><i className={iconClasses("devicon-less-plain-wordmark")}></i>
          <i className={iconClasses("devicon-heroku-plain-wordmark")}></i>
        </>,
  summary: <>This is a classroom site for the high school classes I teach. I configured Django's admin interface to help me add assignments and events. I also host student projects including WebGL games.</>,
  features: [
    <li>React.js + REST API + Django + Heroku</li>,
    <li>Relational database design and implementation using PostgreSQL</li>,
    <li>Responsive design using <a target="_blank" rel="noopener noreferrer" href="https://ant.design">ant.design</a> and .less variables</li>,
  ]
}

const HandMeDown = {
  imgPath: "/img/dev/hmde.png",
  link: <a href="https://handmedownexperience.com">handmedownexperience.com</a>,
  header: <>Hand-Me-Down Experience</>, 
  tech: <>
          <i className={iconClasses("devicon-php-plain")}></i><i className={iconClasses("devicon-wordpress-plain-wordmark")}></i>
          <i className={iconClasses("devicon-mysql-plain-wordmark")}></i><i className={iconClasses("devicon-css3-plain-wordmark")}></i>
          <i className={iconClasses("devicon-javascript-plain")}></i>
        </>,
  summary: <>Hand-Me-Down Experience is a WordPress travel blog. I created their WP Theme from scratch using PHP and helped them lower their costs and dependencies on third parties.</>,
  features: [
    <li>PHP backend configuration for WordPress</li>,
    <li>Custom responsive theme built on <a target="_blank" rel="noopener noreferrer" href="https://underscores.me/">underscores</a></li>,
    <li>Search Engine Optimization</li>,
  ]
}

const TheGuests = {
  imgPath: "/img/dev/theguests.png",
  link: <a href="https://sharp-swartz-29ae88.netlify.app/">theguests.band</a>,
  header: <>The Guests</>, 
  tech: <>
          <i className={iconClasses("devicon-react-original-wordmark")}></i><i className={iconClasses("devicon-jquery-plain-wordmark")}></i>
          <i className={iconClasses("devicon-sass-original")}></i><i className={iconClasses("devicon-html5-plain-wordmark")}></i>
        </>,
  summary: <>A static website for my jazz/funk band, The Guests. I built the site to advertise our music and enable booking.</>,
  features: [
    <li>Custom HTML5 video player</li>,
    <li>Serverless contact form</li>,
    <li><a target="_blank" rel="noopener noreferrer" href="https://www.netlify.com/">Netlify</a> static hosting, <a target="_blank" rel="noopener noreferrer" href="https://www.zoho.com/">Zoho</a> email</li>,
    <li>Responsive design using SCSS</li>,
  ]
}

const Portfolio = {
  imgPath: "/img/dev/this.png",
  link: <a href="https://davidjaybuckley.com">davidjaybuckley.com</a>,
  header: <>My Portfolio</>, 
  tech: <>
          <i className={iconClasses("devicon-react-original-wordmark")}></i><i className={iconClasses("devicon-sass-original")}></i>
          <i className={iconClasses("devicon-foundation-plain-wordmark")}></i>
        </>,
  summary: <pre>
def get_summary(self):<br/>
&nbsp;&nbsp;return self</pre>,
  features: [
    <li>Serverless contact form</li>,
    <li>Netlify static hosting</li>,
    <li>Responsive design using Foundation and SCSS</li>,
  ]
}

const AppFeature = props => (
  <section className="grid-container margin-top-1 margin-bottom-2">
    <div className="grid-x grid-margin-x">
      <div className="cell small-12 medium-4 show-for-medium">
        <div className="grid-container full">
          <img className="shadow" src={props.data.imgPath} alt={props.data.header} />
          <div className="grid-x">{props.data.tech}</div>
        </div>
      </div>

      <div className="cell small-12 medium-8">
        <h4>{props.data.link}</h4>
        <h3 className="accent-text">{props.data.header}</h3>
        <div className="grid-container full">
          <img className="shadow hide-for-medium" src={props.data.imgPath} alt={props.data.header} />
          <div className="grid-x hide-for-medium">{props.data.tech}</div>
          <div className="grid-x">
            <div className="cell small-12 medium-6 app-detail-padding">
              <h5 className="subheader">Features I Implemented</h5>
              <ul>
                {props.data.features.map(val => val)}
              </ul>
            </div>
            <div className="cell small-12 medium-6 app-detail-padding">
              <h5 className="subheader">Summary</h5>
              <p>{props.data.summary}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Developer = () => (
  <Layout>
    <Head>
      <title>David Buckley | Full Stack Developer</title>
    </Head>
    <main role="main" id="developer">
      <section className="grid-container margin-vertical-1">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12">
            <h1 className="accent-text">Full Stack Developer</h1>
            <p>
              <span>Django and React.js are pretty fun.</span>
            </p>
          </div>
        </div>
      </section>
      <AppFeature data={SpringMicro} />
      <AppFeature data={MeritAcademy} />
      <AppFeature data={HandMeDown} />
      <AppFeature data={TheGuests} />
      <AppFeature data={Portfolio} />
      <hr/>
      <Contact
        subject="Development"
        placeholder="Message"
        message="Get in touch if you'd like to commission me for a site/app or ask any other questions."
      />
    </main>
  </Layout>
)

export default Developer