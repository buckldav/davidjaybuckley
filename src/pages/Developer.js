import React from 'react'
import Contact from '../components/Contact'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpaceShuttle, faTh, faHandshake, faFastForward, faCode, faMobile } from '@fortawesome/free-solid-svg-icons'

const iconClasses = icon => (icon + " cell small-2 medium-4 large-auto padding-vertical-1 text-center")

const SpringMicro = {
  link: <a href="https://springmicro.com">springmicro.com</a>,
  header: <>SpringMicro</>, 
  tech: <>
          <i className={iconClasses("devicon-django-plain")}></i><i className={iconClasses("devicon-bootstrap-plain-wordmark")}></i>
          <i className={iconClasses("devicon-sass-original")}></i><i className={iconClasses("devicon-jquery-plain-wordmark")}></i>
          <i className={iconClasses("devicon-nginx-original")}></i><i className={iconClasses("devicon-bitbucket-plain-wordmark")}></i>
        </>
}

const MeritAcademy = {
  link: <a href="https://meritacademy.tech">meritacademy.tech</a>,
  header: <>Merit Academy Technology</>, 
  tech: <>
          <i className={iconClasses("devicon-django-plain")}></i><i className={iconClasses("devicon-postgresql-plain-wordmark")}></i>
          <i className={iconClasses("devicon-react-plain-wordmark")}></i><i className={iconClasses("devicon-less-plain-wordmark")}></i>
          <i className={iconClasses("devicon-heroku-plain-wordmark")}></i>
        </>
}

const HandMeDown = {
  link: <a href="https://handmedownexperience.com">handmedownexperience.com</a>,
  header: <>Hand-Me-Down Experience</>, 
  tech: <>
          <i className={iconClasses("devicon-php-plain")}></i><i className={iconClasses("devicon-wordpress-plain-wordmark")}></i>
          <i className={iconClasses("devicon-mysql-plain-wordmark")}></i><i className={iconClasses("devicon-css3-plain-wordmark")}></i>
          <i className={iconClasses("devicon-javascript-plain")}></i>
        </>
}

const TheGuests = {
  link: <a href="https://theguests.band">theguests.band</a>,
  header: <>The Guests</>, 
  tech: <>
          <i className={iconClasses("devicon-react-original-wordmark")}></i><i className={iconClasses("devicon-sass-original")}></i>
          <i className={iconClasses("devicon-jquery-plain-wordmark")}></i>
        </>
}

const Portfolio = {
  link: <a href="https://davidbuckley.me">davidbuckley.me</a>,
  header: <>My Portfolio</>, 
  tech: <>
          <i className={iconClasses("devicon-react-original-wordmark")}></i><i className={iconClasses("devicon-sass-original")}></i>
          <i className={iconClasses("devicon-foundation-plain-wordmark")}></i>
        </>
}

const AppFeature = props => (
  <section class="grid-container margin-vertical-1">
    <div class="grid-x grid-margin-x">
      <div class="cell small-12 medium-4 show-for-medium">
        <div class="grid-container full">
          <img src="https://placehold.it/640x400" alt="" />
          <div class="grid-x">{props.data.tech}</div>
        </div>
      </div>

      <div class="cell small-12 medium-8">
        <h4>{props.data.link}</h4>
        <h3>{props.data.header}</h3>
        <div class="grid-container full">
          <img class="hide-for-medium" src="https://placehold.it/640x400" alt="" />
          <div class="grid-x hide-for-medium">{props.data.tech}</div>
          <div class="grid-x">
            <div class="cell small-12 medium-6 app-detail-padding">
              <h5>Summary</h5>
              <p>This is a web hosting site that blah blah blah</p>
            </div>
            <div class="cell small-12 medium-6 app-detail-padding">
              <h5>Features</h5>
              <ul>
                <li>User registration and login</li>
                <li>Payment system with PayPal and Credit Card options</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* <div class="app-feature-section-features">
          <div class="app-feature-section-features-block">
            <FontAwesomeIcon icon={faSpaceShuttle} aria-hidden="true" />&nbsp;<span>Advanced</span>
          </div>
          <div class="app-feature-section-features-block">
            <FontAwesomeIcon icon={faTh} aria-hidden="true" />&nbsp;<span>Modular</span>
          </div>
          <div class="app-feature-section-features-block">
            <FontAwesomeIcon icon={faHandshake} aria-hidden="true" />&nbsp;<span>No Conflicts</span>
          </div>
          <div class="app-feature-section-features-block">
            <FontAwesomeIcon icon={faFastForward} aria-hidden="true" />&nbsp;<span>Build Fast</span>
          </div>
          <div class="app-feature-section-features-block">
            <FontAwesomeIcon icon={faCode} aria-hidden="true" />&nbsp;<span>Clean Code</span>
          </div>
          <div class="app-feature-section-features-block">
            <FontAwesomeIcon icon={faMobile} aria-hidden="true" />&nbsp;<span>Responsive</span>
          </div>
        </div> */}
      </div>
    </div>
  </section>
)

const Developer = () => (
  <main role="main">
    <section className="grid-container margin-vertical-1">
      <div className="grid-x grid-margin-x">
        <div className="cell small-12">
          <h1>Developer</h1>
          <p>I like building websites and progressive web apps. Here are some things I've made:</p>
        </div>
      </div>
    </section>
    <AppFeature data={SpringMicro} />
    <AppFeature data={MeritAcademy} />
    <AppFeature data={HandMeDown} />
    <AppFeature data={TheGuests} />
    <AppFeature data={Portfolio} />
    <hr/>
    <Contact />
  </main>
)

export default Developer