import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const ProblemSolution = () => {

    useEffect(() => {
        AOS.init({
            once:true,
            offset:50
        });
    }, []);

  return (
    <div className="bg-white">
        <div className='flex flex-col items-center justify-between max-w-[1080px] mx-auto my-12 overflow-x-hidden'>
            <h1 data-aos="fade-right" data-aos-duration="500" data-aos-delay="100" className='font-bold text-neutral-800 text-2xl md:text-3xl lg:text-4xl text-center mx-4'>Ngidam Pedas Tapi Pengen yang Beda?</h1>
            <p data-aos="fade-left" data-aos-duration="500" data-aos-delay="300" className='mx-4 text-center text-md md:text-lg py-6 font-semibold overflow-x-hidden'>Kalau camilan biasa udah bikin bosen, saatnya cobain sensasi baru yang lebih berani rasa dan lebih seru teksturnya.</p>
        </div>
    </div>
  )
}

export default ProblemSolution