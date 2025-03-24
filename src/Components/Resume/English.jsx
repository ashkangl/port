import React from 'react'
import Link from 'next/link'

const English = () => {
  return (
    <div className='grid font-["ubu"] font-semibold text-slate-50 w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16'>
    <div>
        <h6 className='items-center justify-center gap-4 text-zinc-400 '>Education</h6>
        <li className="text-zinc-400 hover:text-zinc-100 !important">
        Bachelor of Engineering in Computer Engineering
        Ayatollah Borujerdi University - Iran
        </li>

        <h6 className='items-center justify-center gap-4 text-zinc-400'>Languages</h6>
        <li className="text-zinc-400 hover:text-zinc-100">
            Farsi - native
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
            English - expert
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
            Spanish - little
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
            Arabic - little
        </li>
    </div>
    <div>    
    <h6 className='items-center justify-center gap-4 text-zinc-400'>Work experience</h6>
            <li className="text-zinc-400 hover:text-zinc-100">
            Salesman from 2019 to 2022
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
            Web developing from 2021 to now
            </li>
    
        <h6 className='items-center justify-center gap-4 text-zinc-400'>Projects</h6>
            <li className="text-zinc-400 hover:text-zinc-100">
                www.shamar-co.com
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
                www.djsargarmi.ir
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
            <Link href='http://www.haircolorbyhani.ir' target="_blank" rel="noopener noreferrer">www.haircolorbyhani.ir</Link>
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
                www.divas.top
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
            <Link href='https://ghavamigold.com' target="_blank" rel="noopener noreferrer nofollow">www.ghavamigold.com</Link>
            </li>
            <div className="text-zinc-400 hover:text-zinc-100 mt-4">
                <Link href="https://github.com/ashkangl">More Projects on Github</Link>
            </div>
            
    </div>
    <div>
        <h6 className='items-center justify-center gap-4 text-zinc-400'>Skills</h6>
        <li className="text-zinc-400 hover:text-zinc-100">Fullstack</li>
        <li className="text-zinc-400 hover:text-zinc-100">Backend</li>
        <li className="text-zinc-400 hover:text-zinc-100">Frontend</li>
        <li className="text-zinc-400 hover:text-zinc-100">Restful API</li>
        <li className="text-zinc-400 hover:text-zinc-100">Node JS</li>
        <li className="text-zinc-400 hover:text-zinc-100">Express JS</li>
        <li className="text-zinc-400 hover:text-zinc-100">Next JS</li>
        <li className="text-zinc-400 hover:text-zinc-100">React JS</li>
        <li className="text-zinc-400 hover:text-zinc-100">Pyhton</li>
        <li className="text-zinc-400 hover:text-zinc-100">Flask</li>
        <li className="text-zinc-400 hover:text-zinc-100">Django</li>
        <li className="text-zinc-400 hover:text-zinc-100">Tailwind</li>
        <li className="text-zinc-400 hover:text-zinc-100">Database</li>
        <li className="text-zinc-400 hover:text-zinc-100">Mongo DB</li>
        <li className="text-zinc-400 hover:text-zinc-100">Postgresql</li>
        <li className="text-zinc-400 hover:text-zinc-100">SEO</li>

    </div>
    </div>
  )
}

export default English
