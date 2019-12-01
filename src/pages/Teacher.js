import React from 'react'
import Contact from '../components/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGraduationCap, faGlobeAsia, faBolt, faHandsHelping, faFlask, faUsers, faFire, faSchool, faUserGraduate, faChalkboardTeacher, faGuitar, faUniversity, faCertificate, faListUl } from '@fortawesome/free-solid-svg-icons'


const TimelineItem = props => {
  const contentClass = props.right ? "timeline-content right" : "timeline-content";
  const date = props.month ? <>{props.year} - <span className="timeline-content-month">{props.month}</span></> : props.year;
  return(
    <div className="timeline-item">
      <div className="timeline-icon">
        {props.icon}
      </div>
      <div className={contentClass}>
        <p className="timeline-content-date">{date}</p>
        <p>{props.content}</p>
      </div>
    </div>
  )
}

const TeacherTimeline = () => (
  <div className="timeline">

    <TimelineItem
      right
      year={2019} 
      icon={<FontAwesomeIcon icon={faCode} />}
      content={<>
        UVU Prep CS
      </>} 
    />

    <TimelineItem
      month="august"
      year={2018} 
      icon={<FontAwesomeIcon icon={faChalkboardTeacher} />}
      content={<>
        Started at Merit
      </>} 
    />

    <TimelineItem
      right
      month="june"
      year={2018} 
      icon={<FontAwesomeIcon icon={faGuitar} />}
      content={<>
        UVU Prep and Music Lessons
      </>} 
    />

    <TimelineItem
      month="april"
      year={2018} 
      icon={<FontAwesomeIcon icon={faUserGraduate} />}
      content={<>
        Graduation
      </>} 
    />

    <TimelineItem
      right
      month="january"
      year={2018} 
      icon={<FontAwesomeIcon icon={faSchool} />}
      content={<>
        Student Teaching
      </>} 
    />

    <TimelineItem
      year={2017} 
      icon={<FontAwesomeIcon icon={faFire} />}
      content={<>
        At BYU, I worked as a Demostrations Assistant and <a target="_blank" rel="noopener noreferrer" href="https://www.physics.byu.edu/clubs/sps/xpic_outreaches.aspx">Outreach Coordinator</a> where I maintained and operated hundreds of physics demonstrations. I loved doing science shows for kids.
      </>} 
    />

    <TimelineItem
      right 
      year={2017} 
      icon={<FontAwesomeIcon icon={faFlask} />}
      content={<>
        As a Research Assistant at BYU, I developed numerical models and MATLAB software that simulated the motion of <a target="_blank" rel="noopener noreferrer" href="http://www.physics.usyd.edu.au/~wheat/slinky/">Slinkys</a>.  
      </>} 
    />

    <TimelineItem 
      month="july"
      year={2016} 
      icon={<FontAwesomeIcon icon={faUsers} />}
      content={<>
        Was a Youth Counselor for the summer program <a target="_blank" rel="noopener noreferrer" href="https://efy.byu.edu/home">Especially For Youth (EFY)</a> where I taught and managed high-schoolers.
      </>} 
    />

    <TimelineItem 
      right
      year={2016} 
      icon={<FontAwesomeIcon icon={faHandsHelping} />}
      content={<>
        Became a Teaching Assistant in the <a target="_blank" rel="noopener noreferrer" href="https://www.physics.byu.edu/">BYU Physics Department</a>, tutoring 
        underclassmen in mechanics, thermodynamics, electricity, physical science, and programming.
      </>} 
    />

    <TimelineItem
      month="august" 
      year={2013} 
      icon={<FontAwesomeIcon icon={faGlobeAsia} />}
      content={<>
        Served a 2-year volunteer mission for the <a target="_blank" rel="noopener noreferrer" href="https://www.churchofjesuschrist.org/">Church of Jesus Christ of Latter-Day Saints</a> in the Philippines.
        I learned to speak Cebuano (Bisaya) and taught people about Jesus Christ. I routinely led training meetings for my peers about teaching skills.
      </>} 
    />

    <TimelineItem 
      right
      year={2013} 
      icon={<FontAwesomeIcon icon={faBolt} />}
      content={<>
        Taught fifth graders at <a target="_blank" rel="noopener noreferrer" href="https://centennial.alpineschools.org/">Scera Park (Centennial) Elementary</a> a unit on electricity and hosted a science fair.
      </>} 
    />

    <TimelineItem
      year={2012} 
      icon={<FontAwesomeIcon icon={faGraduationCap} />}
      content={<>
        Graduated from <a target="_blank" rel="noopener noreferrer" href="https://ohs.alpineschools.org/">Orem High School</a> with Honors. 
        As president of the Engineering Club, I devised activities for my peers to teach problem solving.
        In the fall, I enrolled in <a target="_blank" rel="noopener noreferrer" href="https://www.byu.edu">Brigham Young University</a> as a Physics major.
      </>} 
    />

  </div>
)

const TeacherSkills = () => (
  <div class="text-center">
    <h3 class="accent-text text-left margin-bottom-2">Skills and Qualifications</h3>
    <div class="grid-x grid-x-margin">
      <div class="small-12 medium-4 columns">
        <FontAwesomeIcon icon={faUniversity} />
        <h4 class="marketing-site-three-up-title">Education</h4>
        <p className="h5">Brigham Young University<br/><span className="text-xs">April 2018</span></p>
        <p className="margin-vertical-0">BS Physics Teaching<br/><span className="text-xs">GPA: 3.6, Academic Scholarship, Regents Scholarship</span></p>
        <p>Computer Science Teaching Minor<br/><span className="text-xs">GPA: 3.95</span></p>
      </div>
      <div class="small-12 medium-4 columns">
        <FontAwesomeIcon icon={faCertificate} />
        <h4 class="marketing-site-three-up-title">Certifications</h4>
        <p className="h5">USOE Endorsements</p>
        <ul className="list-style-none">
          <li>Secondary Education</li>
          <li>Computer Science Level 2</li>
          <li>Physics</li>
        </ul>
      </div>
      <div class="small-12 medium-4 columns">
        <FontAwesomeIcon icon={faListUl} />
        <h4 class="marketing-site-three-up-title">Notables</h4>
        <ul className="list-style-none">
          <li>5 years of experience teaching STEM</li>
          <li>2 years of experience teaching private music lessons</li>
          <li>Developed curricula for over 10 different courses</li>
        </ul>
      </div>
    </div>
  </div>
)

const Teacher = () => (
  <main role="main" id="teacher">
    <section className="grid-container margin-top-1">
      <div className="grid-x grid-margin-x">
        <div className="cell small-12">
          <h1 className="accent-text">Teacher</h1>
          <p className="margin-0">
            <span>I just want to share my knowledge and help others.</span>
          </p>
        </div>
      </div>
    </section>
    <section className="grid-container margin-vertical-1">
      <TeacherSkills />
    </section>
    <section className="grid-container margin-vertical-1">
      <TeacherTimeline />
    </section>
    <hr/>
    <Contact />
  </main>
)

export default Teacher