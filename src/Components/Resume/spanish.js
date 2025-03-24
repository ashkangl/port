import React from 'react'
import Link from 'next/link'

const spanish = () => {
  return (
    <div className={` grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16`}>
    <div>
        <h6 className={`items-center justify-center gap-4 text-zinc-400  `}>Educación</h6>
        <li className="text-zinc-400 hover:text-zinc-100">
        Licenciatura en Ingeniería en Ingeniería Informática
        Ayatollah Borujerdi University - Iran
        </li>

        <h6 className={`items-center justify-center gap-4 text-zinc-400 `}>Idiomas</h6>
        <li className="text-zinc-400 hover:text-zinc-100">
            Farsi - nativo
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
            Inglés - experto
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
            Español - poco
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
            Árabe - poco
        </li>
    </div>
    <div>    
    <h6 className={`items-center justify-center gap-4 text-zinc-400 `}>Experiencia laboral</h6>
            <li className="text-zinc-400 hover:text-zinc-100">
            Vendedor de 2019 a 2022
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
            Desarrollo web desde 2021 hasta ahora
            </li>
    
        <h6 className={`items-center justify-center gap-4 text-zinc-400 `}>Proyectos</h6>
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
    </div>
    <div>
        <h6 className={`items-center justify-center gap-4 text-zinc-400 `}>Habilidades</h6>
        <li className="text-zinc-400 hover:text-zinc-100">Fullstack</li>
        <li className="text-zinc-400 hover:text-zinc-100">Frontend</li>
        <li className="text-zinc-400 hover:text-zinc-100">Backend</li>
        <li className="text-zinc-400 hover:text-zinc-100">Node JS</li>
        <li className="text-zinc-400 hover:text-zinc-100">Restful API</li>
        <li className="text-zinc-400 hover:text-zinc-100">Express JS</li>
        <li className="text-zinc-400 hover:text-zinc-100">Next JS</li>
        <li className="text-zinc-400 hover:text-zinc-100">React JS</li>
        <li className="text-zinc-400 hover:text-zinc-100">Database</li>
        <li className="text-zinc-400 hover:text-zinc-100">SEO</li>
        <li className="text-zinc-400 hover:text-zinc-100">Mongo DB</li>
        <li className="text-zinc-400 hover:text-zinc-100">HTML , CSS</li>
        
    </div>
    </div>
  )
}

export default spanish
