import React from 'react'
import './about.css'
export default function About() {
  return (
        <div className='about px-5 mt-5'>
             <div className='about-one d-flex flex-row flex-wrap justify-content-center align-items-center align-content-center w-100 text-center mb-3'>
              <h2 className='fs-2 fw-bold w-100 text-center'>ABOUT COMPONENT</h2>
              <div className='shape d-flex flex-row flex-nowrap justify-content-center align-content-center align-items-center'>
              <div className='l'></div>
              <i className="fa-solid fa-star fs-4 text-white"></i>
              <div className='l'></div>
              </div>
             </div>
             <div className='about-two  me-3'>
                 <h5>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h5>
              </div>
              <div className='about-three'>
               <h5>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</h5>
              </div>

        </div>
  )
}
