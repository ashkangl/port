import React from 'react'
import Link from 'next/link'
import hbh from '../../../public/hbh.png'
import Image from 'next/image'

const Farsi = () => {
  return (
    <div className='text-slate-50 font-["far"] grid w-full grid-cols-1 gap-10 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16'>

      {/* Education */}
      <div>

        <h6 className='text-zinc-400 mb-3 text-lg'>
          سوابق تحصیلی
        </h6>

        <div className="flex flex-col gap-2">

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            کارشناسی مهندسی کامپیوتر
          </div>

          <div className="text-zinc-500">
            دانشگاه آیت الله بروجردی - ایران
          </div>

        </div>


        <h6 className='text-zinc-400 mb-3 mt-10 text-lg'>
          زبان ها
        </h6>

        <div className="flex flex-col gap-2">

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            فارسی - زبان مادری
          </div>

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            انگلیسی - پیشرفته
          </div>

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            اسپانیایی - مقدماتی
          </div>

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            عربی - مقدماتی
          </div>

        </div>

      </div>


      {/* Experience & Projects */}
      <div>

        <h6 className='text-zinc-400 mb-3 text-lg'>
          سوابق کاری
        </h6>

        <div className="flex flex-col gap-2">

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            فروشندگی از سال ۱۳۹۸ تا ۱۴۰۱
          </div>

          <div className="text-zinc-400 hover:text-zinc-100 duration-300">
            توسعه دهنده فول استک وب از سال ۱۴۰۰ تاکنون
          </div>

        </div>


        {/* Real Projects */}
        <h6 className='text-zinc-400 mb-3 mt-10 text-lg'>
          پروژه های واقعی
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


        {/* Github */}
        <h6 className='text-zinc-400 mb-3 mt-10 text-lg'>
          پروژه های گیتهاب
        </h6>

        <div className='flex flex-col gap-2'>

          <Link
            href='https://github.com/ashkangl'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300 font-bold md:text-2xl text-lg"
          >
            مشاهده گیتهاب
          </Link>

          <Link
            href='https://eshopz.vercel.app/'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
            فروشگاه اینترنتی (Next JS)
          </Link>

          <Link
            href='https://nextjs-flask-weather-app.vercel.app/'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
           هواشناسی (Next JS + Flask)
          </Link>

          <Link
            href='https://react-eshopz.vercel.app/'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
            فروشگاه اینترنتی (React JS)
          </Link>

          <Link
            href='https://next-js-responsive-photo-album.vercel.app/'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
            آلبوم عکس تک صفحه ای (Next JS)
          </Link>

          <Link
            href='https://react-multi-language.vercel.app/'
            target="_blank"
            className="text-zinc-400 hover:text-zinc-100 duration-300"
          >
           چند زبانه ساده (React JS)
          </Link>

        </div>

      </div>


      {/* Skills */}
      <div>

        <h6 className='text-zinc-400 mb-3 text-lg'>
          مهارت ها
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

export default Farsi