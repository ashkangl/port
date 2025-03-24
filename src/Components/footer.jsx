"use client"
import Flags from './flags'

const footer = () => {
  return (
    <div className='flex flex-row items-center text-white justify-center' dir='ltr'>
        <div className='flex-initial md:w-1/2 w-1/3'>
        <Flags />
        </div>
        <div className='flex-initial md:w-1/2 w-2/3'>
        <h6 className="md:w-[50%] md:ml-[25%] text-center font-['spa'] text-slate-50 md:text-lg text-sm ">&copy;ASHKANGOLZAD.IR | 2024-25</h6>
        </div>
    </div>
  )
}

export default footer
