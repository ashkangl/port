import Link from 'next/link'
import Image from 'next/image'
import whatsapp from '../../../public/what.svg';
import telegram from '../../../public/tel.svg';

const Price = () => {
    return(
        <div className="container mx-auto w-full h-full max-w-4xl mt-32">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-col-4 xl:grid-col-5">
                <div className="gap-4 text-zinc-500 max-w-[90%] mr-[5%]">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className='font-bold text-slate-800 text-lg mb-2 '>موقع صفحة واحدة</div>
                            <div className='font-bold text-red-500 text-md mb-2 '>From AED2500</div>
                            <p className='text-slate-700 text-base '>لمزيد من المعلومات والشراء أرسل لي رسالة على تلغرام أو الواتساب!</p>
                            <div className="pt-3 max-w-[35%] md:max-w-[40%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 text-sm hover:text-green-600 '>انقر للرسالة</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className=' text-slate-700 text-sm hover:text-sky-400'>انقر للرسالة</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="gap-4 text-zinc-500 max-w-[90%] mr-[5%] font-['far']">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className='font-bold text-slate-800 text-lg mb-2'>مدونة وموقع الأعمال
                            </div>
                            <div className=' font-bold text-red-500 text-md mb-2'>From AED5000</div>
                            <p className='text-slate-700 text-base '>لمزيد من المعلومات والشراء أرسل لي رسالة على تلغرام أو الواتساب!</p>
                            <div className="pt-3 max-w-[35%] md:max-w-[40%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 text-sm hover:text-green-600 '>انقر للرسالة</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className=' text-slate-700 text-sm hover:text-sky-400'>انقر للرسالة</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gap-4 text-zinc-500 max-w-[90%] mr-[5%]">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className='font-bold text-slate-800 text-lg mb-2 '>متجر التجارة الإلكترونية
                            </div>
                            <div className='font-bold text-red-500 text-md mb-2 '>From AED10000</div>
                            <p className='text-slate-700 text-base '>لمزيد من المعلومات والشراء أرسل لي رسالة على تلغرام أو الواتساب!</p>
                            <div className="pt-3 max-w-[35%] md:max-w-[40%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 text-sm hover:text-green-600 '>انقر للرسالة</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 text-sm hover:text-sky-400 '>انقر للرسالة</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gap-4 text-zinc-500 max-w-[90%] mr-[5%]">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className='font-bold text-slate-800 text-lg mb-2 font-["far"]'>موقع الخيار الكامل</div>
                            <div className='font-bold text-red-500 text-md mb-2 '>From AED25000</div>
                            <p className='text-slate-700 text-base '>لمزيد من المعلومات والشراء أرسل لي رسالة على تلغرام أو الواتساب!
                            </p>
                            <div className="pt-3 max-w-[35%] md:max-w-[40%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className=' text-slate-700 text-sm hover:text-green-600'>انقر للرسالة</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 text-sm hover:text-sky-400 '>انقر للرسالة</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gap-4 text-zinc-500 max-w-[90%] mr-[5%]">
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className='font-bold text-slate-800 text-lg mb-2 '>SEO</div>
                            <div className='font-bold text-red-500 text-md mb-2 '>Monthly AED2000</div>
                            <p className='text-slate-700 text-base '>لمزيد من المعلومات والشراء أرسل لي رسالة على تلغرام أو الواتساب!
                            </p>
                            <div className="pt-3 max-w-[35%] md:max-w-[40%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className=' text-slate-700 text-sm hover:text-green-600'>انقر للرسالة</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 text-sm hover:text-sky-400 '>انقر للرسالة</p>
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