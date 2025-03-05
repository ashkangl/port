"use client";
import React from 'react'
import Iran from '../../public/iran.png'
import Usa from '../../public/united.png'
import Uae from '../../public/uae.png'
import Spain from '../../public/spain.png'
import Image from 'next/image';
import Link from 'next/link';

const flags = () => {
  return (
    <div className='flex flex-row items-center space-x-4 justify-center'>

        <Link href={`/en`}><Image unoptimized src={Usa} width={25} height={25} alt='Usa Flag' /></Link>
        <Link href={`/fa`} ><Image unoptimized src={Iran} width={25} height={25} alt='Iran Flag' /></Link>
        <Link href={`/ar`} ><Image unoptimized src={Uae} width={25} height={25} alt='Uae Flag' /></Link>
    </div>
  )
}

export default flags

//<Link href={`/es`} ><Image unoptimized src={Spain} width={25} height={25} alt='Spain Flag' /></Link>
