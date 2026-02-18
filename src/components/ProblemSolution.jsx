import React from 'react'

const ProblemSolution = () => {
  return (
    <div className="bg-white">
        <div className='md:flex grid grid-cols-1 items-center justify-between max-w-[1080px] mx-auto my-12'>
            <div className='py-8'>
                <h1 className='font-bold text-neutral-800 text-2xl md:text-3xl lg:text-4xl text-center md:text-left'>Pernah Ngerasa Gini?</h1>
                <div className='mt-6 text-lg mx-6'>
                    <p className='py-0.5'>❌ Bosen sama makanan yang itu itu aja</p>
                    <p className='py-0.5'>❌ Teks</p>
                    <p className='py-0.5'>❌ Teks</p>
                </div>
            </div>
            <div className='p-12 bg-blue-500 shadow-blue-700 shadow-sm rounded-xl mx-6 my-8 lg:mx-0 max-w-[450px]'>
                <h1 className='font-bold text-2xl py-2'>... Solusinya</h1>
                <p className='font-semibold text-lg py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem mollitia quis quo explicabo unde dolores ex officia dolor quisquam in facilis rerum, magnam quidem ad incidunt tempore sapiente possimus odio!</p>
                <p className='font-semibold text-md py-2'>Teks tambahan (opsional)</p>
            </div>
        </div>
    </div>
  )
}

export default ProblemSolution