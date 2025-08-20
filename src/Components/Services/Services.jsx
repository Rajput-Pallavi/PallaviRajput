import React from 'react'
import './Services.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_data from '../../assets/services_data'


const Services = () => {
  return (
    <div id="services" className='services'>
        <div className="services-title">
            <h1>MY Services</h1>
             <img src={theme_pattern} alt="" />
        </div>
     
      <div className="services-container">
        {Services_data.map((services,index)=>{
          return <div key={index} className='services-format'>
                 <h3>{services.s_no}</h3>
                 <h2>{services.s_name}</h2>
                 <p>{services.s_desc}</p>
                 <div className='services-readmore'>
                 
                  
                 </div>
          </div>
        })}

      </div>
    </div>
  )
}

export default Services
