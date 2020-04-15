import React from 'react';
import './Resume.css';
import resumefile from './files/melanieresume2019.jpg';


function Resume() {
  return (
    <div className="Resume">
        <div className="wrapper">
            <div className="main">
              <h1> Resume: </h1> 
              <a href={resumefile} download>Download Mel's Resume</a>
                {/* <div className="skills">
                  <h3>Skills</h3>
                  <ul>
                    <li>
                      <span></span>
                      <strong>Front End: </strong>React, Angular, TypeScript, JavaScript
                    </li>
                    <li><strong>Design: </strong> Figma, Prototyping, Wireframes</li>
                    
                  </ul>
                </div>
                <div className="experience">
                  <h3>Work Experience</h3>
                  <ul>
                    <li> <strong>Microsoft </strong>Software Engineer</li>
                    <li> <strong>Microsoft </strong>Data and AI Technical Specalist</li>
                    <li> <strong>WIOD </strong>Student Developer</li>
                  </ul>
                </div>
                <div className="education">
                  <h3>Education</h3>
                  <ul>
                    <li> <strong>UCU Boulder </strong>(In Progress) Masters Computer Sciences</li>
                    <li> <strong>UW Madison </strong>B.S. Computer Sciences</li>
                  </ul>
                </div> */}
            </div>
        </div>
    </div>
  );
}

export default Resume;
