/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */

import axios from 'axios'
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { FiExternalLink } from "react-icons/fi";
const Experience = ({setExperienceCompActive,experienceCompActive}) => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const {data} = await axios.get('https://devkuipid.onrender.com/jobs/')
        if (data) {
      
          setJobs(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
fetchJobs()
  }, [])
const [about, setAbout] = useState(false)
  const { ref, inView, entry } = useInView({
    
    /* Optional options */
    threshold: 0,
  },);

 
 
  useEffect(() => {
    if (inView) {
      setExperienceCompActive(true)
      setAbout(true)
    }
    else{
      setExperienceCompActive(false)
    }
    return () => {
     setAbout(false)
     setExperienceCompActive(false)
    }
  }, [inView])
  return (
    
    <div   ref={ref} className="mb-20  flex flex-col w-full h-fit text-[#f9e8e8]">
         {
        about ?   <nav className="sticky md:hidden flex w-full bg-[#1c0523fc]  left-0 top-0 shadow-lg py-2">
        <h1 className="mb-7 md:hidden uppercase font-[900] text-base text-[#d1d1d1e8] text-left">Experience</h1>
        </nav> :  <h1 className="mb-7 md:hidden uppercase font-[900] text-base text-[#d1d1d1e8] text-left">Experience</h1>
      } 
     
   <div className=" flex flex-col w-full ">
   {
      jobs?.map((project) => (
<div key={project._id} className=" md:flex-row flex flex-col w-full hover:bg-[#9494941f] transition-all hover:rounded-xl cursor-pointer p-3  gap-5 items-start ">
  <div className=' md:w-[20%] w-full'>
  <h4 className=" w-full mt-2  font-bold text-xs text-gray-600"> {project.jobDuration} </h4>
  </div>

 <div className=" group md:w-[77%] w-full flex flex-col ">
  <div className='flex items-center'> <h1 className="m-0 p-0 mb-1  text-white text-xl">{project.jobTitle}  </h1>  <span className='ml-2 group-hover:pl-1 transition-all group-hover:text-[20px] group-hover:pb-1'> <FiExternalLink/></span></div>

  <h1 className="mb-3 text-gray-400 font-bold text-[13px] t">{project.jobPosition}</h1>
  <p className=" font-light  mb-5 text-base leading-7 text-gray-400">{project.jobDescription}</p>

  <div className="flex mt-3 flex-wrap gap-2">
  {project.jobTags.map((tag) => <span key={tag}  className=" gap-5 flex flex-wrap rounded-full text-xs py-2 px-3 text-[#239b85f4]  bg-[#239b855c]">
    {tag}
  </span> )}
  </div>
 </div>
</div>
      ))
    }
   </div>
  
    </div>
  );
};

export default Experience