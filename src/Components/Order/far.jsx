import Link from 'next/link'
import Image from 'next/image'
import whatsapp from '../../../public/what.svg';
import telegram from '../../../public/tel.svg';

const Price = () => {
    return(
        <div className="container mx-auto w-full h-full max-w-4xl mt-32 font-['far']">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-col-4 xl:grid-col-5">

                <div className="gap-4 text-zinc-500 max-w-[90%] mr-[5%]">
                    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className=' font-bold text-slate-800 text-lg mb-2'>سایت تک صفحه ای</div>
                            <p className='text-slate-700 text-base '>* قالب اختصاصی</p>
                            <p className='text-slate-700 text-base '>* برنامه نویسی شده</p>
                            <div className=' font-bold text-red-500 text-md mb-2'>شروع از 8 میلیون تومان</div>
                            <p className='text-slate-700 text-base '>برای مشاوره و سفارش از طریق واتساپ یا تلگرام پیام دهید!</p>
                            <div className="pt-3 max-w-[45%] md:max-w-[52.5%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 font-bold text-sm hover:text-green-600 '>برای آغاز کلیک کنید</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className=' font-bold text-slate-700 text-sm hover:text-sky-400'>برای آغاز کلیک کنید</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gap-4 text-zinc-500 max-w-[90%] mr-[5%]">
                    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className='font-bold text-slate-800 text-lg mb-2 '>سایت شرکتی یا بلاگ</div>
                            <p className='text-slate-700 text-base '>* قالب اختصاصی</p>
                            <p className='text-slate-700 text-base '>* برنامه نویسی شده</p>
                            <div className='font-bold text-red-500 text-md mb-2 '>شروع از 25 میلیون تومان</div>
                            <p className='text-slate-700 text-base '>برای مشاوره و سفارش از طریق واتساپ یا تلگرام پیام دهید!</p>
                            <div className="pt-3 max-w-[45%] md:max-w-[52.5%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 font-bold text-sm hover:text-green-600 '>برای آغاز کلیک کنید</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 font-bold text-sm hover:text-sky-400 '>برای آغاز کلیک کنید</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gap-4 text-zinc-500 max-w-[90%] mr-[5%]">
                    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className='font-bold text-slate-800 text-lg mb-2 '>سایت فروشگاهی</div>
                            <p className='text-slate-700 text-base '>* قالب اختصاصی</p>
                            <p className='text-slate-700 text-base '>* برنامه نویسی شده</p>
                            <div className='font-bold text-red-500 text-md mb-2 '>شروع از 45 میلیون تومان</div>
                            <p className='text-slate-700 text-base '>برای مشاوره و سفارش از طریق واتساپ یا تلگرام پیام دهید!</p>
                            <div className="pt-3 max-w-[45%] md:max-w-[52.5%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 font-bold text-sm hover:text-green-600 '>برای آغاز کلیک کنید</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 font-bold text-sm hover:text-sky-400 '>برای آغاز کلیک کنید</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gap-4 text-zinc-500 max-w-[90%] mr-[5%]">
                    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className='font-bold text-slate-800 text-lg mb-2 '>سایت وردپرس</div>
                            <p className='text-slate-700 text-base '>* قالب آماده</p>
                            <div className='font-bold text-red-500 text-md mb-2 '>شروع از 12 میلیون تومان</div>
                            <p className='text-slate-700 text-base '>برای مشاوره و سفارش از طریق واتساپ یا تلگرام پیام دهید!</p>
                            <div className="pt-3 max-w-[45%] md:max-w-[52.5%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 font-bold text-sm hover:text-green-600 '>برای آغاز کلیک کنید</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className=' font-bold text-slate-700 text-sm hover:text-sky-400'>برای آغاز کلیک کنید</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="gap-4 text-zinc-500 max-w-[90%] mr-[5%]">
                    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className='font-bold text-slate-800 text-lg mb-2 '>سئو</div>
                            <p className='text-slate-700 text-base '>* پکیج کامل</p>
                            <div className='font-bold text-red-500 text-md mb-2 '>ماهانه 10 میلیون تومان</div>
                            <p className='text-slate-700 text-base '>برای مشاوره و سفارش از طریق واتساپ یا تلگرام پیام دهید!
                            </p>
                            <div className="pt-3 max-w-[45%] md:max-w-[52.5%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className=' font-bold text-slate-700 text-sm hover:text-green-600'>برای آغاز کلیک کنید</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 font-bold text-sm hover:text-sky-400 '>برای آغاز کلیک کنید</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="gap-4 text-zinc-500 max-w-[90%] mr-[5%]">
                    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-zinc-300 hover:bg-zinc-100">
                        <div className="px-6 py-4">
                            <div className='font-bold text-slate-800 text-lg mb-2 '>سایت فول آپشن</div>
                            <p className='text-slate-700 text-base '>با همه امکانات درخواستی</p>
                            <div className='font-bold text-red-500 text-md mb-2 '>شروع از 100 میلیون تومان</div>
                            <p className='text-slate-700 text-base '>برای مشاوره و سفارش از طریق واتساپ یا تلگرام پیام دهید!
                            </p>
                            <div className="pt-3 max-w-[45%] md:max-w-[52.5%]">
                                <Link href='https://wa.me/+989965780879' className='flex justify-between'>
                                    <div>
                                        <Image src={whatsapp} alt='message me on whatsapp' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className=' font-bold text-slate-700 text-sm hover:text-green-600'>برای آغاز کلیک کنید</p>
                                    </div>
                                </Link>
                                

                                <Link href='https://t.me/ashkangl' className='flex justify-between pt-2'>
                                    <div>
                                        <Image src={telegram} alt='message me on telegram' height={20} weight={20} />
                                    </div>

                                    <div>
                                        <p className='text-slate-700 font-bold text-sm hover:text-sky-400 '>برای آغاز کلیک کنید</p>
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