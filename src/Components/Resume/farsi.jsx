import React from 'react'
import Link from 'next/link'

const farsi = () => {
  return (
    <div className='text-slate-50 font-["far"] grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16'>
    <div>
        <h6 className='items-center justify-center gap-4 text-zinc-400  '>سوابق تحصیلی</h6>
        <li className="text-zinc-400 hover:text-zinc-100 full-width">
            دانشگاه آیت ا... بروجردی - مهندسی کامپیوتر - کارشناسی
        </li>

        <h6 className='items-center justify-center gap-4 text-zinc-400 '>زبان های خارجی</h6>
        <li className="text-zinc-400 hover:text-zinc-100">
            فارسی - بومی
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
            انگلیسی - خیلی خوب
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
            اسپانیایی - کم
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
            عربی - کم
        </li>
    </div>
    <div className='top-0'>    
    <h6 className='items-center justify-center gap-4 text-zinc-400 '>سوابق کاری</h6>
            <li className="text-zinc-400 hover:text-zinc-100">
            فروشندگی از سال 1397 تا پایان 1400
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
            برنامه نویسی وب از 1400 تاکنون
            </li>
    
        <h6 className='items-center justify-center gap-4 text-zinc-400 '>پروژه ها</h6>
            <li className="text-zinc-400 hover:text-zinc-100">
            www.shamar-co.com
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
            www.djsargarmi.ir
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
            <Link href='http://haircolorbyhani.ir' target="_blank" rel="noopener noreferrer">
            www.haircolorbyhani.ir
            </Link>
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
            www.divas.top
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
            <Link href='https://ghavamigold.com' target="_blank" rel="noopener noreferrer nofollow">www.ghavamigold.com</Link>
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
            <Link href='https://hkan.trade' target="_blank" rel="noopener noreferrer">www.hkan.trade</Link>
            </li>
            <div className="text-zinc-400 hover:text-zinc-100 mt-4 md:text-lg text-md">
                <Link href="https://github.com/ashkangl">پروژه های بیشتر در گیتهاب</Link>
            </div>
    </div>
    <div>
        <h6 className='items-center justify-center gap-4 text-zinc-400 '>توانایی ها  و مهارت ها</h6>
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

export default farsi
