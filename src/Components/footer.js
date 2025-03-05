import React from 'react'
import styles from './page.module.css'
import Flags from './flags'

const footer = () => {
  return (
    <div className='flex' dir='ltr'>
        <div className='flex-initial md:w-1/2 w-1/3'>
        <Flags />
        </div>
        <div className='flex-initial text-center md:w-1/2 w-2/3'>
        <div className='font-["spa"] text-white md:text-lg text-sm'>&copy;ASHKANGOLZAD.IR | 2024-25</div>
        </div>
    </div>
  )
}

export default footer
