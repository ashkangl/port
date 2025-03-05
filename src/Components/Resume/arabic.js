import React from 'react'
import styles from './page.module.css'
import Link from 'next/link'

const arabic = () => {
  return (
    <div className={`${styles.fa} grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16`}>
    <div>
        <h6 className={`items-center justify-center gap-4 text-zinc-400  ${styles.fah6}`}>تعليم</h6>
        <li className="text-zinc-400 hover:text-zinc-100">
        جامعة آية الله البروجردي - هندسة الحاسوب - بكالوريوس 
        </li>

        <h6 className={`items-center justify-center gap-4 text-zinc-400 ${styles.fah6}`}>اللغات</h6>
        <li className="text-zinc-400 hover:text-zinc-100">
        فارسي - مواطن
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
        اللغة الإنجليزية - جيد جدًا
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
        الاسبانية - قلیل
        </li>

        <li className="text-zinc-400 hover:text-zinc-100">
        العربية - قليل
        </li>
    </div>
    <div className={styles.fardiv}>    
    <h6 className={`items-center justify-center gap-4 text-zinc-400 ${styles.fah6}`}>سجلات العمل</h6>
            <li className="text-zinc-400 hover:text-zinc-100">
            المبيعات لمدة ثلاث سنوات
            </li>
            <li className="text-zinc-400 hover:text-zinc-100">
            برمجة الويب منذ ثلاث سنوات وحتى الآن 
            </li>
    
        <h6 className={`items-center justify-center gap-4 text-zinc-400 ${styles.fah6}`}>المشاريع</h6>
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

            <div className="text-zinc-400 hover:text-zinc-100 mt-4 md:text-lg text-md">
                <Link href="https://github.com/ashkangl">المزيد من المشاريع على جيثب</Link>
            </div>
    </div>
    <div>
        <h6 className={`items-center justify-center gap-4 text-zinc-400 ${styles.fah6}`}>مهارات</h6>
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

export default arabic
