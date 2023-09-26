import React, { useEffect } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

export default function Nav() {
  useEffect(function()
  {
           let links=document.querySelectorAll(".bnn");
           for(let i=0;i<links.length;i++)
           {
               links[i].addEventListener("click",function()
               {
                   links[i].style.cssText="background-color:#1abc9c; border-radius:8%; height:30px;";
                   for(let j=0;j<links.length;j++)
                   {
                    if(i!==j)
                    links[j].style.cssText="background-color:transparent; border-radius:0%;height:auto;";
                   }
               })
           }
  },[])
  
  return (
   
    <nav className="navbar navbar-expand-lg text-capitalize fixed-top" id="container-nav">
  <div class="container-fluid">
     <Link to="/home" className='text-light fs-1 fw-bolder text-white text-decoration-none ms-5'>start framework</Link>
       
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className={"navbar-toggler-icon"}></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
      <Link to="about" className='text-light fs-5 fw-bold text-decoration-none text-light text-white mx-3 bnn'>about</Link>
      <Link to="/contact" className='text-light fs-5 fw-bold text-decoration-none text-light text-white mx-3 bnn'>contact</Link>
      <Link to="/portofolio" className='text-light fs-5 fw-bold text-decoration-none  text-white mx-3 bnn'>portofolio</Link>
      </div>
    </div>
  </div>
</nav>

  )
}
