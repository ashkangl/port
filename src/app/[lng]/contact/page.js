"use client"
import { Mail , Youtube , Github , Send , Phone, MessageCircle} from "lucide-react"
import Link from "next/link"
import Navigation  from "@/Components/nav"
import {Card} from "@/Components/card"
import styles from './page.module.css'
import { useTranslation } from "@/app/i18n/client";

const socials = [
  {
    icon: <Send size={25} />,
    href: "https://t.me/ashkangl",
    label: "Telegram",
    handle: "@ashkangl"
  },
  {
    icon: <Phone size={25} />,
    href: "tel:00989965780879",
    label: "Phone",
    handle: "00989965780879"
  },
  {
    icon: <Mail size={25} />,
    href: "mailto:ashkan72golzad@gmail.com",
    label: "Email",
    handle: "ashkan72golzad@gmail.com"
  },
  {
    icon: <Youtube size={25} />,
    href: "https://youtube.com/ashkanthegreat",
    label: "Youtube",
    handle: "ashkanthegreat"
  },
  {
    icon: <Github size={25} />,
    href: "https://github.com/ashkangl",
    label: "Github",
    handle: "ashkangl"
  },
  {
    icon: <MessageCircle size={25} />,
    href: "https://wa.me/+989965780879",
    label: "Whatsapp",
    handle: "00989965780879"
  }
]

export default function Example({params :{lng}}) {

  const { t } = useTranslation(lng)


  return (
    <div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation lng={lng} />
      <div className="container flex items-center md:mt-20 pb-10 justify-center min-h-screen px-4 mx-auto">
        <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
          {socials.map(s => (
            <Card key={s.href}>
              <Link
                href={s.href}
                target="_blank"
                className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16"
              >
                <span
                  className={`absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent`}
                  aria-hidden="true"
                />
                <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                  {s.icon}
                </span>{" "}
                <div className="z-10 flex flex-col items-center">
                  <span className='lg:text-lg font-medium duration-150 xl:text-xl text-zinc-200 group-hover:text-white font-display font-["ubu"]'>
                    {t(`${s.handle}`)}
                  </span>
                  <span className='mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200 font-["ubu"'>
                    {t(`${s.label}`)}
                  </span>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
