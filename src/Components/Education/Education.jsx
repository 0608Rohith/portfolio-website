import React from 'react'
import './Education.css'
import theme_pattern from '../../assets/back.png'
import Education_Data from '../../assets/education_data'
// import arrow_icon from '../../assets/arrow_icon.svg'

const Education = () => {
  return (
    <div id='education' className='education'>
      <div className="title-box">
        <h1>Education</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="education-container">
        {Education_Data.map((education,index)=>{
          return <div key={index} className='education-format'>
             <h3>{education.e_no}</h3>
             <h2>{education.e_name}</h2>
             <p>{education.e_desc}</p>
             <p>{education.e_year}</p>
             <div className='education-readmore'>
              {/* <p>Read More</p>
              <img src={arrow_icon} alt="" /> */}
             </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Education
