import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-red-600'>
        <div className='flex items-center justify-between max-w-[1240px] bg-red-600 h-16 mx-auto'>
            <div className='flex gap-x-2'>
                <img src="#" alt="Logo" />
                <h1 className='text-amber-100 font-bold text-2xl'>Mt Plongo Dia</h1>
            </div>
            <div className='flex'>
                <ul className='flex flex-row'>
                    <li className='px-4 font-semibold text-amber-50'>test</li>
                    <li className='px-4 font-semibold text-amber-50'>test</li>
                    <li className='px-4 font-semibold text-amber-50'>test</li>
                </ul>
            </div>
        </div>
        <div>
            
        </div>
    </nav>
  )
}

export default Navbar