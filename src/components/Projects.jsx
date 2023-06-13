/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import axios from "axios";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const Project = ({ setProjectCompActive, projectCompActive,setDisplayeProject }) => {
 
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const {data} = await axios.get('https://devkuipid.onrender.com/project/')
        if (data) {
          console.log(data)
          setProjects(data)
        }
      } catch (error) {
        console.log(error)
      }
    }
fetchProjects()
  }, [])
  const [about, setAbout] = useState(false)

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  // if (inView) {
  //   setProjectCompActive(true);
  // } else {
  //   setProjectCompActive(false);
  // }
 
useEffect(() => {
    if (inView) {
      setProjectCompActive(true);
      setAbout(true)
    }
    else {
      setProjectCompActive(false);
      setAbout(false)
    }
    return () => {
     setAbout(false)
    }
  }, [inView])
 
  return (
    <div ref={ref} className=" mt-32 flex flex-col w-full h-fit text-[#f9e8e8]">
        {
        about ?   <nav className="sticky md:hidden flex w-full bg-[#1c0523fc]  left-0 top-0 shadow-lg py-2">
        <h1 className="mb-7 md:hidden uppercase font-[900] text-base text-[#d1d1d1e8] text-left">Projects</h1>
        </nav> :  <h1 className="mb-7 md:hidden uppercase font-[900] text-base text-[#d1d1d1e8] text-left">Projects</h1>
      } 
       <div className=" flex flex-col w-full ">
   {
      projects.map((project) => (
<div onClick={()  => setDisplayeProject(project)} key={project._id} className=" flex w-full hover:bg-[#9494941f] transition-all hover:rounded-xl cursor-pointer p-3  gap-5 items-start ">
  <div className=' w-[20%] '>
 <img className="mt-2 h-[80px] w-full rounded object-cover" src={project.projectImage} alt="" />
  </div>

 <div className=" w-[77%]  flex flex-col ">
 <h1 className="m-0 p-0 mb-1 text-white text-xl">{project.projectTitle}</h1>

  <p className=" font-light  mb-5 text-base leading-7 text-gray-400">{project.projectDescription}</p>

  <div className="flex mt-3 flex-wrap gap-2">
  {project?.projectTags?.map((tag) => <span  key={tag}  className=" gap-5 flex flex-wrap rounded-full text-xs py-2 px-3 text-[#239b85f4]  bg-[#239b855c]">
    {tag}
  </span> )}
  </div>
 </div>
</div>
      ))
    }
    <button disabled={true} className='w-full mt-3 transition-all hover:bg-[#6563631a] bg-transparent border border-gray-200 rounded-full py-3 text-gray-200 '> 
See More <small className="text-[10px]"> (Page Incoming)</small> </button>
   </div>
    </div>
  );
};

export default Project;
