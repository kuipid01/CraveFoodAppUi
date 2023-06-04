/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from "react";
import { useInView } from "react-intersection-observer";
const AboutMe = ({setContactCompActive,ContactCompActive}) => {
  const [about, setAbout] = React.useState(false)
  const { ref, inView, entry } = useInView({
    
    /* Optional options */
    threshold: 0,
  },);
  
 
  React.useEffect(() => {
    if (inView) {
      setContactCompActive(true)
      setAbout(true)
    }
   else{
    setContactCompActive(false)
   }
    return () => {
     setAbout(false)
    }
  }, [inView])
  
 
  return (
    <div  ref={ref} className=" relative text-[20px] font-[400] leading-[1.45] py-28 min-h-screen mb-20 flex flex-col w-full h-fit  ">
      {
        about ?   <nav className="sticky md:hidden flex w-full bg-[#1c0523fc]  left-0 top-0 shadow-lg py-2">
        <h1 className="mb-7 md:hidden uppercase font-[900] text-base text-[#d1d1d1e8] text-left">About</h1>
        </nav> :  <h1 className="mb-7 md:hidden uppercase font-[900] text-base text-[#d1d1d1e8] text-left">About</h1>
      } 
     
     
      <p >
        Back in 2014, i was editing peoples site and trying it out on wapka and
        i wholely enjoyed the experience as a teenager . Fast forward to today i
        am priviledged to say i am a Full stack Junior developer who is
        gradually evolving in all aspect of front-end and backend technologies
        in developing webapps and creating products for companies.
        <br />
        <br />
        My main focus these days is developing products for my internship company Duoworld. <br />
         In my free time I also released an online youtube
        videos  to elp i and others grow in GatsbyJs.
        <br />
        <br />
   
        If i no dey code , i am in the stadium (backyard field), showing my guys that they can witness Messi in the flesh.
        
      </p>
    </div>
  );
};

export default AboutMe;
