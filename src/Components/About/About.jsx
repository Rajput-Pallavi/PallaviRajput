import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import img from '../../assets/img7.png'

const About = () => {
  return (
    <div id="about" className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-sections">
        <div className="about-left">
            <img src={img} alt="" />
        </div>
        <div className="about-right">
            <div class="about-container">
              <p>
                 "I'm a frontend developer who turns ideas into beautiful, interactive web experiences.  
                     I love blending code and creativity to design websites that feel alive. Curious, motivated,  
                    and always experimenting, I aim to make every project unique and memorable."
                     </p>
                       </div>
            <div className="about-skills">
                <div className="about-skill"><p>HTML</p><hr style={{width:"100%"}}></hr></div>
                 <div className="about-skill"><p> CSS</p><hr style={{width:"90%"}}></hr></div>
                  <div className="about-skill"><p>js</p><hr style={{width:"50%"}}></hr></div>
                   <div className="about-skill"><p>react</p><hr style={{width:"60%"}}></hr></div>
            </div>
            </div>
            </div>
            <div className='about-achivements'>
                <div className="about-achivevement">
                    <h1>2</h1>
                    <p>Years of Experince</p>
                </div>
                <hr />
                <div className="about-achivevement">
                    <h1>2</h1>
                    <p>projects completed</p>
                </div>
                <hr />
                 <div className="about-achivevement">
                    <h1>0</h1>
                    <p>Happy clintes</p>
                </div>
            </div>
            </div>
        
  )
}

export default About
