/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import Experience from "./components/Experiences";
import AboutMe from './components/AboutMe'
import Project from "./components/Projects";
// import Contact from "./components/Contact";
import {  FaGithub, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import './App.css'
import axios from 'axios'
function App() {
 
  const [experienceCompActive, setExperienceCompActive] = useState(false);
  const [projectCompActive, setProjectCompActive] = useState(false);
  const [contactCompActive, setContactCompActive] = useState(false);
   
 const [displayedProject, setDisplayeProject] = useState(null)
 
  return (
    <>
        <div  className=" relative bg-[#1c0523] px-4 md:px-20 md:flex-row flex flex-col w-full h-fit ">
          { displayedProject && <>
          <div className='w-full  fixed  z-[100]  min-h-screen h-fit  top-0 left-0 bg-[#1c052351]'>

         
 <div onClick={() => setDisplayeProject(null) } className=' cursor-pointer fixed w-full z-[100]  h-screen  top-0 left-0 bg-[#1c052351]'>
  
</div>
<div  className='h-fit min-h-[90%] top-1/2 left-1/2 absolute w-[90%]  p-5 -translate-x-1/2 -translate-y-1/2  bg-[#290634] z-[3000]'>
  <img src={displayedProject.projectImage} className='object-cover w-full rounded mb-4 h-[300px]' alt="" />
<p className=" font-light  mb-5 text-base leading-7 text-gray-400">{displayedProject.projectDescription}</p>
<a target="_blank" rel="noopener noreferrer" href={displayedProject.projectLink}>
<button className='w-full transition-all hover:bg-[#6563631a] bg-transparent border border-gray-200 rounded-full py-3 text-gray-200 '> 

 Visit Site</button>
</a>

 
  </div>
  </div>
</>
          }
         
      <div className="w-full md:w-[40%] md:sticky top-0 right-0  flex flex-col  md:flex-col md:pt-28 items-start md:pl-10  h-fit pt-32">
        <div className="w-full">
          <h1 className="  text-4xl font-[900] ">Adegoke Stephen</h1>
          <p className="mt-2 mb-4 text-xl">
            Junior Devloper at{" "}
            <span className="font-bold text-[#deadad]"> Duoworld</span>{" "}
          </p>
          <p className="text-lg mb-10 leading-8">
            I build accessible,well designed and user first products <br />
            and digital experiences fo the web
          </p>
        </div>
        <div className=" hidden md:flex flex-col font-semibold mt-6 gap-3 text-[#dcdcdc]">
        <div className="flex items-center  justify-start gap-5">
            {" "}
            <span  className={`  ${contactCompActive ? 'w-[70px]' : "w-[25px]" } h-[2px] bg-[#a9a9a9b3]`}></span>
            <p className="h-full"> About</p>{" "}
           
          </div>{" "}
          <div
            className={`flex items-center justify-start gap-2`}
          ><span
          className={`  ${experienceCompActive ? 'w-[70px]' : "w-[25px]" }
           transition-all  h-[2px] bg-[#a9a9a9b3]`}
        ></span>
            {" "}
            <p> Experiences</p>{" "}
            
          </div>{" "}
          <div className="flex items-center  cursor-pointer justify-start gap-5">
            {" "}
            <span  className={`  ${projectCompActive ? 'w-[70px]' : "w-[25px]" }   h-[2px] bg-[#a9a9a9b3]`}></span>
            <p> Projects</p>{" "}
         
          </div>{" "}
          
        </div>
     
        <div className=" flex gap-3 mt-10 ">
     
      <div className=" text-2xl text-gray-400 cursor-pointer">  <FaTwitter /></div>
    <div className=" text-2xl text-gray-400  cursor-pointer">   <FaGithub /></div>
    <div className=" text-2xl text-gray-400  cursor-pointer">   <FaLinkedinIn /></div>
     <div className=" text-2xl text-gray-400  cursor-pointer">   <FaInstagram  className=" hover:text-slate-100" /></div>
    </div>
      
        
        </div>
     

      <div className="w-full md:w-[60%]  md:pl-32  h-fit min-h-scrren ">
        <div>
          <AboutMe 
          setContactCompActive={setContactCompActive}

          contactCompActive={contactCompActive}/>
        </div>

<Experience  setExperienceCompActive={setExperienceCompActive}

experienceCompActive={experienceCompActive}
         />
<Project setDisplayeProject={setDisplayeProject} setProjectCompActive={setProjectCompActive}

projectCompActive={projectCompActive}
         />
 <p className=" mt-24 pb-24 text-[#969696b8] font-[100] text-base leading-[1.5] ">Inspiration gotten from Brittany Chang&apos;s website, Coded in Visual Studio Code. <br />
      Built using Vite and Tailwind Css , deployed to Netlify </p>
      </div>
      
    </div>
    </>
  )
}

export default App
