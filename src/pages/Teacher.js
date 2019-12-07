import React from 'react'
import Contact from '../components/Contact'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faGraduationCap, faGlobeAsia, faBolt, faHandsHelping, faFlask, faUsers, faFire, faSchool, faUserGraduate, faChalkboardTeacher, faGuitar, faUniversity, faCertificate, faListUl } from '@fortawesome/free-solid-svg-icons'

const TeacherSkills = () => (
  <div class="text-center">
    <h3 class="accent-text text-left margin-bottom-2">Skills and Qualifications</h3>
    <div class="grid-x grid-x-margin">
      <div class="small-12 medium-4 columns">
        <FontAwesomeIcon icon={faUniversity} />
        <h4>Education</h4>
        <p className="h5">Brigham Young University<br/><span className="text-xs">April 2018</span></p>
        <p className="margin-vertical-0">BS Physics Teaching<br/><span className="text-xs">GPA: 3.6, Academic Scholarship, Regents Scholarship</span></p>
        <p>Computer Science Teaching Minor<br/><span className="text-xs">GPA: 3.95</span></p>
      </div>
      <div class="small-12 medium-4 columns">
        <FontAwesomeIcon icon={faCertificate} />
        <h4>Certifications</h4>
        <p className="h5">USOE Endorsements</p>
        <ul className="list-style-none">
          <li>Secondary Education</li>
          <li>Computer Science Level 2</li>
          <li>Physics</li>
        </ul>
      </div>
      <div class="small-12 medium-4 columns">
        <FontAwesomeIcon icon={faListUl} />
        <h4>Notables</h4>
        <ul className="list-style-none">
          <li>5 years of experience teaching STEM</li>
          <li>2 years of experience teaching private music lessons</li>
          <li>Developed curricula for over 10 different courses</li>
          <li>Taught students from elementary to college-age</li>
        </ul>
      </div>
    </div>
  </div>
)

const TeacherPositions = () => (
  <div class="text-left">
    <h3 class="accent-text text-left margin-bottom-1">Current Positions</h3>
    <div className="grid-x grid-x-margin">
      <div className="small-12 medium-6 columns">
        <h4><a target="_blank" rel="noopener noreferrer" href="https://meritprepacademy.org">Merit Academy</a></h4>
        <p>Computer Science and Jazz Band Teacher <span className="text-xs padding-left-1">(Summer 2018 - now)</span></p>
        <ul>
          <li><b>CTE Department Chair</b> (1 year)</li>
          <li>Began the school's <b>TSA Chapter</b>, serving as Chapter Leader.</li>
          <li>Began the <b>band program from scratch</b>, now over 20 students enrolled in band.</li>
          <li>Began the <b>computer science program from scratch</b>, now 9 varieties of CS courses offered.</li>
          <li><b>100% pass rate</b> for AP CS A and AP CS Principles.</li>
          <li>Learn more about my programs at <a target="_blank" rel="noopener noreferrer" href="https://meritacademy.tech">meritacademy.tech</a>.</li>
        </ul>
      </div>
      <div className="small-12 medium-6 columns">
        <h4><a target="_blank" rel="noopener noreferrer" href="https://www.uvu.edu/partnership/prep/">UVU Prep</a></h4>
        <p>Summer Computer Science Teacher <span className="text-xs padding-left-1">(Summer 2019 - now)</span></p>
        <ul>
          <li>Former experience in program as a Physics TA, <b>asked to come back</b> as a full-time teacher.</li>
          <li>Took existing curriculum and <b>adapted lessons</b> to the situation.</li>
          <li><b>Collaborated</b> with other summer CS teachers to enhance said curriculum.</li>
          <li>Took middle school students from no coding experience to independently <b>coding in Python in six weeks</b>. See their 
            projects at <a target="_blank" rel="noopener noreferrer" href="https://uvuprep.netlify.com">uvuprep.netlify.com</a>.</li>
        </ul>
      </div>
    </div>
  </div>
)

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
    <h3 class="accent-text text-left margin-bottom-1">Timeline</h3>

    <TimelineItem
      right
      year={2019} 
      icon={<FontAwesomeIcon icon={faCode} />}
      content={<>
        Became the UVU Prep CS Teacher (see above)
      </>} 
    />

    <TimelineItem
      month="august"
      year={2018} 
      icon={<FontAwesomeIcon icon={faChalkboardTeacher} />}
      content={<>
        Started at Merit Academy in Springville, UT (see above)
      </>} 
    />

    <TimelineItem
      right
      month="june"
      year={2018} 
      icon={<FontAwesomeIcon icon={faGuitar} />}
      content={<>
        Answered a last minute email from <a target="_blank" rel="noopener noreferrer" href="https://www.uvu.edu/partnership/prep/">UVU Prep</a> asking for a Physics TA the next day. Joining that program has been life-changing.<br/>
        I also began my own <a href="/music/lessons">private summer music lessons</a>, teaching guitar and piano. My wife, Tianna has since joined me and is teaching voice lessons.
      </>} 
    />

    <TimelineItem
      month="april"
      year={2018} 
      icon={<FontAwesomeIcon icon={faUserGraduate} />}
      content={<>
        I graduated from BYU in with my <a target="_blank" rel="noopener noreferrer" href="https://catalog.byu.edu/physical-and-mathematical-sciences/physics-and-astronomy/physics-education-bs">BS Physics Teaching</a> with a 
        minor in <a target="_blank" rel="noopener noreferrer" href="https://catalog.byu.edu/physical-and-mathematical-sciences/computer-science/computer-science-teaching-minor">Computer Science Teaching</a>. Only slightly off from my original plan of being a physics professor.
      </>} 
    />

    <TimelineItem
      right
      month="january"
      year={2018} 
      icon={<FontAwesomeIcon icon={faSchool} />}
      content={<>
        I student taught twice. First at <a target="_blank" rel="noopener noreferrer" href="https://ths.alpineschools.org/">Timpanogos High School</a> under Clint Goldman 
        teaching physics, second at <a target="_blank" rel="noopener noreferrer" href="https://pghs.alpineschools.org/">Pleasant Grove High School</a> under Audra Yocom teaching computer science. 
        It was actually kind of a nightmare to organize all of that.
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
      <TeacherPositions />
    </section>
    <section className="grid-container margin-vertical-1">
      <TeacherTimeline />
    </section>
    <hr/>
    <Contact
      subject="Teacher"
      placeholder="Ask me anything"
      message="Get in touch with me about teaching, tutoring, or anything related."
    />
  </main>
)

export default Teacher