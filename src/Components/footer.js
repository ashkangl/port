import React from 'react'
import Flags from './flags'

const footer = () => {
  return (
    <div className='flex flex-row items-center justify-center' dir='ltr'>
        <Flags />
        <h6 className="w-[50%] text-center font-['spa'] text-slate-50 md:text-lg text-sm ">&copy;ASHKANGOLZAD.IR | 2024-25</h6>
    </div>
  )
}

export default footer
