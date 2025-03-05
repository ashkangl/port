import whatsapp from '../../../public/what.svg';
import telegram from '../../../public/tel.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

const Price = () => {
    
    return(
        <div className="container mx-auto w-full h-full max-w-4xl mt-32">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-col-4 xl:grid-col-5">
                <div className="gap-4 text-zinc-500 max-w-[90%] ml-[5%]">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className={`font-bold text-slate-800 text-lg mb-2 ${styles.engfont}`}>Single Page Website</div>
                            <div className={`font-bold text-red-500 text-md mb-2 ${styles.engfont}`}>Start from $1000</div>
                            <p className={`text-slate-700 text-base ${styles.engfont}`}>For more info and purchase send me a message on my Telegram or Whatsapp!</p>
                            <div className="pt-3 max-w-[60%] md:max-w-[65%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className={`text-slate-700 text-sm hover:text-green-600 ${styles.engfont}`}>Click To Message</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className={`${styles.engfont} text-slate-700 text-sm hover:text-sky-400`}>Click To Message</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="gap-4 text-zinc-500 max-w-[90%] ml-[5%]">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className={`${styles.engfont} font-bold text-slate-800 text-lg mb-2`}>Blog & Business Website</div>
                            <div className={`${styles.engfont} font-bold text-red-500 text-md mb-2`}>Start from $2000</div>
                            <p className={`text-slate-700 text-base ${styles.engfont}`}>For more info and purchase send me a message on my Telegram or Whatsapp!</p>
                            <div className="pt-3 max-w-[60%] md:max-w-[65%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className={`text-slate-700 text-sm hover:text-green-600 ${styles.engfont}`}>Click To Message</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className={`${styles.engfont} text-slate-700 text-sm hover:text-sky-400`}>Click To Message</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gap-4 text-zinc-500 max-w-[90%] ml-[5%]">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className={`font-bold text-slate-800 text-lg mb-2 ${styles.engfont}`}>Ecommerce Website</div>
                            <div className={`font-bold text-red-500 text-md mb-2 ${styles.engfont}`}>Start from $5000</div>
                            <p className={`text-slate-700 text-base ${styles.engfont}`}>For more info and purchase send me a message on my Telegram or Whatsapp!</p>
                            <div className="pt-3 max-w-[60%] md:max-w-[65%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className={`text-slate-700 text-sm hover:text-green-600 ${styles.engfont}`}>Click To Message</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className={`text-slate-700 text-sm hover:text-sky-400 ${styles.engfont}`}>Click To Message</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gap-4 text-zinc-500 max-w-[90%] ml-[5%]">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className={`font-bold text-slate-800 text-lg mb-2 ${styles.engfont}`}>Full Option Website</div>
                            <div className={`font-bold text-red-500 text-md mb-2 ${styles.engfont}`}>Start from $10000</div>
                            <p className={`text-slate-700 text-base ${styles.engfont}`}>For more info and purchase send me a message on my Telegram or Whatsapp!</p>
                            <div className="pt-3 max-w-[60%] md:max-w-[65%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className={`${styles.engfont} text-slate-700 text-sm hover:text-green-600`}>Click To Message</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className={`text-slate-700 text-sm hover:text-sky-400 ${styles.engfont}`}>Click To Message</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gap-4 text-zinc-500 max-w-[90%] ml-[5%]">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className={`font-bold text-slate-800 text-lg mb-2 ${styles.engfont}`}>SEO Package</div>
                            <div className={`font-bold text-red-500 text-md mb-2 ${styles.engfont}`}>Monthly $1000</div>
                            <p className={`text-slate-700 text-base ${styles.engfont}`}>For more info and purchase send me a message on my Telegram or Whatsapp!</p>
                            <div className="pt-3 max-w-[60%] md:max-w-[65%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className={`${styles.engfont} text-slate-700 text-sm hover:text-green-600`}>Click To Message</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className={`text-slate-700 text-sm hover:text-sky-400 ${styles.engfont}`}>Click To Message</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Price