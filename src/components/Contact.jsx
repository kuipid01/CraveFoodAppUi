import * as React from "react";
import { useInView } from 'react-intersection-observer';
const Contact = ({setContactCompActive,ContactCompActive}) => {

  const { ref, inView, entry } = useInView({
    
    /* Optional options */
    threshold: 0,
  },);
  if (inView) {
    setContactCompActive(true)
  }
  else{
    setContactCompActive(false)
  }
  return (
    <div ref={ref} className="mt-20 bg-green-600 min-h-screen flex w-full h-fit text-[#f9e8e8]">
    <h1>Contacts</h1>
    </div>
  );
};

export default Contact