import Link from "next/link";
import React from "react";
import Particles from "@/Components/particles";
import { useTranslation } from "@/app/i18n";
import styles from './page.module.css';


export default async function Home({params : {lng}}) {

  const { t } = await useTranslation(lng)

  const navigation = [
    { name: "Resume", href: `/${lng}/resume` },
    { name: "Contact", href: `/${lng}/contact` },
    { name: "Order", href: `/${lng}/order` },
  ];

  const myName = 'Ashkan Golzad'
  // const myAbout = 'I am a website developer. As a website developer, I enjoy creating beautiful and functional websites for various clients. I have experience in using different web technologies, such as Node JS, Next JS, React JS, HTML, CSS, Javascript and WordPress. I am expert in both backend and frontend. I work as a freelancer, which gives me the flexibility and freedom to choose my own projects and schedule. I am always eager to learn new skills and improve my craft. You can communicate me in contact part for more information and purchase.'

  return (
    <div className="flex flex-col items-center justify-center w-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {lng === "en" ?
          navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='font-["ubu"] text-sm duration-500 text-zinc-300 hover:text-zinc-400'
            >
              {t(`${item.name}`)}
            </Link>
          ))
          :""}

          {/* {lng === "es" ?
          navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className=' text-sm duration-500 text-zinc-300 hover:text-zinc-400'
            >
              {t(`${item.name}`)}
            </Link>
          ))
          :""} */}

          {lng === "fa" || lng === "ar" ?
          navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='font-["far"] text-sm duration-500 text-zinc-300 hover:text-zinc-400'
            >
              {t(`${item.name}`)}
            </Link>
          ))
          :""}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={600}
      />
      {lng === "en" ? 
      <h1 className='z-10 animate-pulse text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text font-["ubu"]'>
        {t(`${myName}`)}
      </h1> : ""
      }

      {/* {lng === "es" ? 
      <h1 className='z-10 animate-pulse text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text'>
        {t(`${myName}`)}
      </h1> : ""
      } */}

      {lng === "ar" ? 
      <h1 className='z-10 animate-pulse text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text'>
        {t(`${myName}`)}
      </h1> : ""
      }

      {lng === "fa" ? 
      <h1 className='z-10 animate-pulse text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text ${styles.farsi}'>
        {t(`${myName}`)}  
      </h1> : ""
      }

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        {lng === "en" ?
        <div className=" pb-4 text-zinc-400 text-justify px-8 max-w-4xl font-['ubu']">
          <div className="py-2 md:text-lg text-md">Hello! I'm Ashkan Golzad, a seasoned Full Stack Web Developer with over 4 years of experience in Node.js, React and Next.js.I'm also diving into the exciting world of Python with Flask and django, constantly expanding my skill set to stay ahead in this ever-evolving tech landscape.</div>
          <div className="py-2 md:text-lg text-md">With a solid foundation in both MongoDB and PostgreSQL, I specialize in building robust, scalable applications that drive user engagement and efficiency. My expertise spans across front-end and back-end development, ensuring seamless and cohesive user experiences.</div>
          <div className="py-2 md:text-lg text-md">I have the capability to create websites from start to finish on my own and have developed several websites and projects. Additionally, I thrive in team environments and am known for my collaborative spirit and ability to work well within a team.</div>
          <div className="py-2 md:text-lg text-md">As a passionate software engineer, my GitHub repository is a testament to my dedication and adaptability. You'll find a diverse range of projects that showcase my ability to tackle complex challenges and deliver high-quality solutions.</div>
          <div className="py-2 md:text-lg text-md">I believe in the power of collaboration and continuous learning. If you're looking for a driven and versatile developer who can bring your ideas to life with precision and creativity, you've come to the right place. Let's build something extraordinary together.</div>
        </div>
        : lng == "fa" ?
        <div className=" pb-4 text-zinc-400 text-justify px-8 max-w-4xl font-['far']">
          <div className="py-2 md:text-lg text-md">سلام! من اشکان گلزاد هستم، یک توسعه‌دهنده فول استک وب با بیش از ۴ سال تجربه در Node.jsو    React و Next.js.همچنین در حال کاوش در دنیای مهیج پایتون با فلاسک و جانگو هستم و به طور مداوم مهارت‌های خود را گسترش می‌دهم تا در این دنیای فناورانه پویا، همیشه پیشرو باشم.</div>
          <div className="py-2 md:text-lg text-md">با داشتن یک پایه‌ی محکم در MongoDB و PostgreSQL، من تخصص در ساختن برنامه‌های پایدار و مقیاس‌پذیر دارم که بهره‌وری و تعامل کاربران را به حداکثر می‌رساند. تخصص من شامل توسعه‌ی قسمت‌های جلو و عقب است تا تجربه‌ای یکپارچه و هماهنگ برای کاربران فراهم شود.</div>
          <div className="py-2 md:text-lg text-md">من توانایی ایجاد وب‌سایت‌ها از ابتدا تا انتها به تنهایی دارم و چندین وب‌سایت و پروژه را توسعه داده‌ام. علاوه بر این، در محیط‌های تیمی به خوبی عمل می‌کنم و به خاطر روحیه‌ی همکاری و توانایی کار خوب در تیم شناخته شده‌ام.</div>
          <div className="py-2 md:text-lg text-md">به‌عنوان یک مهندس نرم‌افزار پرشور، مخزن GitHub من شاهدی بر تعهد و توانایی من در تطابق با چالش‌های پیچیده و ارائه‌ی راه‌حل‌های با کیفیت بالا است.</div>
          <div className="py-2 md:text-lg text-md">به قدرت همکاری و یادگیری مداوم اعتقاد دارم. اگر به دنبال یک توسعه‌دهنده‌ی متعهد و چندمنظوره هستید که بتواند ایده‌های شما را با دقت و خلاقیت به زندگی بیاورد، به مکان درستی آمده‌اید. بیایید با هم چیزی خارق‌العاده بسازیم.</div>
        </div>
        : lng == "ar" ?
        <div className=" pb-4 text-zinc-400 text-justify px-8 max-w-4xl font-['far']">
          <div className="py-2 md:text-lg text-md">أهلاً! أنا Ashkan Golzad، مطور ويب شامل بخبرة تزيد عن ٤ سنوات في Node.jsو  React و Next.js.كما أنني أستكشف عالم بايثون المثير مع فلاس & django، وأوسع مهاراتي باستمرار لأبقى في مقدمة هذا العالم التقني المتغير باستمرار.</div>
          <div className="py-2 md:text-lg text-md">بخبرة راسخة في MongoDB و PostgreSQL، أتخصص في بناء تطبيقات متينة وقابلة للتطوير تعزز كفاءة وتفاعل المستخدمين. تمتد مهاراتي عبر تطوير الجوانب الأمامية والخلفية لضمان تقديم تجارب مستخدم متكاملة ومنسجمة.</div>
          <div className="py-2 md:text-lg text-md">لدي القدرة على إنشاء مواقع الويب من البداية إلى النهاية بمفردي وقد طورت عدة مواقع ويب ومشاريع. بالإضافة إلى ذلك، أزدهر في بيئات العمل الجماعي ومعروف بروحي التعاونية وقدرتي على العمل بشكل جيد ضمن الفريق.</div>
          <div className="py-2 md:text-lg text-md">بصفتي مهندس برمجيات شغوف، يشهد مستودع GitHub الخاص بي على التزامي وقدرتي على التعامل مع التحديات المعقدة وتقديم حلول عالية الجودة.</div>
          <div className="py-2 md:text-lg text-md">أؤمن بقوة التعاون والتعلم المستمر. إذا كنت تبحث عن مطور متفاني ومتعدد المهام يمكنه تحويل أفكارك إلى واقع بدقة وإبداع، فقد وصلت إلى المكان الصحيح. دعونا نبني شيئًا رائعًا معًا.</div>
        </div>
        :null
        }
      </div>
    </div>
  );

}
