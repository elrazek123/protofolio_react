import  image1 from './poert1.png';
import  image2 from './port2.png';
import  image3 from './port3.png';
import './protofolio.css'
export default function Portofolio()
{
  return<>
       <div className="container mt-5 d-flex flex-row flex-wrap align-content-center justify-content-center align-items-center ">
       <div className='w-100 my-5 text-center pt-4'>
        <h1 className='w-100 fs-1 fw-bolder'>PORTFOLIO COMPONENT</h1>

        <div className='bn w-100 d-flex flex-row flex-nowrap  justify-content-center align-items-center align-content-center'>
          <div className='li'></div>
          <i class="fa-solid fa-star text-black fs-2 fw-bold"></i>
          <div className='li'></div>
        </div>
       </div>

       <div className="d-flex flex-row flex-wrap justify-conetnt-between align-items-center align-content-center mt-3 py-5">
           <div className="proiject rounded-4">
                <img src={image1} className="w-100 h-100"></img>
                <div className="layer w-100 h-100">
                <i class="fa-solid fa-plus  fw-bolder text-white nn"></i>
                </div>
           </div>
           <div className="proiject rounded-4">
                <img src={image2} className="w-100 h-100"></img>
                <div className="layer w-100 h-100 ">
                <i class="fa-solid fa-plus  fw-bolder text-white"></i>
                     
                </div>
           </div>
           <div className="proiject rounded-4">
                <img src={image3} className="w-100 h-100"></img>
                <div className="layer w-100 h-100">
                <i class="fa-solid fa-plus  fw-bolder text-white"></i>
                     
                </div>
           </div>
           <div className="proiject rounded-4">
                <img src={image1} className="w-100 h-100"></img>
                <div className="layer w-100 h-100 ">
                <i class="fa-solid fa-plus fw-bolder text-white"></i>
                     
                </div>
           </div>
           <div className="proiject rounded-4">
                <img src={image2} className="w-100 h-100"></img>
                <div className="layer w-100 h-100">
                <i class="fa-solid fa-plus fw-bolder text-white"></i>
                </div>
           </div>
           <div className="proiject rounded-4">
                <img src={image3} className="w-100 h-100"></img>
                <div className="layer w-100 h-100">
                <i class="fa-solid fa-plus fw-bolder text-white"></i>
                </div>
           </div>
           <div className="proiject rounded-4">
                <img src={image1} className="w-100 h-100"></img>
                <div className="layer w-100 h-100 ">
                <i class="fa-solid fa-plus  fw-bolder text-white"></i>
                </div>
           </div>
           <div className="proiject rounded-4">
                <img src={image2} className="w-100 h-100"></img>
                <div className="layer w-100 h-100 s">
                <i class="fa-solid fa-plus  fw-bolder text-white"></i>
                </div>
           </div>
           <div className="proiject rounded-4">
                <img src={image3} className="w-100 h-100 "></img>
                <div className="layer w-100 h-100 ">
                <i class="fa-solid fa-plus  fw-bolder text-white"></i>
                </div>
           </div>

       </div>

       </div>
  </>
}