import React from 'react'
import Link from 'next/link'
import hbh from '../../../public/hbh.png'
import Image from 'next/image'

const English = () => {
  return (
    <div className='grid font-["ubu"] font-semibold text-slate-50 w-full grid-cols-1 gap-10 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16'>

      {/* Education */}
      <div>

        <h6 className='text-zinc-400 mb-3 text-lg'>
          Education
        </h6>

        <div className="flex flex-col gap-2">

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            Bachelor of Engineering in Computer Engineering
          </div>

          <div className="text-zinc-500">
            Ayatollah Borujerdi University - Iran
          </div>

        </div>


        <h6 className='text-zinc-400 mb-3 mt-10 text-lg'>
          Languages
        </h6>

        <div className="flex flex-col gap-2">

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            Farsi - Native
          </div>

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            English - Advanced
          </div>

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            Spanish - Basic
          </div>

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            Arabic - Basic
          </div>

        </div>

      </div>


      {/* Experience & Projects */}
      <div>

        <h6 className='text-zinc-400 mb-3 text-lg'>
          Work Experience
        </h6>

        <div className="flex flex-col gap-2">

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            Salesman from 2019 to 2022
          </div>

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            Full Stack Web Developer from 2021 until now
          </div>

        </div>


        {/* Real Projects */}
        <h6 className='text-zinc-400 mb-3 mt-10 text-lg'>
          Real World Projects
        </h6>

        <div className='flex flex-col gap-2'>

        <div>
          <Link
            href='https://www.haircolorbyhani.ir'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
            www.haircolorbyhani.ir
          </Link>
          <Image unoptimized src={hbh} width={200} height={120} alt='hair color by hani screenshot' className='mt-2 hover:scale-110 duration-200' />
        </div>

          <Link
            href='https://hkan.trade'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
            www.hkan.trade
          </Link>

        </div>


        {/* Github Projects */}
        <h6 className='text-zinc-400 mb-3 mt-10 text-lg'>
          GitHub Projects
        </h6>

        <div className='flex flex-col gap-2'>

          <Link
            href='https://github.com/ashkangl'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300 font-bold md:text-2xl text-lg"
          >
            GitHub Profile
          </Link>

          <Link
            href='https://eshopz.vercel.app/'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
            Ecommerce (Next JS)
          </Link>

          <Link
            href='https://nextjs-flask-weather-app.vercel.app/'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
           Weather (Next JS + Flask)
          </Link>

          <Link
            href='https://react-eshopz.vercel.app/'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
           Ecommerce (React JS)
          </Link>

          <Link
            href='https://next-js-responsive-photo-album.vercel.app/'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
           Photo Album (Next JS)
          </Link>

          <Link
            href='https://react-multi-language.vercel.app/'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
          Simple Multiple Language (React JS)
          </Link>


        </div>

      </div>


      {/* Skills */}
      <div>

        <h6 className='text-zinc-400 mb-3 text-lg'>
          Skills
        </h6>

        <div className='flex flex-col gap-2'>

          <div className="text-zinc-400 hover:text-zinc-100">Full Stack Development</div>
          <div className="text-zinc-400 hover:text-zinc-100">Frontend Development</div>
          <div className="text-zinc-400 hover:text-zinc-100">Backend Development</div>
          <div className="text-zinc-400 hover:text-zinc-100">RESTful APIs</div>
          <div className="text-zinc-400 hover:text-zinc-100">Node.js</div>
          <div className="text-zinc-400 hover:text-zinc-100">Express.js</div>
          <div className="text-zinc-400 hover:text-zinc-100">Next.js</div>
          <div className="text-zinc-400 hover:text-zinc-100">React.js</div>
          <div className="text-zinc-400 hover:text-zinc-100">Python</div>
          <div className="text-zinc-400 hover:text-zinc-100">Flask</div>
          <div className="text-zinc-400 hover:text-zinc-100">Django</div>
          <div className="text-zinc-400 hover:text-zinc-100">Tailwind CSS</div>
          <div className="text-zinc-400 hover:text-zinc-100">MongoDB</div>
          <div className="text-zinc-400 hover:text-zinc-100">PostgreSQL</div>
          <div className="text-zinc-400 hover:text-zinc-100">SEO</div>

        </div>

      </div>

    </div>
  )
}

export default English