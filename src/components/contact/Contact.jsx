import React, { useEffect } from 'react'
import './contact.css'
export default function Contact() {
    useEffect( function()
    { 
     
          let label=document.querySelectorAll("label");
          for(let i=0;i<label.length;i++)
          {
            label[i].style.display="none";
                    }
            let inputs=document.querySelectorAll("input");
            for(let i=0;i<inputs.length;i++)
            {
                    inputs[i].addEventListener("keyup",function()
                    {
                          if(inputs[i].value=="")
                          {
                            inputs[i].previousElementSibling.style.display="none";
                          }
                          else{
                            inputs[i].previousElementSibling.style.display="block";
                          } 
                    })
            }
    },[])
    
  return (
    <>
    <div className='er'>
     <div className='ghj w-100 text-center d-flex flex-row flex-wrap justify-content-center align-content-center align-items-center mt-5 pt-2'>
    <h3 className='text-center text-black w-100'>CONATCT SECTION</h3>
      <div className='ty'>

      </div>
      <i class="fa-solid fa-star"></i>
      <div className='ty'>

      </div>
    </div>
  
    <form className=' w-100 px-5 mt-5 d-flex flex-row justify-content-center align-items-center align-content-center mb-4'>
    <div className=' mt-5 d-flex flex-wrap flex-row flex-wrap justify-content-start align-items-center align-content-center'>
       <div className='in-con w-100 mb-4'>
        <label htmlFor='in-one' className='w-100 lb'>useraName:</label>
        <input type='text' placeholder='your name' id='in-one' className='w-100  border-0 border-bottom-2 rounded-2 border-info'/>
        <hr className='w-100  border-2'></hr>
       </div>
    
       <div className='in-con w-100 mb-4'>
        <label htmlFor='in-two' className='w-100 lb'>userAge:</label>
        <input type='text' placeholder='your age' id='in-two' className='w-100 border-0 border-bottom-2 rounded-2'/>
        <hr className='w-100  border-2'></hr>
       </div>
       <div className='in-con w-100 mb-4'>
        <label htmlFor='in-three' className='w-100 lb'>userEmail :</label>
        <input type='text' placeholder='your mail' id='in-three' className='w-100 border-0 border-bottom-2 rounded-2'/>
        <hr className='w-100  border-2'></hr>
       </div>
       <div className='in-con w-100'>
        <label htmlFor='in-four' className='w-100 lb'>UserPassword:</label>
        <input type='text' placeholder='you password' id='in-four' className='w-100 border-0 border-bottom-2 rounded-2'/>
        <hr className='w-100  border-2'></hr>
       </div>
      <button className=' hj mb-sm-5 border-0 rounded-2 mt-sm-4'>send message</button>
      </div>
  </form>
  </div>
  </>
  )

}
