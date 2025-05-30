import React from 'react'
import './About.css'
import theme_pattern from '../../assets/back.png'
import profile_img from '../../assets/profile1.png'


const About = () => {
  return (
    <div id='about' className='about'>
      <div className="title-box">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-right">
            <div className="about-para">
                <p>I'm a recent Computer Science graduate with a strong foundation in web development, problem-solving, and UI/UX design. I enjoy transforming complex problems into elegant, efficient solutions and collaborating with others to build better products.</p>
            </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"50%"}} /></div>
                <div className="about-skill"><p>JavaScript</p><hr style={{width:"70%"}} /></div>
                <div className="about-skill"><p>React JS </p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>Java</p><hr style={{width:"60%"}} /></div>
                <div className="about-skill"><p>MySql</p><hr style={{width:"70%"}} /></div>
            </div>
        </div>
      {/* </div>
      <div className="about-achievements">
        <div className="about-achievement">
            <h1>10+</h1>
            <p>YEARS OF EXPERIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>90+</h1>
            <p>PROJECTS COMPLETED</p>
        </div>
        <hr />
        <div className="about-achievement">
            <h1>15+</h1>
            <p>HAPPY CLIENTS</p>
        </div> */}
      </div>
    </div>
  )
}

export default About
