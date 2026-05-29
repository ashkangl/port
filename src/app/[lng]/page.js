import Link from "next/link";
import React from "react";
import Particles from "@/Components/particles";
import { useTranslation } from "@/app/i18n";


export default async function Home({params : {lng}}) {

  const { t } = await useTranslation(lng)

  const navigation = [
    { name: "Resume", href: `/${lng}/resume` },
    { name: "Contact", href: `/${lng}/contact` },
    // { name: "Order", href: `/${lng}/order` },
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
      <h1 className='z-10 animate-pulse text-4xl  text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text'>
        {t(`${myName}`)}
      </h1> : ""
      }

      {lng === "fa" ? 
      <h1 className='z-10 animate-pulse font-["far"] text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-8xl whitespace-nowrap bg-clip-text ${styles.farsi}'>
        {t(`${myName}`)}  
      </h1> : ""
      }

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        {lng === "en" ?
        <div className=" pb-4 text-zinc-400 text-justify px-8 max-w-4xl font-['ubu']">
          <div className="py-2 md:text-lg text-md">Hello! I'm Ashkan Golzad, a passionate Full Stack Web Developer with over 5 years of professional experience in building modern web applications and scalable digital products. My core expertise lies in Next.js, React.js, and Node.js, while I also work with Python technologies such as Flask and Django, continuously expanding my knowledge to stay aligned with the latest advancements in web development.</div>
          <div className="py-2 md:text-lg text-md">I specialize in developing complete web solutions from concept to deployment, focusing on modern user interfaces, scalable backend architectures, and high-performance applications. With strong experience in MongoDB and PostgreSQL, I build fast, reliable, and maintainable systems designed for real-world scalability.</div>
          <div className="py-2 md:text-lg text-md">Throughout my career, I have developed multiple projects independently and collaboratively, gaining valuable experience in problem-solving, teamwork, and delivering clean, high-quality solutions. I am deeply passionate about software engineering and always strive to create impactful, user-focused products with precision and creativity.</div>
          <div className="py-2 md:text-lg text-md">If you're looking for a dedicated, versatile, and detail-oriented developer to bring your ideas to life, I would be excited to collaborate and build something exceptional together.</div>
        </div>
        : lng == "fa" ?
        <div className=" pb-4 text-zinc-400 text-justify px-8 max-w-4xl font-['far']">
          <div className="py-2 md:text-lg text-md">سلام! من اشکان گلزاد هستم، توسعه‌دهنده فول‌استک وب با بیش از ۵ سال تجربه حرفه‌ای در طراحی و توسعه اپلیکیشن‌ها و وب‌سایت‌های مدرن. تخصص اصلی من در Next.js، React.js و Node.js است و در کنار آن با Python، Flask و Django نیز کار می‌کنم و همیشه در حال یادگیری و توسعه مهارت‌های خود هستم تا با جدیدترین تکنولوژی‌های دنیای وب همگام بمانم.</div>
          <div className="py-2 md:text-lg text-md">من تجربه ساخت پروژه‌های کامل از صفر تا مرحله استقرار را دارم و روی توسعه رابط‌های کاربری مدرن، بک‌اندهای مقیاس‌پذیر و معماری بهینه تمرکز می‌کنم. همچنین در کار با MongoDB و PostgreSQL تجربه بالایی دارم و توانایی طراحی سیستم‌هایی سریع، پایدار و قابل توسعه را دارم.</div>
          <div className="py-2 md:text-lg text-md">در طول مسیر حرفه‌ای خود، پروژه‌های مختلفی را به صورت مستقل و تیمی توسعه داده‌ام و به همکاری مؤثر، حل مسئله و ارائه راه‌حل‌های خلاقانه شناخته می‌شوم. علاقه من به تکنولوژی و مهندسی نرم‌افزار باعث شده همیشه به دنبال ساخت محصولات باکیفیت، بهینه و کاربرمحور باشم.</div>
          <div className="py-2 md:text-lg text-md">اگر به دنبال توسعه‌دهنده‌ای متعهد، خلاق و حرفه‌ای هستید که بتواند ایده‌های شما را به یک محصول واقعی و قدرتمند تبدیل کند، خوشحال می‌شوم با هم همکاری کنیم.</div>
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
