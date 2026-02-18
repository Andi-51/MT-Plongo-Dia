import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const featuresData = [
  { icon: <div className="text-3xl text-red-500">🔥</div>, desc: "Rasa pedasnya nendang tapi tetap nikmat." },
  { icon: <div className="text-3xl text-green-500">🥟</div>, desc: "Isiannya padat & berasa di setiap gigitan." },
  { icon: <div className="text-3xl text-yellow-500">🌭 </div>, desc: "Topping variatif — bebas pilih sesuai selera." },
];

const Features = () => {

    useEffect(() => {
    AOS.init({
        once:true,
        offset:100,
    });
}, []);

  return (
    <div id='features' className='bg-white max-w-[1240px] mx-auto text-center my-16 px-4'>
      <div>
        <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-4'>Apa yang bikin istimewa?</h1>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12'>
          
          <div data-aos="flip-right" data-aos-duration="300" data-aos-delay="200" className='bg-gray-100 rounded-md py-4'>
            <div className='mb-4'>
                <div className="text-3xl text-red-500">🔥</div>
            </div>
            <p className='text-neutral-600 font-semibold py-2'>
                Rasa pedasnya nendang tapi tetap nikmat.
            </p>
          </div>

          <div data-aos="flip-right" data-aos-duration="300" data-aos-delay="300" className='bg-gray-100 rounded-md py-4'>
            <div className='mb-4'>
                <div className="text-3xl text-red-500">🥟 </div>
            </div>
            <p className='text-neutral-600 font-semibold py-2'>
                Isiannya padat & berasa di setiap gigitan
            </p>
          </div>

          <div data-aos="flip-right" data-aos-duration="300" data-aos-delay="400" className='bg-gray-100 rounded-md py-4'>
            <div className='mb-4'>
                <div className="text-3xl text-red-500">🌭 </div>
            </div>
            <p className='text-neutral-600 font-semibold py-2'>
                 Topping variatif — bebas pilih sesuai selera
            </p>
          </div>

      </div>
    </div>
  )
}

export default Features
