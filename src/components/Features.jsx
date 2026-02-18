import React from 'react'
import { FaPepperHot, FaLeaf, FaStar, FaMoneyBill } from 'react-icons/fa'

const featuresData = [
  { icon: <FaPepperHot className="text-3xl text-red-500" />, title: "Pedas Mantap", desc: "Martabak dengan sensasi pedas yang bikin nagih." },
  { icon: <FaLeaf className="text-3xl text-green-500" />, title: "Bahan Segar", desc: "Menggunakan bahan berkualitas dan fresh." },
  { icon: <FaStar className="text-3xl text-yellow-500" />, title: "Rasa Terbaik", desc: "Kualitas rasa yang selalu konsisten." },
  { icon: <FaMoneyBill className="text-3xl text-blue-500" />, title: "Harga Terjangkau", desc: "Harga pelajar yang ramah di kantong." },
]

const Features = () => {
  return (
    <div id='features' className='bg-white max-w-[1240px] mx-auto text-center my-16 px-4'>
      {/* Header */}
      <div>
        <h1 className='font-bold text-2xl md:text-3xl lg:text-4xl mb-4'>Ini bukan Martabak abal-abal</h1>
        <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl bg-gradient-to-br from-blue-600 to-blue-400 bg-clip-text text-transparent py-2'>
          Ini Martabak yang bikin nagih!
        </h2>
      </div>

      {/* Feature Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12'>
        {featuresData.map((feature, index) => (
          <div 
            key={index} 
            className='bg-neutral-100 p-6 rounded-xl border border-amber-50 shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center'
          >
            <div className='mb-4'>{feature.icon}</div>
            <h3 className='font-semibold text-lg mb-2'>{feature.title}</h3>
            <p className='text-neutral-600'>{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Features
